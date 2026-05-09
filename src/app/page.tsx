// import Image from "next/image";

import Form from "@/Elements/Form";
import Header from "@/Elements/Header";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const analiz_sonuclari = await prisma.analiz_sonuclari.findMany();
  return (
    <div className="w-full flex flex-col flex-1 min-h-full bg-amber-500">
      <Header></Header>

      <Form></Form>
    </div>
  );
}
