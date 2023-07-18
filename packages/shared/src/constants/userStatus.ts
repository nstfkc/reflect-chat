import { UserStatus } from "../types/global";

export const userStatuses = [
  {
    label: "Online",
    color: "green",
    kind: "online" as UserStatus,
  },
  {
    label: "Busy",
    color: "red",
    kind: "busy" as UserStatus,
  },
  {
    label: "Offline",
    color: "gray",
    kind: "offline" as UserStatus,
  },
];
