import { AppHeader } from "./components/layout/AppHeader"
import { AppSider } from "./components/layout/AppSider"
import { AppContent } from "./components/layout/AppContent"
import { Layout } from "antd"
import { CryptoContextProvider } from "./context/crypto-context"

const App = () => {

  return (
    <>
      <CryptoContextProvider>
        <Layout>
          <AppHeader />
          <Layout>
            <AppSider />
            <AppContent />
          </Layout>
        </Layout>
      </CryptoContextProvider>
    </>
  )
}

export { App }
