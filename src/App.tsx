import { useState } from "react";
import Select, { SelectOption } from "./Select";

const options = [
  { label: "first", value: 1 },
  { label: "2nd", value: 3 },
  { label: "3rd", value: 4 },
  { label: "4th", value: "yeyo" },
  { label: "5", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple={true}
        options={options}
        value={value1}
        onChange={(opt) => setValue1(opt)}
      />
      <hr />

      <Select
        options={options}
        value={value2}
        onChange={(opt) => setValue2(opt)}
      />
    </>
  );
}

export default App;
