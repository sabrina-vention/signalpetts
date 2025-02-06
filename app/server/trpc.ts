import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { translate } from "./util/translate";

const t = initTRPC.create();

export const appRouter = t.router({
  getTranslation: t.procedure
    .input(
      z.object({
        data: z.string(),
        locale: z.string(),
        multiple: z.array(z.record(z.string(), z.string())).optional(),
      }),
    )
    .mutation(
      async ({
        input,
      }: {
        input: {
          data: string;
          locale: string;
          multiple?: { [key: string]: string }[];
        };
      }) => {
        if (input?.multiple) {
          const allTranslations: { [key: string]: string }[] = [];
          const all = input?.multiple.map(async (data) => {
            const response = await translate({
              input: { data: Object.values(data)[0], locale: input.locale },
            });
            return {
              [Object.keys(data) as unknown as string]: response.translatedText,
            };
          });
          for await (const translation of all) {
            allTranslations.push(translation);
          }
          return { translatedText: allTranslations };
        }
        if (input.data === "") {
          return { translatedText: "" };
        }
        const response = await translate({ input });
        return response;
      },
    ),
});

export const caller = appRouter.createCaller({});

export type AppRouter = typeof appRouter;
