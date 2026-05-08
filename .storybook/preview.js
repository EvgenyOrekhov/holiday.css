import "./fix.css";

import "modern-normalize";
import "../src/css/mobile.css";
import "../src/css/cursors.css";
import "../src/css/nav.css";
import "../src/css/themes/bulma.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
