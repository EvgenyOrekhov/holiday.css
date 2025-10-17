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

export const button = Template.bind({});

button.storyName = 'type="button"';
button.args = {
  type: "button",
  value: "Button",
};

export const reset = Template.bind({});

reset.storyName = 'type="reset"';
reset.args = {
  type: "reset",
};

export const submit = Template.bind({});

submit.storyName = 'type="submit"';
submit.args = {
  type: "submit",
};

export const image = Template.bind({});

image.storyName = 'type="image"';
image.args = {
  type: "image",
  src: "https://holidaycss.js.org/70x36.svg",
  alt: "Placeholder",
};

export const buttonDisabled = Template.bind({});

buttonDisabled.storyName = 'type="button" disabled';
buttonDisabled.args = {
  type: "button",
  disabled: true,
  value: "Button",
};

export const resetDisabled = Template.bind({});

resetDisabled.storyName = 'type="reset" disabled';
resetDisabled.args = {
  type: "reset",
  disabled: true,
  value: "Reset",
};

export const submitDisabled = Template.bind({});

submitDisabled.storyName = 'type="submit" disabled';
submitDisabled.args = {
  type: "submit",
  disabled: true,
  value: "Submit",
};

export const imageDisabled = Template.bind({});

imageDisabled.storyName = 'type="image" disabled';
imageDisabled.args = {
  type: "image",
  src: "https://holidaycss.js.org/70x36.svg",
  alt: "Placeholder",
  disabled: true,
};

export const emojiLeft = Template.bind({});

emojiLeft.storyName = "emoji left";
emojiLeft.args = {
  type: "button",
  value: "🙂 emoji-left",
};

export const emoji = Template.bind({});

emoji.storyName = "emoji";
emoji.args = {
  type: "button",
  value: "🙂",
};

export const emojiRight = Template.bind({});

emojiRight.storyName = "emoji right";
emojiRight.args = {
  type: "button",
  value: "emoji-right 🙂",
};
