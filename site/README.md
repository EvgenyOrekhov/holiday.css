---
title: a minimalist classless CSS theme
layout: layout
permalink: "/"
---

> No classes today! Because it's **holiday**!

A minimalist classless CSS theme.

This very site is a demo of **holiday.css** (with a little help from
[Prism](https://prismjs.com/)). It uses semantic HTML markup and no CSS classes.

You can use it as is for:

- a project site (just like this one)
- a blog
- an "About me" site

Or you can use it as a base and build upon it.

Just add this to your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holiday.css@0.9.3" />
```

## What makes holiday.css different

There are [dozens](https://dohliam.github.io/dropin-minimal-css/) of classless
CSS themes out there, but none of them satisified all of my needs.

So I built my own.

These are the features that make **holiday.css** stand out:

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

## Rationale

I got tired of complex markup and tons of classes on every element.

Consider the following form example from the
[official Bootstrap documentation](https://getbootstrap.com/docs/4.5/components/forms/#overview):

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <small id="emailHelp" class="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

Notice that there are extra `<div>` wrappers and a ton of classes.

Now compare it to the simplest possible markup **that looks as awesome when you
use holiday.css**:

```html
<form>
  <label>
    Email address
    <input type="email" aria-describedby="emailHelp" />
    <small id="emailHelp">
      We'll never share your email with anyone else.
    </small>
  </label>
  <label>
    Password
    <input type="password" />
  </label>
  <label>
    <input type="checkbox" />
    Check me out
  </label>
  <footer>
    <button type="submit">Submit</button>
  </footer>
</form>
```

Result:

<form>
  <label>
    Email address
    <input type="email" aria-describedby="emailHelp" />
    <small id="emailHelp">
      We'll never share your email with anyone else.
    </small>
  </label>
  <label>
    Password
    <input type="password" />
  </label>
  <label>
    <input type="checkbox" />
    Check me out
  </label>
  <footer>
    <button type="submit">Submit</button>
  </footer>
</form>

## Contribute

Have a problem? Don't like how something looks? Want to help?

Feel free to help make **holiday.css** even better!

[Source code on GitHub](https://github.com/EvgenyOrekhov/holiday.css)

## Future

- Add theme support
- Extract a subset of styles into a separate stylesheet for use as a base for
  web apps
