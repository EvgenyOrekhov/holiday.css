import React from "react";

export default {
  title: "Inline text semantics/<mark>",
};

export const mark = {
  render: () => (
    <mark>
      The <code>&lt;mark&gt;</code> element highlights text.
      <kbd>&lt;kbd&gt;</kbd> test.
    </mark>
  ),

  name: "<mark>",
};
