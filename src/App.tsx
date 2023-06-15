import "./assets/styles/General.scss";
import Main from "./assets/pages/Main/Main";
import Step1 from "./assets/pages/Step1/Step1";
import Step2 from "./assets/pages/Step2/Step2";
import Step3 from "./assets/pages/Step3/Step3";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </>
  );
}

export default App;
