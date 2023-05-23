import React from "react";
import { useContext } from "react";
import { counterContext } from "../Context";
import "./index.css";
const Index = () => {
  const { countdata, setCount } = useContext(counterContext);
  
  const onDecrement = () => {
    console.log(countdata);
    setCount((prevState) => ({
      ...prevState,
      countValue: prevState.countValue - 1,
    }));
  };
  return (
    <div>
      <button className="decrease" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Index;
