import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import ModeSwitch from './mode-switch'

const Layout = ({preview, children}) => {
  return (
    <>
      <Meta />
      <ModeSwitch />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
