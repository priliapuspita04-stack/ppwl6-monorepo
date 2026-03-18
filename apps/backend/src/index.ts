import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { prisma } from "../prisma/db";
import type { ApiResponse, HealthCheck, User } from "shared";

const app = new Elysia()
  .use(cors({ origin: ["http://localhost:5173"] }))
  .use(swagger())

  .get("/", (): ApiResponse<HealthCheck> => {
    return {
      data: { status: "ok" },
      message: "server running"
    }
  })

  .get("/users", async (): Promise<ApiResponse<User[]>> => {
    const users = await prisma.user.findMany()

    return {
      data: users,
      message: "User list retrieved"
    }
  })

  .listen(3000);

console.log(`🦊 Backend → http://localhost:${app.server?.port}`);
console.log(`📖 Swagger → http://localhost:${app.server?.port}/swagger`);

export type App = typeof app;