import React from "react";

export default {
  title: "Inline text semantics/<kbd>",
};

export const key = () => <kbd>Enter</kbd>;

key.storyName = "key";

export const separateShortcut = () => (
  <>
    <kbd>Ctrl</kbd> + <kbd>C</kbd>
  </>
);

separateShortcut.storyName = "separate shortcut";

export const combinedShortcut = () => (
  <>
    <kbd>
      <kbd>Ctrl</kbd> + <kbd>V</kbd>
    </kbd>
  </>
);

combinedShortcut.storyName = "combined shortcut";

export const fullKeyboard = () => (
  <>
    <p>
      <kbd>`</kbd>
      <kbd>1</kbd>
      <kbd>2</kbd>
      <kbd>3</kbd>
      <kbd>4</kbd>
      <kbd>5</kbd>
      <kbd>6</kbd>
      <kbd>7</kbd>
      <kbd>8</kbd>
      <kbd>9</kbd>
      <kbd>0</kbd>
      <kbd>-</kbd>
      <kbd>=</kbd>
      <kbd>Bkspc</kbd>
    </p>
    <p>
      <kbd>Tab</kbd>
      <kbd>q</kbd>
      <kbd>w</kbd>
      <kbd>e</kbd>
      <kbd>r</kbd>
      <kbd>t</kbd>
      <kbd>y</kbd>
      <kbd>u</kbd>
      <kbd>i</kbd>
      <kbd>o</kbd>
      <kbd>p</kbd>
      <kbd>[</kbd>
      <kbd>]</kbd>
      <kbd>\</kbd>
    </p>
    <p>
      <kbd>Caps</kbd>
      <kbd>a</kbd>
      <kbd>s</kbd>
      <kbd>d</kbd>
      <kbd>f</kbd>
      <kbd>g</kbd>
      <kbd>h</kbd>
      <kbd>j</kbd>
      <kbd>k</kbd>
      <kbd>l</kbd>
      <kbd>;</kbd>
      <kbd>'</kbd>
      <kbd>Enter</kbd>
    </p>
    <p>
      <kbd>Shift</kbd>
      <kbd>z</kbd>
      <kbd>x</kbd>
      <kbd>c</kbd>
      <kbd>v</kbd>
      <kbd>b</kbd>
      <kbd>n</kbd>
      <kbd>m</kbd>
      <kbd>,</kbd>
      <kbd>.</kbd>
      <kbd>/</kbd>
      <kbd>Shift</kbd>
    </p>
  </>
);

fullKeyboard.storyName = "full keyboard";

export const bugTests = () => (
  <>
    <p>
      <kbd>
        <kbd>
          <kbd>
            <kbd>
              <kbd>
                <kbd>
                  <kbd>
                    <kbd>
                      <kbd>
                        <kbd>
                          <kbd>
                            <kbd>
                              <kbd>
                                <kbd>
                                  <kbd>
                                    <kbd>
                                      <kbd>
                                        <kbd>
                                          <kbd>
                                            <kbd>
                                              <kbd>
                                                <kbd>
                                                  <kbd>
                                                    <kbd>
                                                      <kbd>
                                                        <kbd>
                                                          <kbd>
                                                            <kbd>
                                                              <kbd>
                                                                <kbd>
                                                                  <kbd>
                                                                    <kbd>
                                                                      <kbd>
                                                                        <kbd>
                                                                          <kbd>
                                                                            <kbd>
                                                                              <kbd>
                                                                                <kbd>
                                                                                  <kbd>
                                                                                    <kbd>
                                                                                      <kbd>
                                                                                        <kbd>
                                                                                          <kbd>
                                                                                            <kbd>
                                                                                              <kbd>
                                                                                                <kbd></kbd>
                                                                                              </kbd>
                                                                                            </kbd>
                                                                                          </kbd>
                                                                                        </kbd>
                                                                                      </kbd>
                                                                                    </kbd>
                                                                                  </kbd>
                                                                                </kbd>
                                                                              </kbd>
                                                                            </kbd>
                                                                          </kbd>
                                                                        </kbd>
                                                                      </kbd>
                                                                    </kbd>
                                                                  </kbd>
                                                                </kbd>
                                                              </kbd>
                                                            </kbd>
                                                          </kbd>
                                                        </kbd>
                                                      </kbd>
                                                    </kbd>
                                                  </kbd>
                                                </kbd>
                                              </kbd>
                                            </kbd>
                                          </kbd>
                                        </kbd>
                                      </kbd>
                                    </kbd>
                                  </kbd>
                                </kbd>
                              </kbd>
                            </kbd>
                          </kbd>
                        </kbd>
                      </kbd>
                    </kbd>
                  </kbd>
                </kbd>
              </kbd>
            </kbd>
          </kbd>
        </kbd>
      </kbd>
    </p>
    <p>
      <kbd>
        ***************************************************************************************************************************************************************************************************************************************************************************************************************************
      </kbd>
    </p>
    <p>
      <kbd>
        <img src="https://i.stack.imgur.com/qHeff.jpg" alt="" />
      </kbd>
      <kbd>
        <img src="https://i.stack.imgur.com/qHeff.jpg" alt="" />
      </kbd>
    </p>
    <p>
      <kbd>
        <img src="https://i.stack.imgur.com/qHeff.jpg" alt="" />
        <img src="https://i.stack.imgur.com/qHeff.jpg" alt="" />
      </kbd>
    </p>
  </>
);

bugTests.storyName = "bug tests";
