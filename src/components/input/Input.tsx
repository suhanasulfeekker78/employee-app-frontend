import "./Input.css"

interface InputProps{
    type:string
    id:string
    name: string
    placeholder?:string
    label?: string
    inputClass?:string
    labelClass?:string
    containerClass?:string
    isRequired?:boolean
}

const Input = ({
    type, 
    id, 
    placeholder, 
    name, 
    inputClass="input-box", 
    label, 
    labelClass,
    containerClass,
    isRequired}: InputProps) => {
    return (
        <>
            <div className={containerClass}>
                {label && <label htmlFor={id} className={labelClass}>{label}</label>}
                < input className={inputClass} type={type} placeholder={placeholder} id={id} name={name} required={isRequired}/>
            </div>
        </>
    )
}

export default Input