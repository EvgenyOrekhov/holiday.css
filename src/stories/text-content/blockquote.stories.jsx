import React from "react";

export default {
  title: "Text content/<blockquote>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const justText = {
  render: () => <blockquote>Just text</blockquote>,
  name: "just text",
};

export const withFooter = {
  render: () => (
    <blockquote>
      The making of good software takes time. If you try to make it take less
      time, it will take more time.
      <footer>— Douglas Crockford</footer>
    </blockquote>
  ),

  name: "with <footer>",
};

export const withP = {
  render: () => (
    <blockquote>
      <p>Quote with &lt;p&gt; tag</p>
    </blockquote>
  ),

  name: "with <p>",
};

export const withPAndFooter = {
  render: () => (
    <blockquote>
      <p>Quote with &lt;p&gt; tag</p>
      <footer>And with footer</footer>
    </blockquote>
  ),

  name: "with <p> and <footer>",
};

export const withPAndWithFooterWithCite = {
  render: () => (
    <blockquote cite="https://www.huxley.net/bnw/four.html">
      <p>
        Words can be like X-rays, if you use them properly—they’ll go through
        anything. You read and you’re pierced.
      </p>
      <footer>
        — Aldous Huxley, <cite>Brave New World</cite>
      </footer>
    </blockquote>
  ),

  name: "with <p> and with <footer> with <cite>",
};
