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
  --border-radius: 0.25rem;
  --border-width: 1px;
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
```
