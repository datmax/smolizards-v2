import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react'
import nft from '../contracts/nft'
const rpc = "https://optimism-mainnet.infura.io/v3/9ed182e6c7b44c5fa80bd8c3b3779a6f"
export default function useNft() {
  const getMinted = async () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(rpc)
    const contract = new ethers.Contract(nft.address, nft.abi, provider)
    const minted = await contract.mintedNFTs()
    return minted
  }

  const isOnline = async () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(rpc)
    const contract = new ethers.Contract(nft.address, nft.abi, provider)
    const paused = await contract.paused()
    return !paused
  }

  return { isOnline, getMinted }
}
