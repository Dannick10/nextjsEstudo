import React from "react";

type Props = {};

const Porta = (props: Props) => {
  return (
    <div className="flex justify-center w-[200px] h-[300px] relative">
      <div className="flex flex-col bg-orange-600 items-center p-10 text-white flex-grow-1 border-4 border-red-700 border-b-0">
        <div className="flex flex-col bg-orange-600 items-center p-10 text-white flex-grow-1"></div>
        <div className="text-5xl">3</div>
      </div>
        <div className="bg-white flex-grow-1 absolute h-[1em] w-[100%] bottom-0"></div>
        <div className="flex flex-col bg- items-centerflex-grow-1 absolute h-[1.2em] w-[1.2em] bg-orange-900 right-8 rounded-full top-[50%]"></div>
    </div>
  );
};

export default Porta;
