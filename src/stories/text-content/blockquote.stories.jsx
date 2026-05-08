import React from "react";

export default {
  title: "Text content/<blockquote>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const justText = () => <blockquote>Just text</blockquote>;

justText.storyName = "just text";

export const withFooter = () => (
  <blockquote>
    The making of good software takes time. If you try to make it take less
    time, it will take more time.
    <footer>— Douglas Crockford</footer>
  </blockquote>
);

withFooter.storyName = "with <footer>";

export const withP = () => (
  <blockquote>
    <p>Quote with &lt;p&gt; tag</p>
  </blockquote>
);

withP.storyName = "with <p>";

export const withPAndFooter = () => (
  <blockquote>
    <p>Quote with &lt;p&gt; tag</p>
    <footer>And with footer</footer>
  </blockquote>
);

withPAndFooter.storyName = "with <p> and <footer>";

export const withPAndWithFooterWithCite = () => (
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
    <footer>
      — Aldous Huxley, <cite>Brave New World</cite>
    </footer>
  </blockquote>
);

withPAndWithFooterWithCite.storyName = "with <p> and with <footer> with <cite>";
