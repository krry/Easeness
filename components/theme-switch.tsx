import React, {Fragment, useEffect, useState} from 'react'

let fresh = true

const checkDarkMode = () => {
  const userPrefDark = matchMedia && matchMedia('(prefers-color-scheme: dark)').matches
  const storedPrefDark = window.localStorage && localStorage.getItem('mode') === 'dark'
  return userPrefDark || storedPrefDark
}

const watchDarkMode = () => {
  if (!window.matchMedia) return
  const darkMediaQuery = matchMedia('(prefers-color-scheme: dark)')
  darkMediaQuery.addEventListener('change', applyDarkMode)
}

const applyDarkMode = (_, darkMode?: boolean) => {
  const prevDark = checkDarkMode && fresh
  if (prevDark || darkMode) {
    window.localStorage.setItem('mode', 'dark')
    document.documentElement.classList.add('mode-dark')
  } else {
    window.localStorage.setItem('mode', 'light')
    document.documentElement.classList.remove('mode-dark')
  }
}

const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false)
  const flipMode = () => {
    fresh = false
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setDarkMode(checkDarkMode())
    watchDarkMode()
  }, [])

  useEffect(() => {
    applyDarkMode(null, darkMode)
  }, [darkMode])

  return (
    <Fragment>
      <button
        type="button"
        className="sticky m-3 text-4xl rounded-full outline-none bg-none focus:outline-none hover:opacity-100 top-2 right-2 moonface dark:moonshine dark:shimmer"
        aria-pressed={darkMode ? 'true' : 'false'}
        onClick={flipMode}>
        <span>{darkMode ? '🌝' : '🌚'}</span>
        <span aria-hidden="true" hidden>
          {darkMode ? 'dark mode' : 'light mode'}
        </span>
      </button>
    </Fragment>
  )
}

export default ModeSwitch
