import React from 'react'

const LicensePage = () => {
  const [input, setInput] = React.useState('')

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
          value={input}
          onChange={(e) => {
            const val = e.target.value
            setInput(val)
          }}
        />
        <button type="submit">Submit License</button>
      </form>
    </>
  )
}
export default LicensePage
