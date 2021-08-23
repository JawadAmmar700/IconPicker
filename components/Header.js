import React, { Suspense } from "react"
import Image from "next/image"
import Input from "@material-tailwind/react/Input"
import { useFilterIcons } from "../customHooks/useFilterIcons"
import { useSelector, useDispatch } from "react-redux"

const Header = () => {
  const [inputF, setInputF] = React.useState("")
  const { price, style } = useSelector(state => state.input)

  const dispatch = useDispatch()

  const onSubmit = async e => {
    e.preventDefault()
    dispatch({
      type: "SET_ICONS",
      payload: null,
    })
    dispatch({
      type: "SET_INPUT",
      payload: inputF,
    })
    const check1 = price
    const check2 = style
    const search = inputF
    const icons = await useFilterIcons(check1, check2, search).then(
      data => data
    )
    dispatch({
      type: "SET_ICONS",
      payload: icons,
    })
    setInputF("")
  }

  return (
    <div>
      <div className="w-full h-16 mx-auto flex items-center  justify-between p-4 border-b border-blue-700 ">
        <Image src="/vercel.svg" width="100" height="100" />
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            color="blue"
            size="regular"
            outline={true}
            placeholder="Search icon"
            onChange={e => setInputF(e.target.value)}
            value={inputF}
            className="border border-blue-700"
          />
        </form>
      </div>
    </div>
  )
}

export default Header
