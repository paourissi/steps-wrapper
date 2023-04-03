export interface StepProps {
  onNext: () => void;
  onPrev: () => void;
  step: number;
}

//Custom components can have new properties thus new functionalities
export interface CustomStepProps extends StepProps {
  action: () => void;
}

export type Step<T> = (props: T) => JSX.Element;

export interface StepWrapperProps<T> {
  steps: Step<T>[];
}
