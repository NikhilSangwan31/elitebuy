import React, { useState } from 'react';
import Button from './Button'; // Adjust the path to your Button component
import { FormProps } from '../../types/types';



const Form: React.FC<FormProps> = ({ fields, onSubmit, submitText, className }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {})
      );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {fields?.map((field) => (
        <div key={field.name} className="mb-4">
          <input
            type={field?.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            className={`border p-2 w-full ${field.className}`}
            disabled={field.disabled}
          />
        </div>
      ))}
      <Button
        text={submitText}
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      />
    </form>
  );
};

export default Form;
