import fetch from 'node-fetch';

const BASE = 'https://paste-api.plexidev.org'

async function post(content, options = {}) {
	const { language = "js", title = "Untitled Paste" } = options;

	const fetchOptions = {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ content, title })
	}

	const response = await fetch(`${BASE}/paste`, fetchOptions).catch(e => e)
	const data = await response.json()

	if (language && data.url) data.url += `.${language}`

	return data
}

async function get(id) {
	const response = await fetch(`${BASE}/paste/${id}`).catch(e => e)
	const data = await response.json()

	return data
}

export default { post, get }