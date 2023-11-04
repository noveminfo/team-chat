"use client";

import { useIsMounted } from "usehooks-ts";
import { CreateServerModal } from "../modals/create-server-modal";

export const ModalProvider = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};
