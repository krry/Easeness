import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import ThemeSwitch from './theme-switch'

const Layout = ({preview, children}) => {
  return (
    <>
      <Meta />
      <ThemeSwitch />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
