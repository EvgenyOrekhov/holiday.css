import React from "react";

export default {
  title: "Text content/<figure>, <figcaption>",
};

export const figure = () => <figure>Example</figure>;

figure.storyName = "<figure>";

export const figcaptionAboveText = () => (
  <figure>
    <figcaption>Example</figcaption>
    Example
  </figure>
);

figcaptionAboveText.storyName = "<figcaption> above text";

export const figcaptionBelowText = () => (
  <figure>
    Example
    <figcaption>Example</figcaption>
  </figure>
);

figcaptionBelowText.storyName = "<figcaption> below text";

export const figcaptionAboveImg = () => (
  <figure>
    <figcaption>Example</figcaption>
    <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
  </figure>
);

figcaptionAboveImg.storyName = "<figcaption> above <img>";

export const figcaptionBelowImg = () => (
  <figure>
    <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
    <figcaption>Example</figcaption>
  </figure>
);

figcaptionBelowImg.storyName = "<figcaption> below <img>";

export const figcaptionBelowBlockquote = () => (
  <figure>
    <blockquote>
      {`<blockquote> example <blockquote> example
<blockquote> example <blockquote> example
<blockquote> example <blockquote> example
<blockquote> example <blockquote> example`}
    </blockquote>
    <figcaption>&lt;blockquote&gt; example</figcaption>
  </figure>
);

figcaptionBelowBlockquote.storyName = "<figcaption> below <blockquote>";

export const figcaptionBelowPre = () => (
  <figure>
    <pre>
      {`<pre> example
<pre> example
<pre> example
<pre> example`}
    </pre>
    <figcaption>&lt;pre&gt; example</figcaption>
  </figure>
);

figcaptionBelowPre.storyName = "<figcaption> below <pre>";
