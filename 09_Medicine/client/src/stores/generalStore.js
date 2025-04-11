import { readable} from "svelte/store";
export const BASE_URL = readable("http://localhost:80" ||import.meta.env.VITE_BASE_URL);
