//import logo from './logo.svg';
import { useState } from "react";

import { counterContext } from "./components/Context";
import Home from "./components/Home";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import "./App.css";

function App() {
  const InitialValues = {
    countValue: 0,
    theame: false,
  };
  const [countdata, setCount] = useState(InitialValues);
  return (
    <>
      <counterContext.Provider value={{ countdata, setCount }}>
        <div className="App">
          <Home />
          {/* <div className="buttons-card">
            <Increment />
            <Decrement />
          </div> */}
        </div>
      </counterContext.Provider>
    </>
  );
}

export default App;
