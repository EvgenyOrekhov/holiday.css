import React from "react";

export default {
  title: "Forms/<progress>",
  argTypes: {
    value: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
    max: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
  },
};

const Template = (args) => <progress {...args} />;

export const indeterminate = Template.bind({});

indeterminate.storyName = "indeterminate";

export const empty = Template.bind({});

empty.storyName = "empty";
empty.args = {
  value: 0,
  max: 100,
};

export const some = Template.bind({});

some.storyName = "some";
some.args = {
  value: 10,
  max: 100,
};

export const half = Template.bind({});

half.storyName = "half";
half.args = {
  value: 50,
  max: 100,
};

export const full = Template.bind({});

full.storyName = "full";
full.args = {
  value: 100,
  max: 100,
};
