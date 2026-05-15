import React from "react";

export default {
  title: "Inline text semantics/<a>",
};

export const a = {
  render: () => (
    <>
      <a href="#">Example</a>{" "}
      <a href="#">
        Example with <code>code</code>
      </a>{" "}
      <a href="mailto:example@example.com">example@example.com</a>{" "}
      <a href="tel:+61255506077">+61 2 5550 6077</a>
    </>
  ),

  name: "<a>",
};
