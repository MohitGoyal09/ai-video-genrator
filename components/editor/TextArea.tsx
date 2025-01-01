import React from 'react';
import { Textarea } from "@/components/ui/textarea";

interface TextAreaProps {
  frame: {
    image: string;
    text: string;
    textColor: string;
    fontsize: number;
    duration: number;
  };
  handleInputChange: (field: string, value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ frame, handleInputChange }) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange('text', e.target.value);
  };

  return (
    <Textarea
      value={frame.text}
      onChange={onChange}
    />
  );
};

export default TextArea;