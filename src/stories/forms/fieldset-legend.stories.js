import React from "react";

export default {
  title: "Forms/<fieldset>, <legend>",
  argTypes: {
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const FieldsetTemplate = (args) => (
  <fieldset {...args}>
    <button type="button">Button</button>
  </fieldset>
);

export const fieldset = FieldsetTemplate.bind({});

fieldset.storyName = "<fieldset>";

export const fieldsetDisabled = FieldsetTemplate.bind({});

fieldsetDisabled.storyName = "<fieldset> disabled";
fieldsetDisabled.args = {
  disabled: true,
};

const FieldsetWithLegendTemplate = (args) => (
  <fieldset {...args}>
    <legend>Example</legend>
    <button type="button">Button</button>
  </fieldset>
);

export const fieldsetWithLegend = FieldsetWithLegendTemplate.bind({});

fieldsetWithLegend.storyName = "<fieldset> with <legend>";

export const fieldsetWithLegendDisabled = FieldsetWithLegendTemplate.bind({});

fieldsetWithLegendDisabled.storyName = "<fieldset> with <legend> disabled";
fieldsetWithLegendDisabled.args = {
  disabled: true,
};
