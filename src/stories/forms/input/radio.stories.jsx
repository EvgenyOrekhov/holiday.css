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

export const unchecked = {
  render: Template,
  name: "unchecked",
};

export const checked = {
  render: Template,
  name: "checked",

  args: {
    defaultChecked: true,
  },
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    disabled: true,
  },
};

const WithMarkupTemplate = (args) => (
  <label>
    <input type="radio" name="example" {...args} />
    Radio <strong>with some</strong> markup
  </label>
);

export const withMarkup = {
  render: WithMarkupTemplate,
  name: "with markup",
};

const LabelAfterRadioTemplate = (args) => (
  <>
    <input type="radio" {...args} /> <label htmlFor={args.id}>Radio</label>
  </>
);

export const labelAfterRadio = {
  render: LabelAfterRadioTemplate,
  name: "<label> after radio",

  args: {
    id: "label-after-radio",
  },
};

export const labelAfterRadioDisabled = {
  render: LabelAfterRadioTemplate,
  name: "<label> after radio disabled",

  args: {
    disabled: true,
    id: "label-after-radio-disabled",
  },
};

const LabelWithMarkupAfterRadioTemplate = (args) => (
  <>
    <input type="radio" {...args} />{" "}
    <label htmlFor={args.id}>
      Radio <strong>with some</strong> markup
    </label>
  </>
);

export const labelWithMarkupAfterRadio = {
  render: LabelWithMarkupAfterRadioTemplate,
  name: "<label> with markup after radio",

  args: {
    id: "label-with-markup-after-radio",
  },
};
