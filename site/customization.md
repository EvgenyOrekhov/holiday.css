---
title: Customization
layout: layout
---

## Customization

**holiday.css** uses
[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

You can create your `custom.css`, copy-paste this snippet and customize it to
your needs:

```css
:root {
  /* Sizes */
  --max-body-width: 48rem;
  --border-radius: 0.25rem;
  --border-width: 1px;

  /* Light mode colors */
  --light-border-color: #dbdbdb;
  --light-border-hover-color: #b5b5b5;
  --light-background-color: #fff;
  --light-highlighted-background-color: #f5f5f5;
  --light-text-color: #363636;
  --light-danger-color: #f14668;
  --light-danger-text-color: #fff;
  --light-danger-hover-color: #f03a5f;
  --light-success-color: #48c774;
  --light-success-text-color: #fff;
  --light-success-hover-color: #3ec46d;
  --light-danger-text-background-color: #fde0e6;
  --light-success-text-background-color: #effaf3;
  --light-code-text-color: #f14668;
  --light-code-background-color: #f5f5f5;
  --light-link-color: #3273dc;
  --light-link-visited-color: #b86bff;
  --light-link-hover-color: #363636;
  --light-link-active-color: #363636;

  /* Dark mode colors */
  --dark-border-color: #5f6267;
  --dark-border-hover-color: #bcbebd;
  --dark-background-color: #202124;
  --dark-highlighted-background-color: #292b2e;
  --dark-text-color: #fff;
  --dark-danger-color: #770018;
  --dark-danger-text-color: #fff;
  --dark-danger-hover-color: #6b0015;
  --dark-success-color: #006624;
  --dark-success-text-color: #fff;
  --dark-success-hover-color: #006122;
  --dark-danger-text-background-color: #770018;
  --dark-success-text-background-color: #006624;
  --dark-code-text-color: #f1a0b0;
  --dark-code-background-color: #292b2e;
  --dark-link-color: #90b3ed;
  --dark-link-visited-color: #cb93ff;
  --dark-link-hover-color: #fff;
  --dark-link-active-color: #fff;
}
```

## Dark mode manual override

You can override dark mode manually by adding `holiday-css-light` or
`holiday-css-dark` class to your `<html>` element.

Example:

```html
<html class="holiday-css-light"></html>
```

Note: it has to be `<html>`, and not `<body>` or any other element, so that the
browser would apply the correct color theme to its UI elements, like scrollbars.

## Can I use classes?

Of course! Go ahead and create some!

```css
.big-neon-button {
  padding: 1rem;
  font-size: xx-large;
  font-weight: bold;
  color: #fff;
  background-color: #202124;
}

.big-neon-button:focus,
.big-neon-button:enabled:hover {
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #fff,
    0 0 20px #49ff18,
    0 0 30px #49ff18,
    0 0 40px #49ff18,
    0 0 55px #49ff18,
    0 0 75px #49ff18;
  border-color: #fff;
}
```

```html
<button type="button" class="big-neon-button">PARTY TIME</button>
```

Result:

<button type="button" class="big-neon-button">PARTY TIME</button>

<style>
  .big-neon-button {
    padding: 1rem;
    font-size: xx-large;
    font-weight: bold;
    color: #fff;
    background-color: #202124;
  }

  .big-neon-button:focus,
  .big-neon-button:enabled:hover {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18, 0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
      border-color: #fff;
  }
</style>

Or go ahead and use something like [Tailwind CSS](https://tailwindcss.com/), if
you are into that kind of thing 😉
