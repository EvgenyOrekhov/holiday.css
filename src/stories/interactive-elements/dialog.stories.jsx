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

export const dialog = {
  render: (args) => (
    <dialog {...args}>
      Example
      <form method="dialog">
        <button>Cancel</button> <button>OK</button>
      </form>
    </dialog>
  ),

  name: "<dialog>",

  args: {
    open: true,
  },
};

const ShowModalTemplate = (args) => {
  const dialogElement = useRef();

  useEffect(() => {
    console.log(args.open);
    if (args.open) {
      dialogElement.current?.showModal();
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

export const showModal = {
  render: ShowModalTemplate,
  name: "showModal()",
};

export const showModalOpen = {
  render: ShowModalTemplate,
  name: "showModal() open",

  args: {
    open: true,
  },
};
