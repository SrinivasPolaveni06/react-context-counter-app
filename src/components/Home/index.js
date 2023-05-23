import React from "react";
import { useContext } from "react";
import { counterContext } from "../Context";
import Increment from "../Increment";
import Decrement from "../Decrement";
import "./index.css";
const Index = () => {
  const { countdata, setCount } = useContext(counterContext);
  function onChangeTheame() {
    console.log("called");
    setCount((prevState) => ({
      ...prevState,
      theame: !prevState.theame,
    }));
  }

  const styleName = countdata.theame ? "light-counter-card" : "counter-card";
  return (
    <div>
      <button className="theame" onClick={() => onChangeTheame()}>
        Change Theame
      </button>
      <div className={`${styleName}`}>
        <h1>Count: {countdata.countValue}</h1>
        <div className="buttons-card">
          <Increment />
          <Decrement />
        </div>
      </div>
    </div>
  );
};

export default Index;
