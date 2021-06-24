import React from "react";

export default {
  title: "Image and multimedia/<map>, <area>",
};

export const mapArea = () => (
  <>
    <map name="infographic">
      <area
        shape="poly"
        coords="130,147,200,107,254,219,130,228"
        href="https://developer.mozilla.org/docs/Web/HTML"
        alt="HTML"
      />
      <area
        shape="poly"
        coords="130,147,130,228,6,219,59,107"
        href="https://developer.mozilla.org/docs/Web/CSS"
        alt="CSS"
      />
      <area
        shape="poly"
        coords="130,147,200,107,130,4,59,107"
        href="https://developer.mozilla.org/docs/Web/JavaScript"
        alt="JavaScript"
      />
    </map>
    <img
      useMap="#infographic"
      width="260"
      height="232"
      src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png"
      alt="MDN infographic"
    />
  </>
);

mapArea.storyName = "<map>, <area>";
