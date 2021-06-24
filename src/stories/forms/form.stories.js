import React from "react";

export default {
  title: "Forms/<form>",
};

export const form = () => (
  <form>
    <fieldset>
      <legend>Checkboxes</legend>
      <label>
        <input type="checkbox" />
        Checkbox
      </label>
      <label>
        <input type="checkbox" defaultChecked />
        Checked
      </label>
      <label>
        <input type="checkbox" disabled />
        Disabled
      </label>
      <label>
        <input type="checkbox" required />
        Required
      </label>
      <label>
        Text
        <input />
      </label>
    </fieldset>
    <label>
      Text
      <input />
    </label>
    <label>
      Required
      <input required />
    </label>
    <label>
      Color
      <input type="color" />
    </label>
    <label>
      File
      <input type="file" />
    </label>
    <label>
      <input type="radio" name="example" />
      Radio
    </label>
    <label>
      <input type="radio" name="example" defaultChecked />
      Checked
    </label>
    <label>
      <input type="radio" name="example" disabled />
      Disabled
    </label>
    <label>
      Range
      <input type="range" defaultValue="5" min="0" max="10" />
    </label>
    <label>
      Select
      <select>
        <option>Example</option>
        <option>Example</option>
        <option>Example</option>
        <optgroup label="Example">
          <option>Example</option>
          <option>Example</option>
          <option>Example</option>
        </optgroup>
        <optgroup label="Disabled" disabled>
          <option>Disabled</option>
          <option>Disabled</option>
          <option>Disabled</option>
        </optgroup>
      </select>
    </label>
    <label>
      Multiple select
      <select multiple>
        <option>Example</option>
        <option>Example</option>
        <option>Example</option>
        <optgroup label="Example">
          <option>Example</option>
          <option>Example</option>
          <option>Example</option>
        </optgroup>
        <optgroup label="Disabled" disabled>
          <option>Disabled</option>
          <option>Disabled</option>
          <option>Disabled</option>
        </optgroup>
      </select>
    </label>
    <label>
      Textarea
      <textarea></textarea>
    </label>
    <footer>
      <button>Submit</button> <button type="reset">Reset</button>
    </footer>
  </form>
);

form.storyName = "<form>";
