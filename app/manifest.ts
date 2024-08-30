import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Asyraf Norafandi",
    short_name: "Asyraf",
    description: "Bridging Code to Cloud with DevOps Excellence",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#7dd3fc",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
