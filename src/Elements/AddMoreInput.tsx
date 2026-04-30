import { ReactNode } from "react";

export default function AddMoreInput(props: { element: ReactNode }) {
  return (
    <div className="flex flex-1 w-1/2 flex-wrap justify-center-safe">
      {props.element}
      <button
        type="button"
        className="flex flex-1 bg-amber-500 max-w-1/5 max-h-full justify-center"
      >
        +
      </button>
    </div>
  );
}
