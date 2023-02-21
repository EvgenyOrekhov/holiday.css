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

  /* Colors */
  --border-color: #dbdbdb;
  --border-hover-color: #b5b5b5;
  --background-color: #fff;
  --highlighted-background-color: #f5f5f5;
  --text-color: #363636;
  --danger-color: #f14668;
  --danger-text-color: #fff;
  --danger-hover-color: #f03a5f;
  --success-color: #48c774;
  --success-text-color: #fff;
  --success-hover-color: #3ec46d;
  --danger-text-background-color: #fde0e6;
  --success-text-background-color: #effaf3;
  --code-text-color: #f14668;
  --code-background-color: #f5f5f5;
  --link-color: #3273dc;
  --link-visited-color: #b86bff;
  --link-hover-color: #363636;
  --link-active-color: #363636;
}

@media (prefers-color-scheme: dark) {
  :root {
    --border-color: #5f6267;
    --border-hover-color: #bcbebd;
    --background-color: #202124;
    --highlighted-background-color: #292b2e;
    --text-color: #fff;
    --danger-color: #770018;
    --danger-text-color: #fff;
    --danger-hover-color: #6b0015;
    --success-color: #006624;
    --success-text-color: #fff;
    --success-hover-color: #006122;
    --danger-text-background-color: #770018;
    --success-text-background-color: #006624;
    --code-text-color: #f1a0b0;
    --code-background-color: #292b2e;
    --link-color: #90b3ed;
    --link-visited-color: #cb93ff;
    --link-hover-color: #fff;
    --link-active-color: #fff;
  }
}

/* Have to declare same colors as for `:root` */
.holiday-css-light {
  --border-color: #dbdbdb;
  --border-hover-color: #b5b5b5;
  --background-color: #fff;
  --highlighted-background-color: #f5f5f5;
  --text-color: #363636;
  --danger-color: #f14668;
  --danger-text-color: #fff;
  --danger-hover-color: #f03a5f;
  --success-color: #48c774;
  --success-text-color: #fff;
  --success-hover-color: #3ec46d;
  --danger-text-background-color: #fde0e6;
  --success-text-background-color: #effaf3;
  --code-text-color: #f14668;
  --code-background-color: #f5f5f5;
  --link-color: #3273dc;
  --link-visited-color: #b86bff;
  --link-hover-color: #363636;
  --link-active-color: #363636;
}

/* Have to declare same colors as for `@media (prefers-color-scheme: dark)` */
.holiday-css-dark {
  --border-color: #5f6267;
  --border-hover-color: #bcbebd;
  --background-color: #202124;
  --highlighted-background-color: #292b2e;
  --text-color: #fff;
  --danger-color: #770018;
  --danger-text-color: #fff;
  --danger-hover-color: #6b0015;
  --success-color: #006624;
  --success-text-color: #fff;
  --success-hover-color: #006122;
  --danger-text-background-color: #770018;
  --success-text-background-color: #006624;
  --code-text-color: #f1a0b0;
  --code-background-color: #292b2e;
  --link-color: #90b3ed;
  --link-visited-color: #cb93ff;
  --link-hover-color: #fff;
  --link-active-color: #fff;
}
```

## Dark mode manual override

You can override dark mode manually by adding `.holiday-css-light` or
`.holiday-css-dark` to the `<html>` element.

Note: it has to be `<html>`, and not `<body>` or any other element, so that the
browser would apply the correct color theme for its UI elements, like
scrollbars.

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
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
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
