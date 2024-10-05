'use client';

import { faEye, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props ={
  type: string;
  placeholder: string;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
}

export const Input = ({type, placeholder, filled, icon, value, onChange}: Props) => {
  const [showPassword, setShowPassword] = useState(type);

  const setType =()=> showPassword === type ? setShowPassword('text') : setShowPassword(type);
  
  return (
    <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
      {icon && 
        <FontAwesomeIcon 
          icon={icon}
          className="ml-4 size-6 text-gray-500"
        />
      }
      <input
      className="flex-1 outline-none bg-transparent h-full px-4"
        type={showPassword}
        placeholder={placeholder}
        value={value}
        onChange={e=> onChange && onChange(e.target.value)}        
      />
      {type === 'password' &&
        <FontAwesomeIcon 
          icon={showPassword === type ? faEye : faEyeSlash}
          className="mr-4 size-6 text-gray-500 cursor-pointer"
          onClick={setType}
        />        
      }
    </div>
  )

}
