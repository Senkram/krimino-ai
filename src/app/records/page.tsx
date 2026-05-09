import Header from "@/Elements/Header";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const olaylar = await prisma.olaylar.findMany();
  return (
    <div className="w-full min-h-full flex-1 flex flex-col bg-amber-500">
      <Header></Header>
      {/* <div className="bg-amber-500 p-20">
        <h2 className="p-4">KAYITLAR</h2>
        <ul className="w-full flex-row">
          <li className="p-4 border rounded shadow-sm">
            <span className="p-4 border font-semibold">Olay ID:</span>
            <span className="p-4 border font-semibold">Olay Açıklaması:</span>
            <span className="p-4 border font-semibold">Olay Türü:</span>
            <span className="p-4 border font-semibold">Olay Tarihi/Saati:</span>
            <span className="p-4 border font-semibold">Olay Konumu:</span>
            <span className="p-4 border font-semibold">
              Olay Öncelik Seviyesi:
            </span>
          </li>
          {olaylar.map((olay: any) => (
            <li key={olay.id} className="p-4 border rounded shadow-sm">
              <span className="p-4 border">{olay.id}</span>
              <span className="p-4 border">{olay.aciklama}</span>
              <span className="p-4 border">{olay.olay_turu}</span>
              <span className="p-4 border">
                {olay.tarih_saat.toLocaleDateString()}
              </span>
              <span className="p-4 border">{olay.konum}</span>
              <span className="p-4 border">{olay.oncelik_seviyesi}</span>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="flex flex-col flex-1 bg-amber-500 p-8 overflow-x-auto">
        <h2 className="p-4 text-xl font-bold self-center">KAYITLAR</h2>

        <ul className="flex flex-col gap-2 w-max self-center">
          {/* HEADER */}
          <li className="min-w-max grid grid-cols-[max-content_1fr_max-content_max-content_max-content_max-content] gap-2 border rounded shadow-sm bg-amber-700 font-semibold">
            <span className="p-3">Olay ID</span>
            <span className="p-3">Olay Açıklaması</span>
            <span className="p-3">Olay Türü</span>
            <span className="p-3">Olay Tarihi/Saati</span>
            <span className="p-3">Olay Konumu</span>
            <span className="p-3">Öncelik Seviyesi</span>
          </li>

          {/* ROWS */}
          {olaylar.map((olay: any) => (
            <li
              key={olay.id}
              className="grid grid-cols-[max-content_1fr_max-content_max-content_max-content_max-content] gap-2 border rounded shadow-sm bg-amber-700"
            >
              <span className="p-3 wrap-break-word">{olay.id}</span>

              <span className="p-3 wrap-break-word">{olay.aciklama}</span>

              <span className="p-3 wrap-break-word">{olay.olay_turu}</span>

              <span className="p-3 wrap-break-word">
                {new Date(olay.tarih_saat).toLocaleDateString()}
              </span>

              <span className="p-3 wrap-break-word">{olay.konum}</span>

              <span className="p-3 wrap-break-word">
                {olay.oncelik_seviyesi}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
