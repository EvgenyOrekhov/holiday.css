import React from "react";

export default {
  title: "Inline text semantics/<wbr>",
};

export const wbr = {
  render: () => (
    <>
      Ex
      <wbr />
      am
      <wbr />
      ple
    </>
  ),

  name: "<wbr>",
};
