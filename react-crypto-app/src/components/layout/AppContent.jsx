import { Layout, Typography } from "antd"
import SizeContext from "antd/es/config-provider/SizeContext"
import { useCrypto } from "../../context/crypto-context"

const contentStyle = {
    textAlign: "center",
    minHeight: "calc(100vh - 60px)",
    color: "#fff",
    backgroundColor: "#001529",
    padding: "1rem"
}

const AppContent = () => {
    const { assets, crypto } = useCrypto()

    const result = assets.map((asset) => {
        const coin = crypto.find((c) => c.id === asset.id)
        return asset.amount * coin.price
    }).reduce((acc, val) => (acc += val), 0)
        .toFixed(2)

    return (
        <>
            <Layout.Content style={contentStyle}>
                <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
                    Portfolio: {result}$
                </Typography.Title>
            </Layout.Content>
        </>
    )
}

export { AppContent }