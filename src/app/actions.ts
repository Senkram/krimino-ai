"use server";

export async function handleDBTransfer(formData: FormData) {
  const userMessage = formData.entries;
  console.log(userMessage.toString);
}
