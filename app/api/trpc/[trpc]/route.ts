import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/app/server/trpc";
import { NextApiRequest } from "@/node_modules/next/types";

const createContext = ({ req }: { req: NextApiRequest }) => {
  const locale = req.cookies['NEXT_LOCALE'] || 'en';
  return { locale };
};
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };
