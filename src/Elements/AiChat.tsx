"use client";

import { FormEvent, useState } from "react";

export default function AiChat(props: { aiText: string | undefined }) {
  if (props.aiText === undefined || props.aiText === "") {
    var ai_Chat = "asd";
  } else {
    var ai_Chat = props.aiText;
  }

  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {}

  return (
    <div className="flex w-full h-full items-center text-center justify-center">
      <div className="flex w-full items-center justify-center md:w-1/2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsam, similique aliquam fugit eos modi eveniet, commodi totam
          tenetur, vitae voluptates. Exercitationem eaque ullam, impedit
          tenetur, nisi similique soluta omnis enim officia, cumque autem?
          Numquam vel error ad vero doloribus saepe dignissimos, ratione ullam,
          tempore ducimus et. Quam laborum beatae nihil asperiores ut?
          Laboriosam autem vitae ratione temporibus placeat eius quas distinctio
          quidem velit! Natus reprehenderit voluptatum quasi fuga ea nam! Facere
          aperiam dolorem voluptatibus dicta! Iste voluptates aspernatur ullam
          quidem quia, facilis voluptatum deserunt rem dolorum libero maiores
          ipsa voluptatem itaque ipsam esse explicabo quasi eveniet amet, eum
          similique dolores in neque temporibus. Facere, possimus! At mollitia
          deleniti cupiditate hic quibusdam reprehenderit expedita, itaque enim
          maxime sapiente non neque similique est veniam incidunt exercitationem
          rem et nesciunt.
        </p>
      </div>
    </div>
  );
}
