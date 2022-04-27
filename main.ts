import { serveFile } from "https://deno.land/std@0.136.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

async function server(request: Request): Promise<Response> {
  return await serveFile(request, "/index.html");
}

await serve(server);
