import React from "react";

export default {
  title: "Inline text semantics/<code>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const code = () => <code>Example</code>;

code.storyName = "<code>";

export const longCodeInsidePre = () => (
  <pre>
    <code>
      Long long long long long long long long long long long long code inside
      &lt;pre&gt; tag
    </code>
  </pre>
);

longCodeInsidePre.storyName = "long <code> inside <pre>";

export const shortCodeInsidePre = () => (
  <pre>
    <code>Short code inside &lt;pre&gt; tag</code>
  </pre>
);

shortCodeInsidePre.storyName = "short <code> inside <pre>";

export const codeInsideText = () => (
  <>
    <p>
      MWUH qypgj <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj <code>example</code> MWUH qypgj
      <code>example</code> MWgj
      <code>example</code>
    </p>
    <p>
      MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH
      qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj
      MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH
      qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj
      MWUH qypgj MWUH qypgj MWUH qypgj MWUH qypgj
    </p>
  </>
);

codeInsideText.storyName = "<code> inside text";
