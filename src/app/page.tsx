// import Image from "next/image";

import AiChat from "@/Elements/AiChat";
import Form from "@/Elements/Form";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const analiz_sonuclari = await prisma.analiz_sonuclari.findMany();
  return (
    <div className="flex flex-1 bg-violet-700 flex-col min-h-full p-40 justify-evenly">
      <AiChat aiText=""></AiChat>
      <div>
        {analiz_sonuclari.map((sonuc: any) => (
          <li key={sonuc.id} className="p-4 border rounded shadow-sm">
            <span className="font-semibold">
              {sonuc.olusturulma_tarihi.toString()}
            </span>
            - {sonuc.id}
            <p className="text-gray-600 text-sm">{sonuc.supheli_id}</p>
          </li>
        ))}
      </div>
      <Form></Form>
    </div>
  );
}
