import { UserStatusKind } from "db";

export const userStatuses = [
  {
    label: "Online",
    color: "green",
    kind: "ONLINE" as UserStatusKind,
  },
  {
    label: "Busy",
    color: "red",
    kind: "BUSY" as UserStatusKind,
  },
  {
    label: "Offline",
    color: "gray",
    kind: "OFFLINE" as UserStatusKind,
  },
];
