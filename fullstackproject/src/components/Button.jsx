import React from "react";

const Button = ({ hrefProps, texto, onclickProps }) => {
  const renderButton = () => {
    return (
      <button onClick={onclickProps} className="text-gray-500 bg-slate-200 rounded-md text-xs font-semibold tracking-widest py-5 px-10 shadow-md border-2 border-gray-400 hover:border-gray-300 transition-all  duration-300">
        {texto}
      </button>
    );
  };
  return hrefProps ? (
    <Link href={hrefProps}>renderButton()</Link>
  ) : (
    renderButton()
  );
};

export default Button;
