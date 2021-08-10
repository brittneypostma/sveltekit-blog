---
title: Create a Blog
---

# Creating a Blog

## With MDSvex and TailwindCSS

```bash
npm init svelte@next app-name
```

```bash
cd app-name
```

```bash
npx svelte-add@latest tailwindcss mdsvex
```

```bash
npm i
```

```bash
npm i -D @sveltejs/adapter-static@next
```

Import and add adapter to `svelte.config.js` file.

```js
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
};

export default config;
```
