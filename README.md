# POC WebExtensions storage.local Weirdness

Reproduction steps:
  - install this add-on in Google Chrome
  - open the background developer tools console
  - navigate to `mozilla.com`
    - refresh page repeatedly
    - call `clearData()` in developer console
    - refresh page more
  - observe contents of storage lag one `chrome.storage.local.set()` behind

An example log is available [here](https://github.com/Djent-/POC-WebExtensions-storage.local-Weirdness/blob/master/proof%20of%20concept%20weirdness.log).
