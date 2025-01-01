import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropDownProps {
  options: string[];
  label: string;
  defaultValue: string;
  handleInputChange: (field: string, value: string) => void;
}
function DropDown({
  label,
  options,
  defaultValue,
  handleInputChange,
}: DropDownProps) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label>{label}</label>
      <Select onValueChange={(value) => handleInputChange("duration", value)}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropDown;
