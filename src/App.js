import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";
import Home from "./baiTapChiaComponent/Home";
import DemoDataBinding from "./DataBinding/DemoDataBinding";
import FunctionEvent from "./HandleEvents/FunctionEvent";
import ClassEvent from "./HandleEvents/ClassEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe_ from "./BaiTapChonMauXe"; //Neu la file index ko can phai mention
function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFull /> */}
      {/* <Home /> */}
      {/* <DemoDataBinding />
      <FunctionEvent />
      <ClassEvent />
      <DemoConditionalAndState /> */}
      <BaiTapChonMauXe_ />
    </div>
  );
}

export default App;
