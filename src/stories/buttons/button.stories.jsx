import React from "react";

export default {
  title: "Buttons/<button>",
  argTypes: {
    type: {
      type: { name: "string", required: false },
      options: ["button", "reset", "submit"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "submit" },
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
    text: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
};

const Template = (args) => {
  const { text, ...rest } = args;

  return <button {...rest}>{text}</button>;
};

export const button = {
  render: Template,
  name: 'type="button"',

  args: {
    type: "button",
    text: "Button",
  },
};

export const reset = {
  render: Template,
  name: 'type="reset"',

  args: {
    type: "reset",
    text: "Reset",
  },
};

export const submit = {
  render: Template,
  name: 'type="submit"',

  args: {
    type: "submit",
    text: "Submit",
  },
};

export const implicitSubmit = {
  render: Template,
  name: 'implicit type="submit"',

  args: {
    text: "Submit",
  },
};

export const buttonDisabled = {
  render: Template,
  name: 'type="button" disabled',

  args: {
    type: "button",
    disabled: true,
    text: "Button",
  },
};

export const resetDisabled = {
  render: Template,
  name: 'type="reset" disabled',

  args: {
    type: "reset",
    disabled: true,
    text: "Reset",
  },
};

export const submitDisabled = {
  render: Template,
  name: 'type="submit" disabled',

  args: {
    type: "submit",
    disabled: true,
    text: "Submit",
  },
};

export const implicitSubmitDisabled = {
  render: Template,
  name: 'implicit type="submit" disabled',

  args: {
    disabled: true,
    text: "Submit",
  },
};

export const emojiLeft = {
  render: Template,
  name: "emoji left",

  args: {
    type: "button",
    text: "🙂 emoji-left",
  },
};

export const emoji = {
  render: Template,
  name: "emoji",

  args: {
    type: "button",
    text: "🙂",
  },
};

export const emojiRight = {
  render: Template,
  name: "emoji right",

  args: {
    type: "button",
    text: "emoji-right 🙂",
  },
};
