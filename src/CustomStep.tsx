import { CustomStepProps } from "./types";

const CustomStep = ({ onPrev, onNext, step }: CustomStepProps) => {
  return (
    <div className="w-full bg-slate-200 h-40 relative flex items-center justify-center">
      <h1>Step {step}</h1>
      <p>This is custom step {step}. with custom actions</p>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 left-0 absolute"
        onClick={onPrev}
      >
        Prev
      </button>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 right-0 absolute"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default CustomStep;
