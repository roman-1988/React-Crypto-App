import { AppHeader } from "./components/layout/AppHeader"
import { AppSider } from "./components/layout/AppSider"
import { AppContent } from "./components/layout/AppContent"
import { Layout } from "antd"



const App = () => {

  return (
    <>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </>
  )
}

export { App }
