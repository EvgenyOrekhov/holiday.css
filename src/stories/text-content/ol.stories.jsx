import React from "react";

export default {
  title: "Text content/<ol>",
};

export const ol = () => (
  <ol>
    <li>Example</li>
    <li>
      Example
      <ol type="I">
        <li>Example</li>
        <li>
          Example
          <ol type="a">
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
          </ol>
        </li>
        <li>Example</li>
      </ol>
    </li>
    <li>Example</li>
  </ol>
);

ol.storyName = "<ol>";
