import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react'
import nft from '../contracts/nft'
const rpc = "https://arbitrum-mainnet.infura.io/v3/43b50f70f77542f8ba909a4c9cfb2a94"
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
