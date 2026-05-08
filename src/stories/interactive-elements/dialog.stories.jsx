import React, { useRef, useEffect } from "react";

export default {
  title: "Interactive elements/<dialog>",
  argTypes: {
    open: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const dialog = (args) => (
  <dialog {...args}>
    Example
    <form method="dialog">
      <button>Cancel</button> <button>OK</button>
    </form>
  </dialog>
);

dialog.storyName = "<dialog>";
dialog.args = {
  open: true,
};

const ShowModalTemplate = (args) => {
  const dialogElement = useRef();

  useEffect(() => {
    console.log(args.open);
    if (args.open) {
      dialogElement.current.showModal();
    }
  }, [dialogElement, args.open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dialogElement.current.showModal();
        }}
      >
        Open dialog
      </button>
      <dialog ref={dialogElement}>
        Example
        <form method="dialog">
          <button>Cancel</button> <button>OK</button>
        </form>
      </dialog>
    </>
  );
};

export const showModal = ShowModalTemplate.bind({});

showModal.storyName = "showModal()";

export const showModalOpen = ShowModalTemplate.bind({});

showModalOpen.storyName = "showModal() open";
showModalOpen.args = {
  open: true,
};
