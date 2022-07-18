const restrictedURLs = [
  'chrome://extensions/',
  'https://chrome.google.com/webstore/',
  'chrome-extension://',
]

const isRestricted = (url: string): boolean =>
  restrictedURLs.some((restrictedURL) => url.startsWith(restrictedURL))

const readLocalStorage = async (key: string) => {
  return new Promise((resolve, _reject) => {
    chrome.storage.local.get([key], (result) => {
      resolve(result[key])
    })
  })
}

const openLicensePage = () => {
  chrome.tabs.create({
    url: 'license.html',
  })
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    openLicensePage()
  }
})

chrome.action.onClicked.addListener(async function () {
  const license = await readLocalStorage('paid_license')

  if (!license) {
    openLicensePage()
    return
  }

  chrome.tabs.create({ url: 'popup.html' })
})

chrome.runtime.onMessage.addListener(
  (license: { type: string; input: string }) => {
    if (license.type === 'check-license') {
      const val = license.input.toLowerCase()
      if (val === 'mementomori') {
        chrome.storage.local.set({ paid_license: true })
        chrome.tabs.update({ url: 'popup.html' })
      }
    }
  }
)
