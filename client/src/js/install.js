const butInstall = document.getElementById("buttonInstall");

// Event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Stores the triggered events
  window.deferredPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

// Implements a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  // Resets the deferred prompt variable, it can only be used once
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clears prompt
  window.deferredPrompt = null;
});
