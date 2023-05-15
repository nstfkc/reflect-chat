import { routeParser } from "./routeParser";

describe("routeParser", () => {
  it("hi", async () => {
    const path = ["", "chat", "1234", "asdf"];
    const manifest = {
      "": [],
      chat: ["chatId", "messageId"],
    } as any;
    const expectedResult = [
      { path: "/", url: "/", params: {} },
      { path: "/chat/:chatId", url: "/chat/1234", params: { chatId: "1234" } },

      {
        path: "/chat/:chatId/:messageId",
        url: "/chat/1234/asdf",
        params: { chatId: "1234", messageId: "asdf" },
      },
    ];
    expect(routeParser(path, manifest)).toEqual(expectedResult);
  });
});
