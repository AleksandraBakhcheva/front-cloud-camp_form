export type InputProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
};

export type SelectProps = {
  id: string;
  children: React.ReactNode;
  label: string;
  name: string;
};

export type CheckboxRadioProps = {
  id: string;
  inputtype: "checkbox" | "radio";
  label: string;
  name: string;
  value: string;
};
