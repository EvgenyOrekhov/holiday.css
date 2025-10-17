---
title: Usage
layout: layout
---

## Usage

Have an existing web page? Add this to your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holiday.css@0.11.3" />
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

### Use `aria-current="page"` to highlight current link

```html
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#" aria-current="page">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
  </ul>
</nav>
```

Result:

<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#" aria-current="page">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
  </ul>
</nav>

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
  <img src="https://holidaycss.js.org/1920x1080.svg" alt="Placeholder" />
</picture>
```

Result:

<picture>
  <img src="https://holidaycss.js.org/1920x1080.svg" alt="Placeholder" />
</picture>

### Use `<figure>` to center images

```html
<figure>
  <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
</figure>
```

Result:

<figure>
  <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
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
    <button>Submit</button>
    <button type="reset">Reset</button>
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
    <button>Submit</button>
    <button type="reset">Reset</button>
  </footer>
</form>

### Use `holiday-css-light` and `holiday-css-dark` classes to override light/dark mode preference

```html
<html class="holiday-css-light"></html>
```

Note: it has to be `<html>`, and not `<body>` or any other element, so that the
browser would apply the correct color theme to its UI elements, like scrollbars.
