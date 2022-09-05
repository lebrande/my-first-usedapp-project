import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const Button = (props: Props) => {
  return (
    <button
      className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};