import React from "react";

export default {
  title: "Inline text semantics/<a>",
};

export const a = () => (
  <>
    <a href="#">Example</a>{" "}
    <a href="mailto:example@example.com">example@example.com</a>{" "}
    <a href="tel:+61255506077">+61 2 5550 6077</a>
  </>
);

a.storyName = "<a>";
