"use client";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) => {
  return (
    <div className="flex item-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
      >
        {name}
      </label>
    </div>
  );
};

export default CheckboxInput;
