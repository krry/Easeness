import cn from 'classnames'
import React, {Fragment, useEffect, useState} from 'react'

const checkMode = () => {
  let modePref: string
  if (typeof window !== 'undefined') {
    const storedMode = localStorage.getItem('mode')
    // On page load or when changing modes, best to add inline in `head` to avoid FOUC
    if (storedMode === 'dark' || matchMedia('(prefers-color-scheme: dark)').matches) {
      modePref = 'dark'
    } else if (storedMode === 'light' || matchMedia('(prefers-color-scheme: light)').matches) {
      modePref = 'light'
    } else {
      modePref = 'light'
    }
  } else modePref = 'light'
  return modePref
}

const ModeSwitch = () => {
  const modes = ['light', 'dark']
  const [mode, setMode] = useState(checkMode())

  useEffect(() => {
    modes.map((m) => {
      document.documentElement.classList.remove(m)
    })

    document.documentElement.classList.add(mode)
    localStorage.setItem('mode', mode)
  }, [mode])

  const flipMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  const modeBtnCns =
    'opacity-75 hover:opacity-100 transition-opacity duration-500 rounded-full text-4xl m-3 sticky top-2'
  return (
    <Fragment>
      <button
        type="button"
        className={cn(`moonface ${modeBtnCns}`)}
        aria-pressed={mode === 'dark'}
        onClick={flipMode}>
        <span>{mode === 'dark' ? '🌝' : '🌚'}</span>
        <span aria-hidden="true" hidden>{`${mode} mode`}</span>
      </button>
      {/* <button
        type="button"
        className={cn(`moonface ${modeBtnCns}`, { 'active': mode === 'light'})}
        aria-pressed={mode === 'dark'}
        onClick={flipMode}>
        <span>{'🌚'}</span>
        <span aria-hidden="true" hidden>{`${mode} mode`}</span>
      </button> */}
    </Fragment>
  )
}

export default ModeSwitch
