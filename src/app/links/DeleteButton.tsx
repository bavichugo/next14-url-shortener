"use client";

import CloseButton from "@/components/CloseButton";
import WhiteCard from "@/components/WhiteCard";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

interface IDeleteButton {
  shortUrl: string;
}

const DeleteButton: React.FC<IDeleteButton> = ({ shortUrl }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const onDeleteHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`/${shortUrl}`, {
        method: "DELETE",
      });

    } catch (err) {
      console.log();
    }
  };

  useEffect(() => {
    if (showModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  return (
    <>
      <CloseButton
        onClick={() => {
          setShowModal(true);
        }}
      />
      {showModal && (
        <dialog className="max-w-sm w-full" ref={modalRef}>
          <WhiteCard className="flex flex-col">
            <form onSubmit={onDeleteHandler}>
              <span className="font-bold">
                Are you sure to delete this URL?
              </span>
              <span className="">If you delete you cannot recover it</span>
              <span className="m-auto my-4 font-bold">{shortUrl}</span>
              <div className="flex ml-auto gap-2">
                <Button
                  className="border hover:bg-black/10 rounded px-2 py-1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button color="orange" type="submit">
                  Delete
                </Button>
              </div>
            </form>
          </WhiteCard>
        </dialog>
      )}
    </>
  );
};

export default DeleteButton;
