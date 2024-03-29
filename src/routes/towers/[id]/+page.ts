import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import {error} from '@sveltejs/kit'

import imageList from '$lib/json/images.json';
import paragons from '$lib/json/paragons.json';

export const load: PageLoad = async ({ fetch, params }) => {
	const { id } = params;

	if (!browser) return;

    const imagesFiltered = filterParagons(id);

	let stats = await fetch(`/json/${id}/stats.json`);
	let upgrades = await fetch(`/json/${id}/upgrades.json`);

	if (!stats.ok || !upgrades.ok) {
		throw error(418, 'Tower not implemented yet');
	}

	const promises: Promise<Response>[] = [];
	for (const image of imagesFiltered) {
		promises.push(fetch(`/images/${id}/${image}.png`));
	}
	const images = await Promise.all(promises);

	stats = await stats.json();
	upgrades = await upgrades.json();

	return { stats, upgrades, images };
};

function filterParagons(id: string): string[] {
	if (paragons.includes(id)) return imageList;
	// filter out par and upar images
	return imageList.filter((image: string) => !image.includes('par') && !image.includes('upar'));
}
