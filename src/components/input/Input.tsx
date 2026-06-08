import "./Input.css"

interface InputProps{
    type:string
    id:string
    name: string
    value?:string
    placeholder?:string
    label?: string
    inputClass?:string
    labelClass?:string
    containerClass?:string
    isRequired?:boolean
    disabled?:boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type, 
    id, 
    placeholder, 
    name, 
    inputClass="input-box", 
    label,
    value, 
    labelClass,
    containerClass,
    isRequired,
    disabled,
    onChange}: InputProps) => {
    return (
        <>
            <div className={containerClass}>
                {label && <label htmlFor={id} className={labelClass}>{label}</label>}
                < input className={inputClass} type={type} placeholder={placeholder} id={id} 
                name={name} required={isRequired} value={value} disabled={disabled} onChange={onChange}/>
            </div>
        </>
    )
}

export default Input