import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  name: "default",
  projectId: "a8x3s50m",
  dataset: "production",
  apiVersion: "2023-08-30",
  basePath: "/studio",
  plugins: [deskTool()],
});

export default config;
