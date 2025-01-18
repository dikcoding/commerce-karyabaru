import { prisma } from "@/lib/prisma";
import { procedure, router } from "./trpc";
import { auth } from "../../auth";

export const appRouter = router({
  getUsers: procedure.query(async () => await prisma.user.findMany()),
  getUser: procedure.query(async () => {
    const session = await auth();
    const id = session?.user?.id;
    if (id) {
      return await prisma.user.findUnique({ where: { id } });
    }
  }),
});

export type AppRouter = typeof appRouter;
