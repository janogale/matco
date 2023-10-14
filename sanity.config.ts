import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "a8x3s50m",
  title: 'Matco Motors',
  dataset: "production", 
  apiVersion: "2023-08-30",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas}
});

export default config;
