interface Props {
  text: string
  onChange: any
}

export const TextField = ({ text, onChange }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      className="flex flex-1 border-round p-4 outline-none shadow-xl"
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Add todo here..."
      required
    ></input>
  );
};
