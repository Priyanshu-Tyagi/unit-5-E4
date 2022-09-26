// import { FunctionDeclaration } from "typescript";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const appendStart = (num:number):Array<number> => {
      const newArray = [num];
      for(let i=0;i<initialArray.length;i++){
        newArray.push(initialArray[i]);
      }
      return newArray;
  }

  const appendEnd = (num:number):Array<number> => {
    initialArray.push(num);
    return initialArray;
  }

  const popStart = ():Array<number> => {
    const newArray = [];
    for(let i=1;i<initialArray.length;i++){
      newArray.push(initialArray[i]);
    }
    return newArray;
  }

  const popEnd = ():Array<number> => {
    initialArray.pop();
    return initialArray;
  }

  const clear = ():Array<number> => {
    initialArray=[];
    return initialArray;
  }

  const reset = ():Array<number> => {
    return initialArray;
  }

  return {appendStart, appendEnd, popStart, popEnd, clear, reset}
};

export default useNumberList;
