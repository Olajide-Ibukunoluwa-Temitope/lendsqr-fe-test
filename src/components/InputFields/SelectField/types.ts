export type SelectFieldProps = {
  placeholder: string;
  name: string;
  options: { label: string; value: any }[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  borderRadius?: string;
  label?: string;
};
