// import { PrismaClient } from "@prisma/client/extension";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function GET() {
//   const tumOlaylar = await prisma.olay.findMany();
//   return NextResponse.json(tumOlaylar);
// }

// export async function POST(request: Request) {
//   try {
//     // 1. Frontend'den gelen form verisini (JSON) yakala
//     const body = await request.json();
//     const { kullaniciMesaji } = body;

//     if (!kullaniciMesaji) {
//       return NextResponse.json({ error: "Mesaj boş olamaz." }, { status: 400 });
//     }

//     // 2. Yapay Zeka API'sine gönderilecek sistemi hazırla
//     const systemPrompt =
//       "Sen alaycı ama çok zeki bir polis dedektifisin. Kısa ve net cevaplar ver. Şüphelileri analiz et.";

//     // 3. Yapay Zeka servisine (OpenAI, Gemini vb.) istek at
//     // (Burada seçtiğin AI servisinin kendi SDK'sını kullanacaksın)
//     /*
//     const aiResponse = await secilenAiServisi.sendMessage({
//        system: systemPrompt,
//        message: kullaniciMesaji
//     });
//     */
//     async function verileriGetir() {
//       // Tüm olayları getir
//       const tumOlaylar = await prisma.olaylar.findMany();

//       // Tüm şüphelileri risk skoruna göre azalan sırada getir
//       const riskliSupheliler = await prisma.supheliler.findMany({
//         orderBy: {
//           risk_skoru: "desc",
//         },
//       });

//       return { tumOlaylar, riskliSupheliler };
//     }
//     // Şimdilik test amaçlı sahte bir dönüş yapalım
//     const sahteCevap = `Dedektif: Bu anlattıklarına göre şüpheli profili oldukça netleşiyor. Şapkayı kimin bıraktığını bulmalıyız. Başka ne tür izler vardı?`;

//     // 4. Sonucu frontend'e geri gönder
//     return NextResponse.json({ cevap: sahteCevap });
//   } catch (error) {
//     console.error("Backend hatası:", error);
//     return NextResponse.json(
//       { error: "Sunucuda bir hata oluştu." },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await prisma.olaylar.create({
      data: {
        olay_turu: body.olay_turu,
        tarih: new Date(body.olay_tarihi),
        konum: body.olay_konumu,
        aciklama: body.olay_aciklamasi,
      },
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
