"use client";

import CloseButton from "@/components/CloseButton";
import WhiteCard from "@/components/WhiteCard";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import SubmitButton from "@/components/SubmitButton";
import deleteUrlAction from "@/actions/deleteUrlAction";

interface IDeleteButton {
  shortUrl: string;
}

const DeleteButton: React.FC<IDeleteButton> = ({ shortUrl }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  // binding so that shortUrl value is passed as a parameter to the deleteUrlAction
  // it is also possible to add a hidden field with the shortUrl as the value,
  // but I decided to follow this approach as a learning opportunity
  const deleteUrlActionWithShortUrl = deleteUrlAction.bind(null, shortUrl);

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
          <WhiteCard>
            <form
              className="flex flex-col"
              action={deleteUrlActionWithShortUrl}
            >
              <span className="font-bold">
                Are you sure to delete this URL?
              </span>
              <span className="">If you delete you cannot recover it</span>
              <span className="m-auto my-4 font-bold">{shortUrl}</span>
              <div className="flex ml-auto gap-2">
                <Button
                  className="border hover:bg-black/10 rounded px-2 py-1"
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <SubmitButton color="orange">Delete</SubmitButton>
              </div>
            </form>
          </WhiteCard>
        </dialog>
      )}
    </>
  );
};

export default DeleteButton;
