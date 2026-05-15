import React from "react";

export default {
  title: "Buttons/<input>",
  argTypes: {
    type: {
      type: { name: "string", required: true },
      options: ["button", "reset", "submit", "image"],
      table: {
        type: { summary: "string" },
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
    value: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
      },
    },
    src: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
      },
    },
  },
};

const Template = (args) => <input {...args} />;

export const button = {
  render: Template,
  name: 'type="button"',

  args: {
    type: "button",
    value: "Button",
  },
};

export const reset = {
  render: Template,
  name: 'type="reset"',

  args: {
    type: "reset",
  },
};

export const submit = {
  render: Template,
  name: 'type="submit"',

  args: {
    type: "submit",
  },
};

export const image = {
  render: Template,
  name: 'type="image"',

  args: {
    type: "image",
    src: "https://holidaycss.js.org/70x36.svg",
    alt: "Placeholder",
  },
};

export const buttonDisabled = {
  render: Template,
  name: 'type="button" disabled',

  args: {
    type: "button",
    disabled: true,
    value: "Button",
  },
};

export const resetDisabled = {
  render: Template,
  name: 'type="reset" disabled',

  args: {
    type: "reset",
    disabled: true,
    value: "Reset",
  },
};

export const submitDisabled = {
  render: Template,
  name: 'type="submit" disabled',

  args: {
    type: "submit",
    disabled: true,
    value: "Submit",
  },
};

export const imageDisabled = {
  render: Template,
  name: 'type="image" disabled',

  args: {
    type: "image",
    src: "https://holidaycss.js.org/70x36.svg",
    alt: "Placeholder",
    disabled: true,
  },
};

export const emojiLeft = {
  render: Template,
  name: "emoji left",

  args: {
    type: "button",
    value: "🙂 emoji-left",
  },
};

export const emoji = {
  render: Template,
  name: "emoji",

  args: {
    type: "button",
    value: "🙂",
  },
};

export const emojiRight = {
  render: Template,
  name: "emoji right",

  args: {
    type: "button",
    value: "emoji-right 🙂",
  },
};
