chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const youtube = "https://www.youtube.com/shorts/";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(youtube)) {
    // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === "ON" ? "OFF" : "ON";

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON") {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          // document.body.style.backgroundColor = 'red';
          document
            .querySelectorAll(".overlay.ytd-reel-video-renderer")
            .forEach((el) => {
              el.style.opacity = "0";
            });
        },
      });
    } else if (nextState === "OFF") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          // document.body.style.backgroundColor = 'red';
          document
            .querySelectorAll(".overlay.ytd-reel-video-renderer")
            .forEach((el) => {
              el.style.opacity = "1";
            });
        },
      });
    }
  }
});
