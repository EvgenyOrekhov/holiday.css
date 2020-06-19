# holiday.css :tada:

[![npm version](https://img.shields.io/npm/v/holiday.css.svg?style=flat-square)](https://www.npmjs.com/package/holiday.css)
[![CI](https://github.com/EvgenyOrekhov/holiday.css/workflows/CI/badge.svg?event=push)](https://github.com/EvgenyOrekhov/holiday.css/actions?query=workflow%3ACI+event%3Apush)

> No classes today! Because it's **holiday**!

A minimalist classless CSS theme.

## [Demo](https://evgenyorekhov.github.io/holiday.css/)

## Why

I got tired of complex markup and tons of classes on every element.

See form example: [Bootstrap](https://jsfiddle.net/z16aknfh/3/) vs
[holiday.css](https://jsfiddle.net/5egfxtLc/1/).

## Features

- makes your page fit even the smallest screens, no more broken `<body>` width
  due to wide tables
- supports all
  [`<input>` types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types)
- highlights invalid fields in your forms (that's right, no JS needed for that!)
- makes your `<nav>` look nice, turns your nested `<ul>` lists into **accessible
  dropdowns** (making <kbd>Tab</kbd> work with dropdowns in plain CSS was really
  tricky!)
- doesn't waste precious horizontal space on mobile screens for `<picture>`,
  `video`, `<table>`, and `<pre>` by ignoring body margins and filling 100% of
  screen width
- keeps selector specificity as low as possible, so you could easily extend it
  with CSS classes without using `!important`
- uses **dark mode** for those who prefer it
- built with **pure CSS**
- only **~4 KB** (minified and gzipped)

## Quick Start

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holiday.css@0.9.0" />
```

## Browser compatibility

Tested on latest Chrome and Firefox.

## Acknowledgements

Sources of inspiration:

- [Shoelace.css](https://www.shoelace.style/)
- [Marx](https://mblode.github.io/marx/)
- [Bulma](https://bulma.io/)
- [CSS Bed](https://www.cssbed.com/)

## [Changelog](https://github.com/EvgenyOrekhov/holiday.css/releases)

## License

[MIT](LICENSE)
