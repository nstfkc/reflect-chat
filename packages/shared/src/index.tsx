/* export * from "./types/global"; */

export * from "./components/context/ConfigContext";
export { HttpContext, HttpProvider } from "./components/context/HttpContext";
export type { HTTPHandler } from "./components/context/HttpContext";
export {
  createIconsProvider,
  IconsContext,
} from "./components/context/IconsContext";

export { SignInForm } from "./components/forms";
export { Button } from "./components/lib/Button";
export { Text } from "./components/lib/Text";

export { Box } from "./components/lib/layout";
export { ChannelList } from "./components/ui/ChannelList";
export { TextEditor } from "./components/ui/Chat/TextEditor";
export { FileUploaderProvider } from "./components/ui/Chat/FileUploader";

export * from "./components/context/SocketContext";
export * from "./components/context/MessageContext";
export * from "./components/context/UsersContext";
export {
  UsersTypingContext,
  UsersTypingProvider,
} from "./components/context/UsersTypingContext";
export { RootProvider } from "./components/context/RootProvider";

export { useChatHistory } from "./components/ui/Chat/ChatHistory";
export { ChatMessage } from "./components/ui/Chat/ChatMessage";
export { ProfileButton } from "./components/ui/ProfileButton";
export { PeopleList } from "./components/ui/PeopleList";
export { Organisation } from "./components/ui/Organisation";
export { DMList } from "./components/ui/DMList";
export { TypingUsersList } from "./components/ui/Chat/TypingUsersList";
export { UserProfilePicture } from "./components/ui/UserProfilePicture";
export { UserActions } from "./components/ui/UserActions";

export {
  theme,
  ThemeProvider,
  ThemeContext,
  useTheme,
} from "./components/context/ThemeContext";

export { useQuery } from "./utils/useQuery";
export { useMutation } from "./utils/useMutation";
export { SWRConfig } from "swr";

export {
  AuthProvider,
  SignedIn,
  SignedOut,
  useSignIn,
  useSignUp,
  useSignOut,
  useUser,
  useOrganisation,
  useSwitchOrganisation,
} from "./auth";
export type { SignedInUser } from "./auth";

export { SignInScreen } from "./screens/SignInScreen";
export { OrganisationSelectScreen } from "./screens/OrganisationSelectScreen";

export type { JSONContent } from "@tiptap/react";
