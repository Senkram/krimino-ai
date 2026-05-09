import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type FormValues = {
  evidence: {
    eType: string;
    eFile: File | null;
    eExplanation: string;
  }[];
};

type Props = {
  index: number;
  register: UseFormRegister<FormValues>;
  //   setValue: UseFormSetValue<FormValues>;
  onRemove: () => void;
};

export default function EvidenceForm({
  index,
  register,
  //   setValue,
  onRemove,
}: Props) {
  return (
    <div className="relative bg-amber-700 p-8 pt-12 rounded-lg border border-amber-50">
      <div className="grid grid-cols-[max-content_1fr_max-content_1fr] gap-x-4 gap-y-4 items-center">
        <label htmlFor={"kanit_turu" + index} className="text-white text-end">
          Kanıt Türü:
        </label>
        <input
          {...register(`evidence.${index}.eType`)}
          id={"kanit_turu" + index}
          type="text"
          className="bg-amber-50 text-black rounded-md p-3"
        />

        <label
          htmlFor={"kanit_dosyasi" + index}
          className="text-white text-end"
        >
          Kanıt Dosyası:
        </label>

        <input
          {...register(`evidence.${index}.eFile`)}
          id={"kanit_dosyasi" + index}
          type="file"
          className="bg-amber-50 text-black rounded-md p-3"
        />
        <label
          htmlFor={"kanit_aciklamasi" + index}
          className="text-white self-start pt-2 text-end"
        >
          Kanıt Açıklaması:
        </label>

        <textarea
          {...register(`evidence.${index}.eExplanation`)}
          id={"kanit_aciklamasi" + index}
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
