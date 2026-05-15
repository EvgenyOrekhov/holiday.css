import React from "react";

export default {
  title: "Text content/<figure>, <figcaption>",
};

export const figure = {
  render: () => <figure>Example</figure>,
  name: "<figure>",
};

export const figcaptionAboveText = {
  render: () => (
    <figure>
      <figcaption>Example</figcaption>
      Example
    </figure>
  ),

  name: "<figcaption> above text",
};

export const figcaptionBelowText = {
  render: () => (
    <figure>
      Example
      <figcaption>Example</figcaption>
    </figure>
  ),

  name: "<figcaption> below text",
};

export const figcaptionAboveImg = {
  render: () => (
    <figure>
      <figcaption>Example</figcaption>
      <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
    </figure>
  ),

  name: "<figcaption> above <img>",
};

export const figcaptionBelowImg = {
  render: () => (
    <figure>
      <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
      <figcaption>Example</figcaption>
    </figure>
  ),

  name: "<figcaption> below <img>",
};

export const figcaptionBelowBlockquote = {
  render: () => (
    <figure>
      <blockquote>
        {`<blockquote> example <blockquote> example
  <blockquote> example <blockquote> example
  <blockquote> example <blockquote> example
  <blockquote> example <blockquote> example`}
      </blockquote>
      <figcaption>&lt;blockquote&gt; example</figcaption>
    </figure>
  ),

  name: "<figcaption> below <blockquote>",
};

export const figcaptionBelowPre = {
  render: () => (
    <figure>
      <pre>
        {`<pre> example
  <pre> example
  <pre> example
  <pre> example`}
      </pre>
      <figcaption>&lt;pre&gt; example</figcaption>
    </figure>
  ),

  name: "<figcaption> below <pre>",
};
