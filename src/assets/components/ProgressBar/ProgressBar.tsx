import "./ProgressBar.scss";
import { ProgressBarProps } from "../../utils/types";

export const ProgressBar = (props: ProgressBarProps) => {
  const { step } = props;

  return (
    <>
      <>
        <div className="progress-bar__container">
          <div className={`progress-bar__container_steps step-${step}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`progress-bar__numbers step-${step}`}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </>
    </>
  );
};
