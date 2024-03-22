"use client";

// interface InputProps {
//   checked?: boolean;
//   label: string;
//   value?: Record<string, any>;
//   onChange: (value: Record<string, any>) => void;
// }

const CheckBox = ({
  label,
  id,
  onChange,
}) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CheckBox;
