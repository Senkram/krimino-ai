// import { handleDBTransfer } from "@/app/actions";
// import AddMoreInput from "./AddMoreInput";
// import WitnessForm from "./WitnessForm";

// export default function Form() {
//   return (
//     <div className="flex bg-violet-700 w-full justify-center items-center">
//       <form
//         action={handleDBTransfer}
//         className="flex items-center justify-center w-full flex-col"
//       >
//         <textarea
//           name="brief"
//           id="brief"
//           maxLength={255}
//           tabIndex={1}
//           rows={4}
//           className="rounded-md border-2 p-4 w-1/2 "
//           placeholder="Davayı kısaca özetleyin..."
//         ></textarea>
//         <WitnessForm></WitnessForm>
//         <button
//           type="submit"
//           className="mt-8 rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useForm, useFieldArray } from "react-hook-form";
import WitnessForm from "./WitnessForm";
import EvidenceForm from "./EvidenceForm";
import SuspectForm from "./SuspectForm";

type FormValues = {
  olay_turu: string;
  olay_tarihi: string;
  olay_konumu: string;
  olay_oncelik_seviyesi: string;
  olay_aciklamasi: string;

  witnesses: {
    wName: string;
    wLastName: string;
    wCom: string;
    wStatement: string;
  }[];
  evidence: {
    eType: string;
    eFile: File | null;
    eExplanation: string;
  }[];
  suspects: {
    sName: string;
    sLastName: string;
    sTCNo: string;
    sBirthday: Date | null;
    sGender: "erkek" | "kadin";
    sAttr: string;
  }[];
};

export default function Page() {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      olay_turu: "",
      olay_tarihi: "",
      olay_konumu: "",
      olay_oncelik_seviyesi: "",
      olay_aciklamasi: "",
      witnesses: [
        {
          wName: "",
          wLastName: "",
          wCom: "",
          wStatement: "",
        },
      ],
      evidence: [
        {
          eType: "",
          eFile: null,
          eExplanation: "",
        },
      ],
      suspects: [{ sName: "", sLastName: "", sAttr: "", sGender: "erkek" }],
    },
  });

  const witnesses = useFieldArray({
    control,
    name: "witnesses",
  });

  const suspects = useFieldArray({
    control,
    name: "suspects",
  });

  const evidence = useFieldArray({
    control,
    name: "evidence",
  });

  async function onSubmit(data: FormValues) {
    const res = await fetch("/api/sorgu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-8 bg-amber-700 max-w-7xl m-4 self-center rounded-lg"
    >
      {
        // Olay Formu
        <div className="w-full grid gap-12 grid-cols-12 border border-amber-50 rounded-md p-8 pt-12">
          <div className="col-span-6 gap-4 grid items-center grid-cols-[max-content_1fr]">
            <label className="" htmlFor="olay_turu">
              Olay Türü:
            </label>
            <input
              className=" bg-amber-50 text-black rounded-md p-3"
              {...register("olay_turu")}
              type="text"
              id="olay_turu"
            />
          </div>
          <div className="col-span-6 gap-4 grid items-center grid-cols-[max-content_1fr]">
            <label className="" htmlFor="olay_tarihi">
              Olay Tarihi:
            </label>
            <input
              className=" bg-amber-50 text-black rounded-md p-3"
              {...register("olay_tarihi")}
              type="datetime-local"
              id="olay_tarihi"
            />
          </div>
          <div className="col-span-6 gap-4 grid items-center grid-cols-[max-content_1fr]">
            <label className="" htmlFor="olay_konumu">
              Olay Konumu:
            </label>
            <input
              className=" bg-amber-50 text-black rounded-md p-3"
              {...register("olay_konumu")}
              type="text"
              id="olay_konumu"
            />
          </div>
          <div className="col-span-6 gap-4 grid items-center grid-cols-[max-content_1fr]">
            <label className="" htmlFor="olay_oncelik_seviyesi">
              Olay Öncelik Seviyesi:
            </label>
            <input
              className=" bg-amber-50 text-black rounded-md p-3"
              {...register("olay_oncelik_seviyesi")}
              type="text"
              id="olay_oncelik_seviyesi"
            />
          </div>
          <div className="col-span-12 gap-4 grid items-center grid-cols-[max-content_1fr]">
            <label className="" htmlFor="olay_aciklamasi">
              Olay Açıklaması:
            </label>
            <input
              className=" bg-amber-50 text-black rounded-md p-3"
              {...register("olay_aciklamasi")}
              type="text"
              id="olay_aciklamasi"
            />
          </div>
        </div>
      }
      {
        // Kanıt Formu
      }
      {evidence.fields.map((field, index) => (
        <EvidenceForm
          key={field.id}
          index={index}
          register={register}
          onRemove={() => evidence.remove(index)}
        />
      ))}
      <button
        type="button"
        onClick={() =>
          evidence.append({
            eType: "",
            eFile: null,
            eExplanation: "",
          })
        }
        className="bg-amber-950 w-max self-center p-3 rounded-lg"
      >
        Yeni Kanıt Ekle
      </button>
      {
        // Şüpheli Formu
      }
      {suspects.fields.map((field, index) => (
        <SuspectForm
          key={field.id}
          index={index}
          register={register}
          onRemove={() => suspects.remove(index)}
        />
      ))}
      <button
        type="button"
        onClick={() =>
          suspects.append({
            sName: "",
            sLastName: "",
            sTCNo: "",
            sBirthday: null,
            sGender: "erkek",
            sAttr: "",
          })
        }
        className="bg-amber-950 w-max self-center p-3 rounded-lg"
      >
        Yeni Kanıt Ekle
      </button>
      {
        //Tanık Formu
      }
      {witnesses.fields.map((field, index) => (
        <WitnessForm
          key={field.id}
          index={index}
          register={register}
          onRemove={() => witnesses.remove(index)}
        />
      ))}
      <button
        type="button"
        onClick={() =>
          witnesses.append({
            wName: "",
            wLastName: "",
            wCom: "",
            wStatement: "",
          })
        }
        className="bg-amber-950 w-max self-center p-3 rounded-lg"
      >
        Yeni Tanık Ekle
      </button>
      <button type="submit" className="bg-amber-950 text-white p-3 rounded">
        Gönder
      </button>
    </form>
  );
}
