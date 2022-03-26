import paste from './index.js'

const main = async () => {

	const content = "Hello World!";

	// Create a new paste
	const post = await paste.post(content, {
		language: 'js',
		title: 'Example Paste'
	})

	console.log(`Created paste with id ${post.id}`)
	console.log(`URL: ${post.url}\n`)

	// Get the paste
	const get = await paste.get(post.id)

	// Tests
	console.log(`Paste content is the same?\t ${get.content === content}`)
	console.log(`Paste has ".js" extension?\t ${post.url.endsWith('.js')}`)

	// Empty post
	const errorPost = await paste.post("", {
		language: 'js',
		title: 'Example Paste'
	})

	console.log(`Empty post returns an error?\t ${!!errorPost.error}`)

	// No options specified
	const noOptions = await paste.post("Hello World")

	console.log(`No options returns a URL?\t ${!!noOptions.url}`)
}

main();