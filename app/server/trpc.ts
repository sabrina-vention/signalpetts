import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  getTranslation: t.procedure
    .input(
      z.object({
        data: z.string(),
        locale: z.string().optional(),
      }),
    )
    .mutation(
      async ({ input }: { input: { data: string; locale: string } }) => {
        if (input.data === "") {
          return { translatedText: "" };
        }
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
      },
    ),
});

export type AppRouter = typeof appRouter;
