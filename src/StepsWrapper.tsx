import { useState } from "react";
import { StepProps, StepWrapperProps } from "./types";

const StepsWrapper = <T extends StepProps>({ steps }: StepWrapperProps<T>) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handlePrev = () => {
    //If current step is the first step, dont change state
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    //If current step is the last step, dont change state
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const StepComponent = steps[currentStep];

  const newProps = {
    onNext: handleNext,
    step: currentStep + 1,
    onPrev: handlePrev,
  } as T;

  return (
    <div className="bg-slate-100 w-1/2 h-1/2 relative rounded overflow-hidden shadow-lg flex items-center justify-center">
      <StepComponent {...newProps} />
      {/* When step is the first step we disable the button */}
      <button
        className={`m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 left-0 absolute ${
          currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={currentStep === 0}
      >
        Previous
      </button>
      {/* When step is the last step we disable the button */}
      <button
        className={`m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 right-0 absolute ${
          currentStep === steps.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={handleNext}
        disabled={currentStep === steps.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default StepsWrapper;
