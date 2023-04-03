import StepsWrapper from "./StepsWrapper";
import Step from "./Step";
import CustomStep from "./CustomStep";

function App() {
  return (
    <div className="bg-slate-400 h-screen flex items-center justify-center">
      {/* Add any component that extends StepProps properties */}
      <StepsWrapper steps={[Step, Step, CustomStep]}></StepsWrapper>
    </div>
  );
}

export default App;
