import { writable, derived } from 'svelte/store';

export const name = writable('world');

export const tag = writable('p');
export const content = writable('hello njing');

// export const block = derived(
//     (tag, content),
//     ($tag, $content) => `<${$tag}>${$content}</${$tag}>`
// )

export const block = derived(
    [tag, content],
    ([$tag, $content]) => `<${$tag}>${$content}</${$tag}>`
)


export const greeting = derived(
	name,
	$name => `Hello ${$name}!`
);