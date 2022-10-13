export type TextFieldProps = {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputOptionClick?: (arg?: any) => void;
  inputOption?: boolean;
  showPassword?: boolean;
  borderRadius?: string;
  label?: string;
};
