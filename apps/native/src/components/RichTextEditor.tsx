import * as React from "react";
import { Feather, Foundation } from "@expo/vector-icons";

import { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { WebView } from "react-native-webview";
import editorHtml21 from "../editor/dist/index.html";
import type {
  EditorState,
  NativeMessage,
  WebViewMessage,
} from "../editor/main";

interface RichTextEditorProps {
  content?: string;
  onSend: (message: string) => void;
}
export const RichTextEditor = (props: RichTextEditorProps) => {
  const { content = "", onSend } = props;
  const [editorState, setEditorState] = useState<EditorState>({
    content: "",
    canBold: false,
    canItalic: false,
    canStrike: false,
    canSinkListItem: false,
    canLiftListItem: false,
    isBulletListActive: false,
    isBoldActive: false,
    isItalicActive: false,
    isStrikeActive: false,
  });

  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    sendMessageToWebView({ kind: "initialContent", payload: content });
  }, [content]);

  function sendMessageToWebView(message: NativeMessage) {
    webViewRef?.current?.postMessage(JSON.stringify(message));
  }

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <View style={styles.actions}>
          <Pressable
            onPress={() =>
              sendMessageToWebView({ kind: "action", payload: "toggleBold" })
            }
            style={[
              styles.actionDefault,
              editorState.isBoldActive
                ? styles.actionActive
                : styles.actionInactive,
            ]}
          >
            <Feather name="bold" style={styles.icon} />
          </Pressable>
          <Pressable
            onPress={() =>
              sendMessageToWebView({ kind: "action", payload: "toggleItalic" })
            }
            style={[
              styles.actionDefault,
              editorState.isItalicActive
                ? styles.actionActive
                : styles.actionInactive,
            ]}
          >
            <Feather name="italic" style={styles.icon} />
          </Pressable>
          <View
            style={{
              borderLeftWidth: 1,
              borderRightWidth: 1,
              paddingHorizontal: 8,
              borderColor: "gray",
            }}
          >
            <Pressable
              onPress={() =>
                sendMessageToWebView({
                  kind: "action",
                  payload: "toggleItalic",
                })
              }
              style={[
                styles.actionDefault,
                editorState.isItalicActive
                  ? styles.actionActive
                  : styles.actionInactive,
              ]}
            >
              <Feather name="link" style={styles.icon} />
            </Pressable>
          </View>
          <Pressable
            onPress={() =>
              sendMessageToWebView({
                kind: "action",
                payload: "toggleListItem",
              })
            }
            style={[
              styles.actionDefault,
              editorState.isBulletListActive
                ? styles.actionActive
                : styles.actionInactive,
            ]}
          >
            <Foundation name="list-bullet" style={styles.icon}></Foundation>
          </Pressable>
          <Pressable
            onPress={() =>
              sendMessageToWebView({ kind: "action", payload: "sinkListItem" })
            }
            style={[
              styles.actionDefault,
              !editorState.canSinkListItem ? styles.actionDisabled : {},
            ]}
          >
            <Foundation name="indent-more" style={styles.icon}></Foundation>
          </Pressable>
          <Pressable
            onPress={() =>
              sendMessageToWebView({ kind: "action", payload: "liftListItem" })
            }
            style={[
              styles.actionDefault,
              !editorState.canLiftListItem ? styles.actionDisabled : {},
            ]}
          >
            <Foundation name="indent-less" style={styles.icon}></Foundation>
          </Pressable>
        </View>

        <View style={{ flex: 1, position: "relative" }}>
          <Pressable
            style={{
              position: "absolute",
              zIndex: 1000,
              right: 8,
              bottom: 0,
              padding: 4,
            }}
            onPress={() => {
              onSend(editorState.content);
              sendMessageToWebView({ kind: "initialContent", payload: "" });
            }}
          >
            <Feather name="send" style={styles.icon} />
          </Pressable>
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: "blue",
              position: "absolute",
            }}
          ></View>
          <TouchableWithoutFeedback
            onPress={() => {
              sendMessageToWebView({ kind: "editor", payload: "focus" });
            }}
          >
            <WebView
              ref={webViewRef}
              style={styles.webview}
              onLoadStart={() => console.log("load started")}
              onLoadEnd={() => console.log("loaded")}
              originWhitelist={["*"]}
              scrollEnabled={false}
              onMessage={(event) => {
                const webViewMessage = JSON.parse(
                  event.nativeEvent.data
                ) as WebViewMessage;

                if (webViewMessage.kind === "editorStateUpdate") {
                  setEditorState(webViewMessage.payload);
                }
                if (webViewMessage.kind === "editorInitialised") {
                  sendMessageToWebView({
                    kind: "initialContent",
                    payload: content,
                  });
                }
              }}
              source={{ html: `${editorHtml21}` }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = {
  ...StyleSheet.create({
    outer: { padding: 8, paddingBottom: 24 },
    container: {
      backgroundColor: "#fff6f6",
      shadowColor: "black",
      shadowOpacity: 0.1,
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowRadius: 2,
      padding: 8,
      borderRadius: 16,
      height: 160,
    },
    actions: { flexDirection: "row", gap: 12, paddingVertical: 4 },
    actionDefault: {
      paddingHorizontal: 4,
      borderRadius: 6,
    },
    actionActive: { backgroundColor: "rgba(0,0,0,0.1)" },
    actionInactive: {},
    actionDisabled: {
      opacity: 0.5,
    },
    webview: {
      flex: 1,
      backgroundColor: "#fff6f6",
    },
    icon: {
      fontSize: 16,
      textShadowColor: "rgba(0,0,0,0.2)",
      textShadowRadius: 3,
      textShadowOffset: {
        height: 2,
        width: 2,
      },
    },
  }),
};
