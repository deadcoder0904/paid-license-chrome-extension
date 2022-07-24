import React from 'react'

const LicensePage = () => {
  const [input, setInput] = React.useState('')
  const [licenseMsg, setLicenseMsg] = React.useState('')

  React.useEffect(() => {
    chrome.runtime.onMessage.addListener((license: { type: string }) => {
      if (license.type === 'invalid-license') {
        setLicenseMsg('Invalid License...Please try again!')
      } else {
        setLicenseMsg('')
      }
    })
  }, [])

  return (
    <>
      <h1>License</h1>
      <p>
        default password: <b>mementomori</b>
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          chrome.runtime.sendMessage({ type: 'check-license', input })
        }}
      >
        <input
          type="text"
          placeholder="enter password..."
          value={input}
          onChange={(e) => {
            const val = e.target.value
            setInput(val)
          }}
        />
        <button type="submit">Submit License</button>
      </form>
      <span style={{ color: 'red', fontWeight: 'bold', fontSize: 10 }}>
        {licenseMsg}
      </span>
    </>
  )
}
export default LicensePage
