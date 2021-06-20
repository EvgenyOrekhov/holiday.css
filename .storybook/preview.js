import "./fix.css";

import "modern-normalize";
import "../src/css/mobile.css";
import "../src/css/cursors.css";
import "../src/css/nav.css";
import "../src/css/themes/bulma.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
