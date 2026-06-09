import "./Select.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: Option[];
  placeholder: string;
  containerClass?: string;
  labelClass?: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  id,
  name,
  label,
  options,
  placeholder,
  containerClass = "form-group",
  labelClass,
  isRequired = false,
  value,
  onChange,
}: SelectProps) => {
  return (
    <div className={containerClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select className="select-element" id={id} name={name} required={isRequired} value={value} onChange={onChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;