import React from "react";

export default {
  title: "Forms/<datalist>",
};

export const datalist = () => (
  <>
    <input list="datalist-example" />
    <datalist id="datalist-example">
      <option value="foo"></option>
      <option value="bar"></option>
      <option value="baz"></option>
    </datalist>
  </>
);

datalist.storyName = "<datalist>";
