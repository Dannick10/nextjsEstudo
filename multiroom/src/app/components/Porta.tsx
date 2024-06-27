import React from "react";

type Props = {};

const Porta = (props: Props) => {
  return (
    <div className="flex w-[200px] h-[300px] relative">
      <div className="flex flex-col bg-orange-600 items-center p-10 text-white flex-grow-1 border-4 border-red-700 border-b-0">
        <div className="flex flex-col bg-orange-600 items-center p-10 text-white flex-grow-1"></div>
        <div className="text-5xl">3</div>
      </div>
        <div className="flex flex-col bg-white items-center text-white flex-grow-1 absolute -left-[10%] bottom-0 h-[1em] w-[100%]"></div>
    </div>
  );
};

export default Porta;
