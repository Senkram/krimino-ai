"use client";
import { UseFormRegister } from "react-hook-form";

type FormValues = {
  suspects: {
    sName: string;
    sLastName: string;
    sTCNo: string;
    sBirthday: Date | null;
    sGender: "erkek" | "kadin";
    sAttr: string;
  }[];
};

type Props = {
  index: number;
  register: UseFormRegister<FormValues>;
  onRemove: () => void;
};

export default function SuspectForm({ index, register, onRemove }: Props) {
  return (
    <div className="relative bg-amber-700 p-8 pt-12 rounded-lg border border-amber-50">
      <div className="grid grid-cols-[max-content_1fr_max-content_1fr] gap-x-4 gap-y-4 items-center">
        <label htmlFor={"supheli_ismi" + index} className="text-white text-end">
          Şüpheli İsmi:
        </label>
        <input
          {...register(`suspects.${index}.sName`)}
          id={"supheli_ismi" + index}
          type="text"
          className="bg-amber-50 text-black rounded-md p-3"
        />

        <label
          htmlFor={"supheli_soyismi" + index}
          className="text-white text-end"
        >
          Şüpheli Soyismi:
        </label>

        <input
          {...register(`suspects.${index}.sLastName`)}
          id={"supheli_soyismi" + index}
          type="text"
          className="bg-amber-50 text-black rounded-md p-3"
        />
        <label
          htmlFor={"supheli_tcno" + index}
          className="text-white self-start pt-2 text-end"
        >
          Şüpheli TC No:
        </label>
        <input
          {...register(`suspects.${index}.sTCNo`)}
          id={"supheli_tcno" + index}
          type="number"
          pattern="/^[1-9]\d{10}$/"
          className="bg-amber-50 text-black rounded-md p-3"
        />
        <label
          htmlFor={"supheli_dogum_tarihi" + index}
          className="text-white self-start pt-2 text-end"
        >
          Şüpheli Doğum Tarihi:
        </label>

        <input
          {...register(`suspects.${index}.sBirthday`)}
          type="date"
          id={"supheli_dogum_tarihi" + index}
          className=" bg-amber-50 text-black rounded-md p-3 "
        />
        <label
          htmlFor={"supheli_cinsiyeti" + index}
          className="text-white self-start pt-2 text-end"
        >
          Şüpheli Cinsiyeti:
        </label>

        <select
          {...register(`suspects.${index}.sGender`)}
          id={"supheli_cinsiyeti" + index}
          defaultValue="erkek"
          className=" bg-amber-50 text-black rounded-md p-3"
        >
          <option value="">Seçiniz</option>
          <option value="erkek">Erkek</option>
          <option value="kadin">Kadın</option>
        </select>
        <label
          htmlFor={"supheli_ozellikleri" + index}
          className="text-white self-start pt-2 text-end"
        >
          Şüpheli Profil Özellikleri:
        </label>

        <input
          {...register(`suspects.${index}.sAttr`)}
          id={"supheli_ozellikleri" + index}
          type="text"
          className=" bg-amber-50 text-black rounded-md p-3"
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
