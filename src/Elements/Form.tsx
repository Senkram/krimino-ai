import { handleDBTransfer } from "@/app/actions";
import AddMoreInput from "./AddMoreInput";
import WitnessForm from "./WitnessForm";

export default function Form() {
  return (
    <div className="flex bg-violet-700 w-full justify-center items-center">
      <form
        action={handleDBTransfer}
        className="flex items-center justify-center w-full flex-col"
      >
        <textarea
          name="brief"
          id="brief"
          maxLength={255}
          tabIndex={1}
          rows={4}
          className="rounded-md border-2 p-4 w-1/2 "
          placeholder="Davayı kısaca özetleyin..."
        ></textarea>
        <AddMoreInput element={<WitnessForm />}></AddMoreInput>
        <button
          type="submit"
          className="mt-8 rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
