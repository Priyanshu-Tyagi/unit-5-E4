import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initialArray: Array<number>;
};
const List2 = ({ initialArray = [1, 2, 3, 4] }: List2Props) => {
  const [num, setNum] = useState<number>(0);
  const { appendStart, appendEnd, popStart, popEnd, clear, reset } = useNumberList(initialArray);
  // const onChange = (e: ChangeEvent<HTMLInputElement>) => setNum(e.target.value);
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">List-#2</h3>

      {initialArray.map((i) => (<div data-testid="list2-element">{i}</div>))}

      <input data-testid="list2-input" type={"number"} placeholder="Enter Number" />
      <button data-testid="list2-btn-append-end" onClick={appendStart(num)}>
        Append Start
      </button>
      <button data-testid="list2-btn-pop-start" onClick={popStart()}>
        POP Start
      </button>
      <button data-testid="list2-btn-clear" onClick={clear()}>
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={reset()}>
        Reset
      </button>
    </div>
  );
};

export default List2;
