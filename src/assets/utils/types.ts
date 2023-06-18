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

export type TextAreaProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
};

export type ButtonProps = {
  id: string;
  type: "submit" | "reset" | "button";
  children: string;
};

export type PostData = {
  phone: string | null;
  email: string | null;
  nickname: string | null;
  name: string | null;
  surname: string | null;
  sex: string | null;
  advantages1: string | null;
  advantages2: string | null;
  advantages3: string | null;
  checkboxes?: boolean[];
  radio: string | null;
  about: string | null;
};
