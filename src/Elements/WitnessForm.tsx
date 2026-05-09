// export default function WitnessForm() {
//   return (
//     // <div className="flex flex-auto w-full justify-center items-center m-4">
//     //   <div className="grid grid-cols-[max-content_1fr] gap-y-5">
//     //     <div className="max-w-full min-w-1/2">
//     //       <label htmlFor="wName" className="max-w-max">
//     //         Tanığın ismi:
//     //       </label>
//     //       <input
//     //         type="text"
//     //         name="wName"
//     //         id="wName"
//     //         className="bg-amber-50 text-black rounded-md h-full p-3 self-end-safe"
//     //       />
//     //     </div>
//     //     <div className="max-w-full">
//     //       <label htmlFor="wLastName" className="">
//     //         Tanığın soyismi:
//     //       </label>
//     //       <input
//     //         type="text"
//     //         name="wLastName"
//     //         id="wLastName"
//     //         className="bg-amber-50 text-black rounded-md h-full p-3"
//     //       />
//     //     </div>

//     //     <div className="max-w-full">
//     //       <label htmlFor="wCom" className="">
//     //         Tanığın iletişim bilgisi:
//     //       </label>
//     //       <input
//     //         type="text"
//     //         name="wCom"
//     //         id="wCom"
//     //         className="bg-amber-50 text-black rounded-md h-full p-3"
//     //       />
//     //     </div>

//     //     <div className="">
//     //       <label htmlFor="wStatement" className="">
//     //         Tanığın ifadesi:
//     //       </label>
//     //       <textarea
//     //         name="wStatement"
//     //         id="wStatement"
//     //         className="bg-amber-50 text-black rounded-md h-full p-3"
//     //       />
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="flex w-full justify-center items-center p-8 bg-purple-700 min-h-min">
//       {/* 4 Sütunlu Grid: Label | Input | Label | Input */}
//       <div className="grid grid-cols-[max-content_1fr_max-content_1fr] gap-x-4 gap-y-4 items-center w-full max-w-5xl">
//         {/* 1. SATIR: İsim ve Soyisim */}
//         <label
//           htmlFor="wName"
//           className="text-white whitespace-nowrap text-end"
//         >
//           Tanığın ismi:
//         </label>
//         <input
//           type="text"
//           id="wName"
//           className="bg-amber-50 text-black rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-amber-200"
//         />

//         <label
//           htmlFor="wLastName"
//           className="text-white whitespace-nowrap lg:ml-4 text-end"
//         >
//           Tanığın soyismi:
//         </label>
//         <input
//           type="text"
//           id="wLastName"
//           className="bg-amber-50 text-black rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-amber-200"
//         />

//         {/* 2. SATIR: İletişim Bilgisi (Tüm satırı kaplaması için col-span kullanıyoruz) */}
//         <label htmlFor="wCom" className="text-white whitespace-nowrap text-end">
//           Tanığın iletişim bilgisi:
//         </label>
//         <input
//           type="text"
//           id="wCom"
//           className="col-span-3 bg-amber-50 text-black rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-amber-200"
//         />

//         {/* 3. SATIR: Tanığın İfadesi */}
//         <label
//           htmlFor="wStatement"
//           className="text-white whitespace-nowrap self-start pt-2  text-end"
//         >
//           Tanığın ifadesi:
//         </label>
//         <textarea
//           id="wStatement"
//           className="col-span-3 bg-amber-50 text-black rounded-md p-3 w-full h-32 outline-none focus:ring-2 focus:ring-amber-200"
//         />
//       </div>
//     </div>
//   );
// }

import { UseFormRegister } from "react-hook-form";

type FormValues = {
  witnesses: {
    wName: string;
    wLastName: string;
    wCom: string;
    wStatement: string;
  }[];
};

type Props = {
  index: number;
  register: UseFormRegister<FormValues>;
  onRemove: () => void;
};

export default function WitnessForm({ index, register, onRemove }: Props) {
  return (
    <div className="relative bg-amber-700 p-8 pt-12 rounded-lg border border-amber-50">
      <div className="grid grid-cols-[max-content_1fr_max-content_1fr] gap-x-4 gap-y-4 items-center">
        <label className="text-white text-end">Tanığın ismi:</label>

        <input
          {...register(`witnesses.${index}.wName`)}
          className="bg-amber-50 text-black rounded-md p-3"
        />

        <label className="text-white text-end">Tanığın soyismi:</label>

        <input
          {...register(`witnesses.${index}.wLastName`)}
          className="bg-amber-50 text-black rounded-md p-3"
        />

        <label className="text-white text-end">Tanığın iletişim bilgisi:</label>

        <input
          {...register(`witnesses.${index}.wCom`)}
          className="col-span-3 bg-amber-50 text-black rounded-md p-3"
        />

        <label className="text-white self-start pt-2 text-end">
          Tanığın ifadesi:
        </label>

        <textarea
          {...register(`witnesses.${index}.wStatement`)}
          className="col-span-3 bg-amber-50 text-black rounded-md p-3 h-32"
        />
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-2xl"
      >
        Sil
      </button>
    </div>
  );
}
