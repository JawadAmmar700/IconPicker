import React from "react"
import { useFilterIcons } from "../customHooks/useFilterIcons"
import { useSelector, useDispatch } from "react-redux"
import Radio from "@material-tailwind/react/Radio"

const Filters = () => {
  const [check1, setCheck1] = React.useState("")
  const [check2, setCheck2] = React.useState("")
  const search = useSelector(state => state.input.input)
  const dispatch = useDispatch()

  async function radio1(check1) {
    setCheck1(check1)
    dispatch({
      type: "SET_PRICE",
      payload: check1,
    })
    dispatch({
      type: "SET_ICONS",
      payload: null,
    })
    const new1 = await useFilterIcons(check1, check2, search).then(data => data)
    console.log(new1)
    dispatch({
      type: "SET_ICONS",
      payload: new1,
    })
  }
  async function radio2(check2) {
    setCheck2(check2)
    dispatch({
      type: "SET_STYLE",
      payload: check2,
    })
    dispatch({
      type: "SET_ICONS",
      payload: null,
    })
    const new1 = await useFilterIcons(check1, check2, search).then(data => data)
    console.log(new1)
    dispatch({
      type: "SET_ICONS",
      payload: new1,
    })
  }
  return (
    <div className="flex spacex-4 h-auto    lg:block">
      <p className="p-2">Filters</p>
      <div className="p-4">
        <Radio
          color="lightBlue"
          text="All prices"
          id="All prices"
          name="price"
          value="All prices"
          defaultChecked={true}
          onChange={check => radio1(check.target.value)}
        />
        <Radio
          color="lightBlue"
          text="free"
          id="free"
          value="free"
          onChange={check => radio1(check.target.value)}
          name="price"
        />
        <Radio
          color="lightBlue"
          text="premium"
          id="premium"
          value="premium"
          name="price"
          onChange={check => radio1(check.target.value)}
        />
      </div>
      <div className="p-4 lg:mt-4">
        <Radio
          color="lightBlue"
          name="style"
          text="All styles"
          id="All styles"
          value="outline"
          defaultChecked={true}
          onChange={check => radio2(check.target.value)}
        />
        <Radio
          color="lightBlue"
          name="style"
          text="solid"
          id="solid"
          value="solid"
          onChange={check => radio2(check.target.value)}
        />
        <Radio
          color="lightBlue"
          text="semi-solid"
          id="semi-solid"
          name="style"
          value="semi-solid"
          onChange={check => radio2(check.target.value)}
        />
        <Radio
          color="lightBlue"
          text="outline"
          id="outline"
          value="outline"
          onChange={check => radio2(check.target.value)}
          name="style"
        />
        <Radio
          color="lightBlue"
          text="filled-outline"
          id="filled-outline"
          value="filled-outline"
          name="style"
          onChange={check => radio2(check.target.value)}
        />
      </div>
    </div>
  )
}

export default Filters
