# plexidev-paste

An API wrapper for paste.plexidev.org

### Basic Example

```js
const paste = require("plexidev-paste");

// Create paste
const post = await paste.post("console.log('Hello World')", {
    language: "js",
    title: "Example Paste",
});

console.log(post);
/* -> {
  id: 'dHhCc8Vn8D',
  key: 'bYC2C11dNt7WRDC',
  raw: 'https://paste-api.plexidev.org/paste/dHhCc8Vn8D',
  url: 'https://paste.plexidev.org/dHhCc8Vn8D.js'
} */

// Get paste
const get = await paste.get(post.id);

console.log(get);
/* -> {
  id: 'dHhCc8Vn8D',
  createdAt: '2022-03-26T19:30:27.112Z',
  updatedAt: '2022-03-26T19:30:27.113Z',
  title: 'Example Paste',
  content: 'console.log('Hello World')',
  views: 1,
  size: 12
} */
```

### Usage

**.post(content, options)**
| Property | Required? | Default |
| ------------- | ------------- | --- |
| content | Yes | null |
| options | No | {} |
| options.title | No | "Untitled Paste" |
| options.language | No | "js" |

**.get(id)**
| Property | Required? | Default |
| ------------- | ------------- | --- |
| id | Yes | null |
