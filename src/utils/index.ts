// export function pathToSlug(path: string | undefined) {
// 	return path?.split("src/content/frame/")[1]?.split(".md")[0];
// }

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);
