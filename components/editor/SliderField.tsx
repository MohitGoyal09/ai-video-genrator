import React from "react";
import { Slider } from "@/components/ui/slider";

interface SliderFieldProps {
  label: string;
  defaultValue?: number | undefined;
  handleInputChange: (field: string, value: number) => void;
}

function SliderField({
  label,
  defaultValue,
  handleInputChange,
}: SliderFieldProps) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label className="text-sm">{label}</label>
      <Slider
        value={[defaultValue ?? 0]}
        max={100}
        step={1}
        onValueChange={(value) => handleInputChange("fontsize", value[0])}
      />
    </div>
  );
}

export default SliderField;
