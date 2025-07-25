import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// [advice from AI] Tailwind CSS v4 Vite 플러그인 import
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // [advice from AI] Tailwind CSS v4 Vite 플러그인 추가 - Storybook에서도 동일한 설정 사용
    tailwindcss(),
  ],
  // [advice from AI] @ alias를 src 디렉토리로 매핑하여 절대 경로 import 가능하도록 설정
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
