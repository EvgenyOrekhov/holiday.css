import React from "react";

export default {
  title: "Forms/<fieldset>, <legend>",
  argTypes: {
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const FieldsetTemplate = (args) => (
  <fieldset {...args}>
    <button type="button">Button</button>
  </fieldset>
);

export const fieldset = {
  render: FieldsetTemplate,
  name: "<fieldset>",
};

export const fieldsetDisabled = {
  render: FieldsetTemplate,
  name: "<fieldset> disabled",

  args: {
    disabled: true,
  },
};

const FieldsetWithLegendTemplate = (args) => (
  <fieldset {...args}>
    <legend>Example</legend>
    <button type="button">Button</button>
  </fieldset>
);

export const fieldsetWithLegend = {
  render: FieldsetWithLegendTemplate,
  name: "<fieldset> with <legend>",
};

export const fieldsetWithLegendDisabled = {
  render: FieldsetWithLegendTemplate,
  name: "<fieldset> with <legend> disabled",

  args: {
    disabled: true,
  },
};

export const FieldsetWithRadios = {
  render: (args) => (
    <fieldset {...args}>
      <input type="radio" id="choice-1" name="choice" value="1" />{" "}
      <label for="choice-1">Choice 1</label>
      <br />
      <input type="radio" id="choice-2" name="choice" value="2" />{" "}
      <label for="choice-2">Choice 2</label>
      <br />
      <input type="radio" id="choice-3" name="choice" value="3" />{" "}
      <label for="choice-3">Choice 3</label>
    </fieldset>
  ),
};

export const FieldsetWithRadiosAndLegend = {
  render: (args) => (
    <fieldset {...args}>
      <legend>Radio</legend>
      <input type="radio" id="choice-1" name="choice" value="1" />{" "}
      <label for="choice-1">Choice 1</label>
      <br />
      <input type="radio" id="choice-2" name="choice" value="2" />{" "}
      <label for="choice-2">Choice 2</label>
      <br />
      <input type="radio" id="choice-3" name="choice" value="3" />{" "}
      <label for="choice-3">Choice 3</label>
    </fieldset>
  ),
};

export const FieldsetWithCheckboxes = {
  render: (args) => (
    <fieldset {...args}>
      <input type="checkbox" id="check-1" name="check-1" value="check1" />{" "}
      <label for="check-1">Check 1</label>
      <br />
      <input type="checkbox" id="check-2" name="check-2" value="check2" />{" "}
      <label for="check-2">Check 2</label>
      <br />
      <input type="checkbox" id="check-3" name="check-3" value="check3" />{" "}
      <label for="check-3">Check 3</label>
    </fieldset>
  ),
};

export const FieldsetWithCheckboxesAndLegend = {
  render: (args) => (
    <fieldset {...args}>
      <legend>Checkbox</legend>
      <input type="checkbox" id="check-1" name="check-1" value="check1" />{" "}
      <label for="check-1">Check 1</label>
      <br />
      <input type="checkbox" id="check-2" name="check-2" value="check2" />{" "}
      <label for="check-2">Check 2</label>
      <br />
      <input type="checkbox" id="check-3" name="check-3" value="check3" />{" "}
      <label for="check-3">Check 3</label>
    </fieldset>
  ),
};
