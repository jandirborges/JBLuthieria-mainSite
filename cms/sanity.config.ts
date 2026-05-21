import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// IMPORTANTE: substituir projectId pelo ID real do projeto Sanity criado em sanity.io.
// Depois rodar `npx sanity deploy` para publicar o Studio em <projectId>.sanity.studio
export default defineConfig({
  name: "default",
  title: "JB Luthier",

  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
