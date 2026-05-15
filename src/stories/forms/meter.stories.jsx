import React from "react";

export default {
  title: "Forms/<meter>",
  argTypes: {
    value: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
    min: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    low: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
    high: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
    optimum: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
  },
};

const Template = (args) => <meter {...args} />;

export const empty = {
  render: Template,
  name: "empty",

  args: {
    value: 0,
    min: 0,
    max: 100,
    low: 25,
    high: 75,
    optimum: 100,
  },
};

export const some = {
  render: Template,
  name: "some",

  args: {
    value: 10,
    min: 0,
    max: 100,
    low: 25,
    high: 75,
    optimum: 100,
  },
};

export const half = {
  render: Template,
  name: "half",

  args: {
    value: 50,
    min: 0,
    max: 100,
    low: 25,
    high: 75,
    optimum: 100,
  },
};

export const full = {
  render: Template,
  name: "full",

  args: {
    value: 100,
    min: 0,
    max: 100,
    low: 25,
    high: 75,
    optimum: 100,
  },
};
