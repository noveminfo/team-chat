"use client";

import { useIsMounted } from "usehooks-ts";
import { CreateServerModal } from "../modals/create-server-modal";
import { InviteModal } from "../modals/invite-modal";
import { MembersModal } from "../modals/members-modal";
import { EditServerModal } from "../modals/edit-server-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";
import { DeleteChannelModal } from "../modals/delete-channel-modal";
import { EditChannelModal } from "../modals/edit-channel-modal";
import MessageFileModal from "../modals/message-file-modal";

export const ModalProvider = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  );
};
