// import Image from "next/image";

import AiChat from "@/Elements/AiChat";
import Form from "@/Elements/Form";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const olaylar = await prisma.analiz_sonuclari.findMany();
  return (
    <div className="flex flex-1 bg-violet-700 flex-col min-h-full p-40 justify-evenly">
      <AiChat aiText=""></AiChat>
      <div>
        {olaylar.map((olay: any) => (
          <li key={olay.id} className="p-4 border rounded shadow-sm">
            <span className="font-semibold">{olay.olay_turu}</span> -{" "}
            {olay.konum}
            <p className="text-gray-600 text-sm">{olay.aciklama}</p>
          </li>
        ))}
      </div>
      <Form></Form>
    </div>
  );
}
