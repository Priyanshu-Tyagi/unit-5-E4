// import React, { useState } from "react";
// import useNumberList from "../hooks/useNumberList";

type List1Props = {
  initialArray: Array<number>;
};
const List1 = ({initialArray=[1, 2, 3]}: List1Props) => {
  // const [num,setNum] = useState();
  // const {appendStart, appendEnd, popStart, popEnd, clear, reset} = useNumberList(initialArray);
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List-#1</h3>
      {initialArray.map((i)=>(<div data-testid="list1-element">{i}</div>))}        
      
      <input data-testid="list1-input" />
      <button data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}
      </button>
      <button data-testid="list1-btn-pop-end">
        {/* po last element btn */}
      </button>
      <button data-testid="list1-btn-clear">
        {/* clear list and set empty button */}
      </button>
      <button data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}
      </button>
    </div>
  );
};

export default List1;
