import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import ReactPaginate from "react-paginate"
import Button from "@material-tailwind/react/Button"
import Popover from "@material-tailwind/react/Popover"
import PopoverContainer from "@material-tailwind/react/PopoverContainer"
import PopoverHeader from "@material-tailwind/react/PopoverHeader"
import PopoverBody from "@material-tailwind/react/PopoverBody"

const Icons = () => {
  const icons = useSelector(state => state.input.icons)
  const input = useSelector(state => state.input.input)
  const [posts, setPosts] = React.useState()
  const [size, setSize] = useState(0)

  const buttonRef = useRef()

  React.useEffect(() => {
    setPosts(icons?.icons?.slice(0, 18))
  }, [icons])

  const PageCount = ({ selected }) => {
    const previousData = posts.length * selected
    setPosts(icons?.icons?.slice(previousData, previousData + 18))
  }

  return (
    <div className="-mt-96 lg:mt-0  ">
      <p className="mt-2 p-4">
        Search results for: {input ? input : "Home "} icons
      </p>
      {icons?.icons ? (
        <>
          <div className="grid grid-cols-3 lg:grid-cols-6 w-[90%] gap-2 place-items-center mt-10  mx-auto  ">
            {posts?.map((icon, id) => (
              <div
                key={id}
                className="w-[120px] p-2 h-36 cursor-pointer hover:border border-blue-600 rounded flex flex-col justify-between items-center "
              >
                <img
                  loading="lazy"
                  src={icon.raster_sizes[3]?.formats[0].preview_url}
                  className={` cursor-pointer scale-100 hover:scale-105 ${
                    icon?.raster_sizes[3]?.size != 24 && "w-[24px]"
                  } `}
                />

                <Button
                  color="lightBlue"
                  buttonType="link"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="dark"
                  ref={buttonRef}
                >
                  collect
                </Button>
                <Popover placement="top" ref={buttonRef}>
                  <PopoverContainer>
                    <PopoverHeader>Icon Detial</PopoverHeader>
                    <PopoverBody>
                      <p className="text-base leading-relaxed text-gray-600 font-normal">
                        copy link:
                      </p>
                      <a
                        className="text-base leading-relaxed text-gray-600 font-normal hover:underline"
                        href={icon.raster_sizes[size]?.formats[0].preview_url}
                        target="_blank"
                      >
                        {icon.raster_sizes[size]?.formats[0].preview_url}
                      </a>
                      <p className="text-base leading-relaxed text-gray-600 font-normal mt-4">
                        Or download
                      </p>
                      <div className="flex justify-center items-center space-x-4">
                        <a
                          className="w-[100px] mt-2 h-10 text-white hover:bg-blue-400 bg-blue-500 rounded flex items-center justify-center cursor-pointer"
                          ripple="light"
                          href={icon.raster_sizes[size]?.formats[0].preview_url}
                          download
                        >
                          Download
                        </a>
                        <div>
                          <p>select a size</p>
                          <select
                            className=" border-2 border-blue-400 rounded outline-none cursor-pointer"
                            onChange={event => setSize(event.target.value)}
                          >
                            {icon.vector_sizes[0].target_sizes[0].map(
                              (size, id) => (
                                <option key={size} value={id}>
                                  {size}px
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </PopoverBody>
                  </PopoverContainer>
                </Popover>
              </div>
            ))}
          </div>
          <ReactPaginate
            pageCount={icons.icons.length / 18}
            onPageChange={PageCount}
            containerClassName="flex mt-5 "
            pageLinkClassName=""
            activeClassName="w-4 h-6 rounded bg-blue-500 "
            pageClassName="ml-4 flex items-center justify-center"
            previousLinkClassName="ml-4"
            nextLinkClassName="ml-4"
          />
        </>
      ) : (
        <img
          src="https://img.icons8.com/fluency/48/000000/loading.png"
          className="animate-spin w-10 h-10 mx-auto"
          alt=""
        />
      )}
    </div>
  )
}

export default Icons
