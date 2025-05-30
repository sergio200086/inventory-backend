import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./config/.env",
});

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  // put your options here
  methods: ["GET", "POST", "PUT", "DELETE"],
  headers: ["Content-Type", "Authorization"],
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

// Run the server!
try {
  fastify.listen({ port: process.env.PORT || 4001 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
