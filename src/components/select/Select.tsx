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
}: SelectProps) => {
  return (
    <div className={containerClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select className="select-element" id={id} name={name} required={isRequired} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;