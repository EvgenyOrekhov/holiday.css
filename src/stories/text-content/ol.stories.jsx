import React from "react";

export default {
  title: "Text content/<ol>",
};

export const ol = {
  render: () => (
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
  ),

  name: "<ol>",
};
