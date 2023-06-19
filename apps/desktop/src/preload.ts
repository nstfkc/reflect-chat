import { contextBridge, ipcRenderer } from "electron";

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(
      `${type}-version`,
      process.versions[type as keyof NodeJS.ProcessVersions]
    );
  }
});

contextBridge.exposeInMainWorld("electronAPI", {
  fetch: (url: any, options: any) => {
    return ipcRenderer.invoke("fetch", { url, options });
  },
});
