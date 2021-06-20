import React from "react";

export default {
  title: "Embedded content/<object>",
};

export const object = () => (
  <object
    type="application/pdf"
    data="https://holidaycss.js.org/sample.pdf"
  ></object>
);

object.storyName = "<object>";
