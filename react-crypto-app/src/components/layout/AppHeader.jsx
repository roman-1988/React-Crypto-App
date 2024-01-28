import { useState } from "react"
import { useCrypto } from "../../context/crypto-context";
import { Layout, Select, Space, Button } from "antd"
import { useEffect } from "react";

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
        console.log(value)
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
            </Layout.Header>
        </>
    )
}

export { AppHeader }