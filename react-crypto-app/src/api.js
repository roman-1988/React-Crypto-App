import { cryptoAssets, cryptoData } from "./data"

const fakefetchCrypto = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2000)
    })
}

const fetchAssets = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 2000)
    })
}