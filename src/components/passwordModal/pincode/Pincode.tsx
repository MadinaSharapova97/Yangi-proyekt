import { useState } from "react";
import ReactCodeInput from "react-code-input";

export default function Pincode() {
  const [valueInput, setValueInput] = useState(false);
  const [valid, setValid] = useState(true);

  const handleValueInput = (e: any) => {
    if (String(e).replace(/[A-Za-z]/g, "").length === 4) {
      setValueInput(true);
      if (e !== "222222") {
        setValid(false);
      } else {
        setValid(true);
      }
    } else {
      setValueInput(false);
    }
  };

  return (
    <div className="">
      <ReactCodeInput
        name="resetPassword"
        inputMode="numeric"
        fields={4}
        type="text"
        onChange={(e) => handleValueInput(e)}
        isValid={valid}
      />
      {valueInput ? "ee" : null}
    </div>
  );
}
