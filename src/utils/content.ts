export function pathToSlug(path: string | undefined) {
	return path?.split("src/content/frame/")[1]?.split(".md")[0];
}
