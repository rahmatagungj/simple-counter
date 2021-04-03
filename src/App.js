import { useState } from "react";
import Button from "./components/Button";
import Step from "./components/Step";
import "./styles/App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <h3 className={count === 0 ? "zero" : ""}>{count}</h3>
      <div className="props">
        <Step step={step} setStep={setStep} />
        <Button step={step} count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
