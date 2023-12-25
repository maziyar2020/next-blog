import React from 'react'

const BaseInput = ({ label, name, formik, type = "text", className, placeHolder = "" }) => {
    return (
        <div className={className}>
            <label className="flex flex-row mb-2 text-md  text-[#8c8c8e] " htmlFor={name} >
                {label}
                {
                    formik.touched[name] && formik.errors[name] ?
                        <div className="flex-1 ml-2 text-red-500 opacity-95 text-left text-sm">
                            {formik.errors[name]}
                        </div>
                        : null

                }
            </label>
            <input
                dir="ltr"
                placeholder={placeHolder}
                className="text-left bg-white border-2 p-3 text-sm rounded-md border-[#ffc107] w-full focus:outline-none"
                type={type || "text"}
                id={name}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
        </div>
    )
}

export default BaseInput
