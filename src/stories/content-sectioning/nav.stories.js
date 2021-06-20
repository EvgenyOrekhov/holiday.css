import React from "react";

export default {
  title: "Content sectioning/<nav>",
};

export const withUl = () => (
  <nav>
    <ul>
      <li>Just text</li>
      <li>
        <a href="#">Just link</a>
      </li>
      <li>
        <span>Just submenu</span>
        <ul>
          <li>
            <a href="#">Sublink</a>
          </li>
          <li>
            <a href="#">Another sublink</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Link with submenu</a>
        <ul>
          <li>
            <a href="#">Sublink with submenu</a>
            <ul>
              <li>
                <span>Just submenu</span>
                <ul>
                  <li>
                    <a href="#">Subsubsublink</a>
                  </li>
                  <li>
                    <a href="#">Another subsubsublink</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

withUl.storyName = "with <ul>";

export const justA = () => (
  <nav>
    <a href="#">Just a link without a list</a>{" "}
    <a href="#">Another link without a list</a>
  </nav>
);

justA.storyName = "just <a>";
