import React from "react";

export default {
  title: "Inline text semantics/<code>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const code = {
  render: () => <code>Example</code>,
  name: "<code>",
};

export const longCodeInsidePre = {
  render: () => (
    <pre>
      <code>
        Long long long long long long long long long long long long code inside
        &lt;pre&gt; tag
      </code>
    </pre>
  ),

  name: "long <code> inside <pre>",
};

export const shortCodeInsidePre = {
  render: () => (
    <pre>
      <code>Short code inside &lt;pre&gt; tag</code>
    </pre>
  ),

  name: "short <code> inside <pre>",
};

export const codeInsideText = {
  render: () => (
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
  ),

  name: "<code> inside text",
};
