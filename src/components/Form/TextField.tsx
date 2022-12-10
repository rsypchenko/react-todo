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
      className="border-round p-4 w-72 outline-none shadow-xl"
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Add task here..."
      required
    ></input>
  );
};
