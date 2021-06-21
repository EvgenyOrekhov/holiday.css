import React from "react";

export default {
  title: 'Forms/<input>/type="checkbox"',
  argTypes: {
    type: {
      type: { name: "string", required: true },
      options: ["checkbox"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "checkbox" },
      },
      control: {
        type: "select",
      },
    },
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

export const unchecked = Template.bind({});

unchecked.storyName = "unchecked";
unchecked.args = {
  type: "checkbox",
};

export const checked = Template.bind({});

checked.storyName = "checked";
checked.args = {
  type: "checkbox",
  defaultChecked: true,
};

export const indeterminate = Template.bind({});

indeterminate.storyName = "indeterminate";
indeterminate.args = {
  type: "checkbox",
  indeterminate: true,
};

export const disabledUnchecked = Template.bind({});

disabledUnchecked.storyName = "disabled unchecked";
disabledUnchecked.args = {
  type: "checkbox",
  disabled: true,
};

export const disabledChecked = Template.bind({});

disabledChecked.storyName = "disabled checked";
disabledChecked.args = {
  type: "checkbox",
  defaultChecked: true,
  disabled: true,
};

export const disabledIndeterminate = Template.bind({});

disabledIndeterminate.storyName = "disabled indeterminate";
disabledIndeterminate.args = {
  type: "checkbox",
  indeterminate: true,
  disabled: true,
};

export const requiredUnchecked = Template.bind({});

requiredUnchecked.storyName = "required unchecked";
requiredUnchecked.args = {
  type: "checkbox",
  required: true,
};

export const requiredChecked = Template.bind({});

requiredChecked.storyName = "required checked";
requiredChecked.args = {
  type: "checkbox",
  defaultChecked: true,
  required: true,
};

const LabelAfterCheckboxTemplate = (args) => (
  <>
    <input type="checkbox" {...args} />{" "}
    <label htmlFor={args.id}>Checkbox</label>
  </>
);

export const labelAfterCheckbox = LabelAfterCheckboxTemplate.bind({});

labelAfterCheckbox.storyName = "<label> after checkbox";
labelAfterCheckbox.args = {
  type: "checkbox",
  id: "label-after-checkbox",
};

export const labelAfterCheckboxDisabled = LabelAfterCheckboxTemplate.bind({});

labelAfterCheckboxDisabled.storyName = "<label> after checkbox disabled";
labelAfterCheckboxDisabled.args = {
  type: "checkbox",
  disabled: true,
  id: "label-after-checkbox-disabled",
};
