import { useHistory } from "react-router-dom";
import { Route } from "@/router/Route";
import { ChannelList, CreateChannelForm, UserContext } from "shared";
import { Modal, ModalContext, ModalProvider } from "@/components/Modal";
import { useContext } from "react";

const ChannelsSection = () => {
  const { push } = useHistory();
  const { toggle } = useContext(ModalContext);
  return (
    <div>
      <ChannelList
        onChannelClick={(channelId) => push(`/channel/${channelId}`)}
      />
      <button onClick={toggle}>Channel create</button>
    </div>
  );
};

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <Route path="/">
      <div className="bg-red-200 h-full">
        <div>Home </div>
        <div>
          <ModalProvider>
            <ChannelsSection></ChannelsSection>
            <Modal title="Create channel">
              <CreateChannelForm
                onSuccess={console.log}
                userId={user.id}
              ></CreateChannelForm>
            </Modal>
          </ModalProvider>
        </div>
      </div>
    </Route>
  );
};
