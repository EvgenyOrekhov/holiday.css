import React from "react";

export default {
  title: 'Forms/<input>/type="radio"',
  argTypes: {
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultChecked: {
      name: "checked",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args) => (
  <label>
    <input type="radio" name="example" {...args} />
    Radio
  </label>
);

export const unchecked = Template.bind({});

unchecked.storyName = "unchecked";

export const checked = Template.bind({});

checked.storyName = "checked";
checked.args = {
  defaultChecked: true,
};

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  disabled: true,
};

const WithMarkupTemplate = (args) => (
  <label>
    <input type="radio" name="example" {...args} />
    Radio <strong>with some</strong> markup
  </label>
);

export const withMarkup = WithMarkupTemplate.bind({});

withMarkup.storyName = "with markup";

const LabelAfterRadioTemplate = (args) => (
  <>
    <input type="radio" {...args} /> <label htmlFor={args.id}>Radio</label>
  </>
);

export const labelAfterRadio = LabelAfterRadioTemplate.bind({});

labelAfterRadio.storyName = "<label> after radio";
labelAfterRadio.args = {
  id: "label-after-radio",
};

export const labelAfterRadioDisabled = LabelAfterRadioTemplate.bind({});

labelAfterRadioDisabled.storyName = "<label> after radio disabled";
labelAfterRadioDisabled.args = {
  disabled: true,
  id: "label-after-radio-disabled",
};

const LabelWithMarkupAfterRadioTemplate = (args) => (
  <>
    <input type="radio" {...args} />{" "}
    <label htmlFor={args.id}>
      Radio <strong>with some</strong> markup
    </label>
  </>
);

export const labelWithMarkupAfterRadio = LabelWithMarkupAfterRadioTemplate.bind(
  {}
);

labelWithMarkupAfterRadio.storyName = "<label> with markup after radio";
labelWithMarkupAfterRadio.args = {
  id: "label-with-markup-after-radio",
};
