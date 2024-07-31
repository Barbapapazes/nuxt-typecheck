import { useNitroApp } from "#imports";

export default defineEventHandler((event) => {
  const nitro = useNitroApp();

  return "Hello, world!";
});
