export async function getJson(url: string) {
	const res = await fetch(url);
	return await res.json();
}
