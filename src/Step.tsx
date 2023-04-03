import { StepProps } from "./types";

const Step = ({ onPrev, onNext, step }: StepProps) => {
  const handleNext = () => {
    //Add more logic and click for action
    onNext();
  };

  const handlePrevious = () => {
    //Add more logic and click for action
    onPrev();
  };

  return (
    <div className="w-full h-40 bg-slate-200 relative flex items-center justify-center">
      <h1>Step {step}</h1>
      <p>This is step {step}.</p>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 left-0 absolute"
        onClick={handlePrevious}
      >
        Prev
      </button>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 right-0 absolute"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step;
