export async function GET() {
  const response = await fetch("https://yandex.ru/internet/api/v0/datetime", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await response.json();
  return Response.json(data);
}
