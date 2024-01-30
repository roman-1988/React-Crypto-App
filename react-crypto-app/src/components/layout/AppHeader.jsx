import { useState, useEffect } from "react"
import { useCrypto } from "../../context/crypto-context"
import { Layout, Select, Space, Button, Modal } from "antd"
import { CoinInfoModal } from "../CoinInfoModal"


const headerStyle = {
    width: "100%",
    textAlign: "center",
    height: 60,
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const AppHeader = () => {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [coin, setCoin] = useState(null)
    const { crypto } = useCrypto()

    useEffect(() => {
        const keypress = (event) => {
            if (event.key === "/")
                setSelect((prev) => !prev)
        }
        document.addEventListener("keypress", keypress)

        return () => document.removeEventListener("keypress", keypress)
    }, [])

    const handleSelect = (value) => {
        setCoin(crypto.find((c) => c.id === value))
        setModal(true)
    }

    return (
        <>
            <Layout.Header style={headerStyle}>
                <Select
                    style={{
                        width: 250,
                    }}
                    open={select}
                    onSelect={handleSelect}
                    onClick={() => setSelect((prev) => !prev)}
                    value="press / to open"
                    options={crypto.map((coin) => {
                        return {
                            label: coin.name,
                            value: coin.id,
                            icon: coin.icon
                        }
                    })}
                    optionRender={(option) => (
                        <Space>
                            <img
                                style={{ width: 20 }}
                                src={option.data.icon}
                                alt={option.data.label}
                            />
                            {option.data.label}
                        </Space>
                    )}
                />
                <Button type="primary">Add Asset</Button>
                <Modal
                    open={modal}
                    onCancel={() => setModal(false)}
                    footer={null}>
                    <CoinInfoModal coin={coin} />
                </Modal>
            </Layout.Header>
        </>
    )
}

export { AppHeader }