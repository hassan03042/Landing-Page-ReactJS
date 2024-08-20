function Button({label, borderColor, bgColor, textColor, onClick}) {
    return (
        <button className={`border 
        ${borderColor ? borderColor : "border-yellow-500"} 
        ${bgColor ? bgColor : "bg-yellow-400"} 
        ${textColor ? textColor : "text-black"} font-bold rounded-md p-2 px-4 m-4`}>
            {label}</button>
    )
}

export default Button;