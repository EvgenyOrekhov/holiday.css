import React from "react";

export default {
  title: "Text content/<ul>",
};

export const ul = {
  render: () => (
    <ul>
      <li>Example</li>
      <li>
        Example
        <ul>
          <li>Example</li>
          <li>
            Example
            <ul>
              <li>Example</li>
              <li>Example</li>
              <li>Example</li>
            </ul>
          </li>
          <li>Example</li>
        </ul>
      </li>
      <li>Example</li>
    </ul>
  ),

  name: "<ul>",
};
