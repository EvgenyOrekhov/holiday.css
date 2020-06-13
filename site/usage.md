---
title: Usage
layout: layout
---

## Usage

Have an existing web page? Add this to your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holiday.css@0.7.4" />
```

Starting afresh? Use [Quickstart Template]({{ "/template/" | url }}).

<hr />

## Pro tips

### Use `<header>`, `<nav>`, `<main>`, and `<footer>` inside `<body>`

```html
<body>
  <header></header>
  <nav></nav>
  <main></main>
  <footer></footer>
</body>
```

### Use nested `<ul>` inside `<nav>` to create dropdown menus

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <span>Menu</span>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

Result:

(you will see a hamburger menu if your are on mobile, use desktop to see
dropdowns)

<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <span>Menu</span>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </li>
  </ul>
</nav>

### Use `<picture>` for big images to make them fill more screen space

```html
<picture>
  <img src="https://via.placeholder.com/1920x1080" alt="Placeholder" />
</picture>
```

Result:

<picture>
  <img src="https://via.placeholder.com/1920x1080" alt="Placeholder" />
</picture>

### Use `<figure>` to center images

```html
<figure>
  <img src="https://via.placeholder.com/150" alt="Placeholder" />
</figure>
```

Result:

<figure>
  <img src="https://via.placeholder.com/150" alt="Placeholder" />
</figure>

### Use `<code>` inside `<pre>` for code blocks

```html
<pre><code>/* Hello World in CSS */
body::before {
  content: "Hello World!";
}
</code></pre>
```

Result:

```css
/* Hello World in CSS */
body::before {
  content: "Hello World!";
}
```

### Use Unicode

```html
<button type="button">❤️ Like</button>
```

Result: <button type="button">❤️ Like</button>

### Use `<input>` inside `<label>` to avoid having to use <code>id</code> and <code>for</code> attributes

```html
<label>
  Example
  <input />
</label>
```

Result:

<label>
  Example
  <input />
</label>

### Use `<footer>` for form buttons to add a margin above them

```html
<form>
  <label>
    Example
    <input />
  </label>
  <footer>
    <button type="reset">Reset</button>
    <button>Submit</button>
  </footer>
</form>
```

Result:

<form>
  <label>
    Example
    <input />
  </label>
  <footer>
    <button type="reset">Reset</button>
    <button>Submit</button>
  </footer>
</form>
