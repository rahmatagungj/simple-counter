import React, { useState } from "react";
import "../styles/Step.scss";

const Step = ({ step, setStep, currentStep, setCurrentStep }) => {
  const handleStep = (e) => {
    setStep(e.target.value);
    setCurrentStep(parseInt(e.target.value));
  };

  return (
    <div>
      Step :{" "}
      <input
        type="text"
        name="step"
        id="step"
        value={step}
        placeholder="masukan nilai step ..."
        onChange={handleStep}
      />
    </div>
  );
};

export default Step;
