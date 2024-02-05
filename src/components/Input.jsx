/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React, { useId } from 'react'

const input = React.forwardRef(function input({
    lable, type = "text", className = "", ...props
}, ref) {
    const id = useId()
    return <div className='w-full ' >
        {lable && <lable className="inline-block mb-1 pl-1"
            htmlFor={id}>
            {lable}
        </lable>}
        <input
            type={type}
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref = {ref}
            {...props}
            id={id}
        ></input>
    </div>
})

export default input