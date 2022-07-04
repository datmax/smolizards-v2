import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Web3Context } from "../context/web3Context";
import { ethers } from "ethers";
import nft from "../contracts/nft";
import Modal from "../components/Modal";
import toast, { Toaster } from "react-hot-toast";
import erc20 from "../contracts/erc20";
const magic = "0x539bde0d7dbd336b79148aa742883198bbf60342";
export default function Mint() {
  const [open, setOpen] = useState(false);
  const { provider, address, network, connect } = useContext(Web3Context);
  const live = true;
  const [minting, setMinting] = useState(false);
  const [approving, setApproving] = useState(false);
  const [approved, setapproved] = useState(false);
  const changeNetwork = async () => {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xA4B1" }],
    });
  };

  useEffect(() => {
    if (address) {
      const contract = new ethers.Contract(magic, erc20, provider);
      contract.allowance(address, nft.address).then((res) => {
        if (res / 1 > 0) {
          setapproved(true);
        } else {
          setapproved(false);
        }
      });
    }
  }, [address]);

  const approve = () => {
    if (address) {
      setApproving(true);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(magic, erc20, signer);
      contract
        .approve(
          nft.address,
          "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        )
        .then((res) => {
          res.wait().then((res) => {
            toast.success("Approve successful.");
            setApproving(false);
            setapproved(true);
          });
        })
        .catch((err) => {
          console.log(err);
          setApproving(false);
        })
        .catch((err) => {
          console.log(err);
          setApproving(false);
        });
    }
  };

  const mint = () => {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nft.address, nft.abi, signer);
    contract
      .mint()
      .then((res) => {
        setMinting(true);
        res
          .wait()
          .then((res) => {
            setMinting(false);
            setOpen(true);
          })
          .catch((err) => {
            toast.error(err.message);
            setMinting(false);
          });
      })
      .catch((err) => {
        console.error(err);
        setMinting(false);
      });
  };

  return (
    <div className="min-h-screen w-full">
      <Toaster></Toaster>
      <Modal open={open} setOpen={setOpen}></Modal>
      <h1 className="text-center text-7xl">Mint</h1>
      <div className=" w-2/3 flex justify-center mx-auto my-10 ">
        <div className="w-full justify-center mx-auto text-center text-white">
          <div className="text-2xl py-2">WL mint(free): ENDED!</div>
          <div className="text-2xl py-2">
            Public mint(20 $MAGIC): LIVE!
          </div>
          <div className="w-2/3 mx-auto border my-8"></div>
          {live && (
            <>
              {!address && (
                <>
                  <div className="text-lg">Connect your wallet to web3.</div>
                  <button
                    className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                    onClick={connect}>
                    Connect
                  </button>
                </>
              )}

              {address && network == 42161 && (
                <>
                  {minting && (
                    <button
                      className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                      onClick={mint}>
                      Minting...
                    </button>
                  )}
                  {!minting && approved && (
                    <button
                      className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                      onClick={mint}>
                      Mint
                    </button>
                  )}
                  {!minting && !approved && !approving && (
                    <button
                      className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                      onClick={approve}>
                      Approve
                    </button>
                  )}
                  {!minting && !approved && approving && (
                    <button
                      className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                      onClick={approve}>
                      Approving...
                    </button>
                  )}
                </>
              )}
              {address && network != 42161 && (
                <button
                  className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                  onClick={changeNetwork}>
                  Change network to Arbitrum
                </button>
              )}
            </>
          )}
          {!live && (
            <div className="text-3xl">
              Mint is not live! Check back in a few minutes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
