import type { Channel, User } from "@prisma/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  People: undefined;
  Chat: { kind: "channel"; channel: Channel } | { kind: "user"; user: User };
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
