import React from "react";
import { useContext } from "react";
import { counterContext } from "../Context";

const Index = () => {
  // console.log(counterContext._currentValue2, "fh");
  const { countdata, setCount } = useContext(counterContext);
  
  function onIncrement() {
    setCount((prevState) => ({
      ...prevState,
      countValue: prevState.countValue + 1,
    }));
  }
  const result = counterContext._currentValue2;

  console.log(result);
  return (
    <div>
      <button className="inrease" onClick={() => onIncrement()}>
        +
      </button>
    </div>
  );
};

export default Index;
