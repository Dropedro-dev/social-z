import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props ={
  type: string;
  placeholder: string;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
}

const Input = ({type, placeholder, filled, icon, value, onChange}: Props) => {
  return (
    <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
      {icon && 
        <FontAwesomeIcon 
          icon={icon}
          className="ml-4 size-6 texr-gray-500"
        />
      }
      <input
      className="flex-1 outline-none bg-transparent h-full px-4"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e=> onChange && onChange(e.target.value)}        
        />
    </div>
  )
}

export default Input;
