import { useState } from "react";
import Select from "./Select";

const options = [
  { label: "first", value: 1 },
  { label: "2nd", value: 1 },
  { label: "3rd", value: 1 },
  { label: "4th", value: "yeyo" },
  { label: "5", value: 1 },
];

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[2]);

  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={(opt) => setValue(opt)}
      />
    </>
  );
}

export default App;
