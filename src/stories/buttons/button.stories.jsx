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

export const button = Template.bind({});

button.storyName = 'type="button"';
button.args = {
  type: "button",
  text: "Button",
};

export const reset = Template.bind({});

reset.storyName = 'type="reset"';
reset.args = {
  type: "reset",
  text: "Reset",
};

export const submit = Template.bind({});

submit.storyName = 'type="submit"';
submit.args = {
  type: "submit",
  text: "Submit",
};

export const implicitSubmit = Template.bind({});

implicitSubmit.storyName = 'implicit type="submit"';
implicitSubmit.args = {
  text: "Submit",
};

export const buttonDisabled = Template.bind({});

buttonDisabled.storyName = 'type="button" disabled';
buttonDisabled.args = {
  type: "button",
  disabled: true,
  text: "Button",
};

export const resetDisabled = Template.bind({});

resetDisabled.storyName = 'type="reset" disabled';
resetDisabled.args = {
  type: "reset",
  disabled: true,
  text: "Reset",
};

export const submitDisabled = Template.bind({});

submitDisabled.storyName = 'type="submit" disabled';
submitDisabled.args = {
  type: "submit",
  disabled: true,
  text: "Submit",
};

export const implicitSubmitDisabled = Template.bind({});

implicitSubmitDisabled.storyName = 'implicit type="submit" disabled';
implicitSubmitDisabled.args = {
  disabled: true,
  text: "Submit",
};

export const emojiLeft = Template.bind({});

emojiLeft.storyName = "emoji left";
emojiLeft.args = {
  type: "button",
  text: "🙂 emoji-left",
};

export const emoji = Template.bind({});

emoji.storyName = "emoji";
emoji.args = {
  type: "button",
  text: "🙂",
};

export const emojiRight = Template.bind({});

emojiRight.storyName = "emoji right";
emojiRight.args = {
  type: "button",
  text: "emoji-right 🙂",
};
