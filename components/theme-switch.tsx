import cn from 'classnames'
import React, {Fragment, useEffect, useRef, useState} from 'react'

const ThemeSwitch = ({preserveRasters = true, storeKey = 'ThemeSwitch'}) => {
  const cssString = `html { background-color: #fafafa; filter: invert(100%); }
        * { background-color: inherit; }
        .glow.moonface { box-shadow: 0 0 50rem 2rem #FFFFBD; }`

  const rasterCss =
    'img:not([src*=".svg"]), video, [style*="url("], .moonface {filter: invert(100%);}'

  const isDeclarationSupported = (property, value) => {
    if (typeof window !== 'undefined') {
      const prop = property + ':',
        el = document.createElement('test'),
        mStyle = el.style
      el.style.cssText = prop + value
      return mStyle[property]
    }
  }

  const supported = useRef(!!isDeclarationSupported('filter', 'invert(100%)'))

  const [css, setCss] = useState(cssString)

  const [active, setActive] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem(storeKey) === 'true' ||
          (!localStorage.getItem(storeKey) && matchMedia('(prefers-color-scheme: dark)').matches)
      : false,
  )

  useEffect(() => {
    if (preserveRasters) {
      setCss(`${cssString} ${rasterCss}`)
    }
    return () => {
      setCss(cssString)
    }
  }, [preserveRasters, cssString])

  useEffect(() => {
    localStorage.setItem(storeKey, `${active}`)
  }, [active, storeKey])

  const toggle = () => {
    setActive((a) => !a)
  }

  return (
    supported.current && (
      <Fragment>
        <button
          type="button"
          className={cn(
            'moonface opacity-75 hover:opacity-100 transition-opacity duration-500 rounded-full text-4xl m-3',
            {
              glow: active,
            },
          )}
          aria-pressed={active}
          onClick={toggle}
          style={{
            lineHeight: '1em',
          }}>
          <span>{active ? '🌝' : '🌚'}</span>
          <span aria-hidden="true" hidden>
            {active ? 'On' : 'Off'}
          </span>
        </button>
        <style media={active ? 'screen' : 'none'}>{active ? css.trim() : css}</style>
      </Fragment>
    )
  )
}

export default ThemeSwitch
