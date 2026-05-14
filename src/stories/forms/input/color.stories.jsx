import React from "react";

export default {
  title: 'Forms/<input>/type="color"',
  argTypes: {
    alpha: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    colorspace: {
      type: { name: "select", required: false },
      options: ["limited-srgb", "display-p3"],
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "limited-srgb" },
      },
    },
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      name: "readonly",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args) => <input type="color" {...args} />;

export const color = Template.bind({});

color.storyName = 'type="color"';

export const alpha = Template.bind({});

alpha.storyName = "alpha";
alpha.args = {
  alpha: true,
};

export const displayP3 = Template.bind({});

displayP3.storyName = "display-p3";
displayP3.args = {
  colorspace: "display-p3",
};

export const displayP3Alpha = Template.bind({});

displayP3Alpha.storyName = "display-p3 with alpha";
displayP3Alpha.args = {
  colorspace: "display-p3",
  alpha: true,
};

export const WithDatalist = (args) => (
  <>
    <input type="color" list="preset-colors" {...args} />
    <datalist id="preset-colors">
      <option value="#ff0000">Red</option>
      <option value="#00ff00">Green</option>
      <option value="#0000ff">Blue</option>
      <option value="#ffffff">White</option>
      <option value="#000000">Black</option>
    </datalist>
  </>
);

WithDatalist.storyName = "with <datalist>";

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  disabled: true,
};

export const readonly = Template.bind({});

readonly.storyName = "readonly";
readonly.args = {
  readOnly: true,
};
