export const translate = async ({
  input,
}: {
  input: { data: string; locale: string; };
}) => {
  const response = await fetch("http://localhost:5000/translate", {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify({
      q: input.data,
      source: "en",
      target: input.locale ?? "en",
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch from localhost:5000");
  }

  const result = await response.json();
  return result;
};
