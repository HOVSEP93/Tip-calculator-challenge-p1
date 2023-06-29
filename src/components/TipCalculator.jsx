import { useState } from "react";
import BillInput from "./BillInput";
import OutPut from "./OutPut";
import Percentage from "./Percentage";
import Reset from "./Reset";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <div className="flex flex-col gap-10 justify-center items-center ">
        <h1 className="text-6xl">Tip Calculator</h1>
        <BillInput bill={bill} onSetBill={setBill} />

        <Percentage percentage={percentage1} onSelect={setPercentage1}>
          How Did You Like The Service?
        </Percentage>

        <Percentage percentage={percentage2} onSelect={setPercentage2}>
          How Did Your Friend Like The Service?
        </Percentage>

        {bill && (
          <>
            <OutPut bill={bill} tip={tip} />

            <Reset onRest={handleReset} />
          </>
        )}
      </div>
    </div>
  );
};

export default TipCalculator;
