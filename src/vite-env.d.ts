/// <reference types="vite/client" />

// declaration.d.ts
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
