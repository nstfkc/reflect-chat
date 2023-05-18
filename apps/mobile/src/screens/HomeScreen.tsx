import { useHistory } from "react-router-dom";
import { Route } from "@/router/Route";
import { ChannelList, CreateChannelForm, UserContext, useQuery } from "shared";
import { Modal, ModalContext, ModalProvider } from "@/components/Modal";
import { useContext } from "react";

const ChannelsSection = () => {
  const { user } = useContext(UserContext);
  const { push } = useHistory();
  const { toggle } = useContext(ModalContext);

  return (
    <div>
      <ChannelList
        onChannelClick={(channel) => push(`/channel/${channel.id}`, channel)}
        onAddChannelClick={toggle}
      />

      {/* <Modal title="Create channel">
          <CreateChannelForm
          onSuccess={toggle}
          userId={user.id}
          ></CreateChannelForm>
          </Modal> */}
    </div>
  );
};

export const HomeScreen = () => {
  /* const { data } = useQuery("/channels"); */
  return (
    <Route path="/">
      <div className="h-full bg-gray-200">
        <ModalProvider>
          <ChannelsSection />
        </ModalProvider>
      </div>
    </Route>
  );
};
