import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/tic-tac-toe-react-01",
	plugins: [react(), eslint()],
});
