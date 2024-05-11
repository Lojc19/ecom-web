// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const PlusMinusInput = ({count, setCount}) => {
    //let [count, setCount] = useState(0);

    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }
    return (
    <>
        <div className="md:flex w-full h-full md:w-auto mb-3">
            <span className="border w-[15%] md:w-[40px] h-full px-4 py-2 cursor-pointer text-center hover:bg-slate-200" onClick={decrementCount}>-</span>
            <input className="md:w-[50px] w-[70%] h-full py-2 border text-center" type="text" value={count}/>
            <span className="border w-[15%] md:w-[40px] h-full px-4 py-2 cursor-pointer text-center hover:bg-slate-200" onClick={incrementCount}>+</span>
        </div>
    </>
    );
};

export default PlusMinusInput;
