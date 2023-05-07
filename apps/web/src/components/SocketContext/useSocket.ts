import { useContext, useEffect, useRef } from "react";
import { SocketContext, ListenEvents } from "./SocketContext";

export function useSocket<T extends keyof ListenEvents>(
  event?: T,
  listener?: ListenEvents[T]
) {
  const { connected, socket, user } = useContext(SocketContext);
  const listenerRegistered = useRef(false);

  useEffect(() => {
    if (event && listener) {
      if (connected && !listenerRegistered.current) {
        listenerRegistered.current = true;
        socket?.on(event, listener as any);
      }
    }
  }, [socket, connected, event, listener]);

  return { socket, user };
}
