import React from "react";

export default {
  title: 'Forms/<input>/type="checkbox"',
  argTypes: {
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
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
    indeterminate: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args) => {
  const { indeterminate, ...rest } = args;

  return (
    <label>
      <input
        type="checkbox"
        ref={(element) => {
          if (element) {
            element.indeterminate = indeterminate;
          }
        }}
        {...rest}
      />
      Checkbox
    </label>
  );
};

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

export const indeterminate = {
  render: Template,
  name: "indeterminate",

  args: {
    indeterminate: true,
  },
};

export const disabledUnchecked = {
  render: Template,
  name: "disabled unchecked",

  args: {
    disabled: true,
  },
};

export const disabledChecked = {
  render: Template,
  name: "disabled checked",

  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const disabledIndeterminate = {
  render: Template,
  name: "disabled indeterminate",

  args: {
    indeterminate: true,
    disabled: true,
  },
};

export const requiredUnchecked = {
  render: Template,
  name: "required unchecked",

  args: {
    required: true,
  },
};

export const requiredChecked = {
  render: Template,
  name: "required checked",

  args: {
    defaultChecked: true,
    required: true,
  },
};

const WithMarkupTemplate = (args) => {
  const { indeterminate, ...rest } = args;

  return (
    <label>
      <input
        type="checkbox"
        ref={(element) => {
          if (element) {
            element.indeterminate = indeterminate;
          }
        }}
        {...rest}
      />
      Checkbox <strong>with some</strong> markup
    </label>
  );
};

export const withMarkup = {
  render: WithMarkupTemplate,
  name: "with markup",
};

const LabelAfterCheckboxTemplate = (args) => (
  <>
    <input type="checkbox" {...args} />{" "}
    <label htmlFor={args.id}>Checkbox</label>
  </>
);

export const labelAfterCheckbox = {
  render: LabelAfterCheckboxTemplate,
  name: "<label> after checkbox",

  args: {
    id: "label-after-checkbox",
  },
};

export const labelAfterCheckboxDisabled = {
  render: LabelAfterCheckboxTemplate,
  name: "<label> after checkbox disabled",

  args: {
    disabled: true,
    id: "label-after-checkbox-disabled",
  },
};

const LabelWithMarkupAfterCheckboxTemplate = (args) => (
  <>
    <input type="checkbox" {...args} />{" "}
    <label htmlFor={args.id}>
      Checkbox <strong>with some</strong> markup
    </label>
  </>
);

export const labelWithMarkupAfterCheckbox = {
  render: LabelWithMarkupAfterCheckboxTemplate,
  name: "<label> with markup after checkbox",

  args: {
    id: "label-with-markup-after-checkbox",
  },
};
