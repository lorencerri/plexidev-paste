const axios = require('axios').default

const BASE = 'https://paste-api.plexidev.org'

async function post(content, options = {}) {
	const { language = "js", title = "Untitled Paste" } = options;

	const response = await axios.post(`${BASE}/paste`, { content, title }).catch(e => e)
	if (!response) return { error: '500: No Response' }

	const { data } = response;
	if (!data) return { error: '500: No Data' }

	if (language && data.url) data.url += `.${language}`
	return data
}

async function get(id) {
	const response = await axios.get(`${BASE}/paste/${id}`).catch(e => e)
	if (!response) return { error: '500: No Response' }

	const { data } = response;
	if (!data) return { error: '500: No Data' }

	return data
}

module.exports = { post, get }