import React, { HTMLProps } from 'react'

interface LineProps {
    color?: string
    className?: HTMLProps<HTMLElement>["className"]; // Custom class name
    size?: number | string

}

const Line = ({ color = "#000000", className, size = "1px" }: LineProps) => {

    return (
        <div style={{
            height: size,
            backgroundColor: color
        }} className={className + "flex flex-1 w-[100%]"} />
    )
}

export default Line
