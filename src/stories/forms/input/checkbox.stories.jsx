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

export const unchecked = Template.bind({});

unchecked.storyName = "unchecked";

export const checked = Template.bind({});

checked.storyName = "checked";
checked.args = {
  defaultChecked: true,
};

export const indeterminate = Template.bind({});

indeterminate.storyName = "indeterminate";
indeterminate.args = {
  indeterminate: true,
};

export const disabledUnchecked = Template.bind({});

disabledUnchecked.storyName = "disabled unchecked";
disabledUnchecked.args = {
  disabled: true,
};

export const disabledChecked = Template.bind({});

disabledChecked.storyName = "disabled checked";
disabledChecked.args = {
  defaultChecked: true,
  disabled: true,
};

export const disabledIndeterminate = Template.bind({});

disabledIndeterminate.storyName = "disabled indeterminate";
disabledIndeterminate.args = {
  indeterminate: true,
  disabled: true,
};

export const requiredUnchecked = Template.bind({});

requiredUnchecked.storyName = "required unchecked";
requiredUnchecked.args = {
  required: true,
};

export const requiredChecked = Template.bind({});

requiredChecked.storyName = "required checked";
requiredChecked.args = {
  defaultChecked: true,
  required: true,
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

export const withMarkup = WithMarkupTemplate.bind({});

withMarkup.storyName = "with markup";

const LabelAfterCheckboxTemplate = (args) => (
  <>
    <input type="checkbox" {...args} />{" "}
    <label htmlFor={args.id}>Checkbox</label>
  </>
);

export const labelAfterCheckbox = LabelAfterCheckboxTemplate.bind({});

labelAfterCheckbox.storyName = "<label> after checkbox";
labelAfterCheckbox.args = {
  id: "label-after-checkbox",
};

export const labelAfterCheckboxDisabled = LabelAfterCheckboxTemplate.bind({});

labelAfterCheckboxDisabled.storyName = "<label> after checkbox disabled";
labelAfterCheckboxDisabled.args = {
  disabled: true,
  id: "label-after-checkbox-disabled",
};

const LabelWithMarkupAfterCheckboxTemplate = (args) => (
  <>
    <input type="checkbox" {...args} />{" "}
    <label htmlFor={args.id}>
      Checkbox <strong>with some</strong> markup
    </label>
  </>
);

export const labelWithMarkupAfterCheckbox =
  LabelWithMarkupAfterCheckboxTemplate.bind({});

labelWithMarkupAfterCheckbox.storyName = "<label> with markup after checkbox";
labelWithMarkupAfterCheckbox.args = {
  id: "label-with-markup-after-checkbox",
};
