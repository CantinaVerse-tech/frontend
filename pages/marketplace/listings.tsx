'use client';

import { useState, useEffect, useCallback } from 'react';
import { useWriteContract, useReadContract, useAccount, useWaitForTransactionReceipt, useWatchContractEvent, useChainId } from 'wagmi';
import { parseEther } from 'viem';
import { Footer } from '../../components/pagesFooter';
import Header from '@/components/nftmarketplace/homepage/marketplaceHeader';
import { marketPlaceABI } from '../../ABIs/marketPlaceABI';

type EthereumAddress = `0x${string}`;

const contractAddresses: Record<number, EthereumAddress> = {
    5: '0x5FfefD55fbd6920CA1244C486d7F0b5c3ACbdaFe', // Sepolia Testnet
    84532: '0x73b97648a31ed750eb591747cf577D88fEb4b36a', // Base Testnet
    11155420: '0x7c56B05b56b88f723C0F8BbC7f45E922C2Ff1094', // OP Testnet
};

type NFT = {
    tokenId: number;
    imageUrl: string;
    name: string;
    price: string;
    owner: string;
};

export default function MarketplaceListing() {
    const [isListing, setIsListing] = useState(false);
    const [selectedNFT, setSelectedNFT] = useState<string | null>(null); // Assume each NFT has a unique ID or address
    const [price, setPrice] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { address: connectedAddress } = useAccount();
    const chainId = useChainId();
    const { writeContract, data: transactionHash, error: contractError, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash: transactionHash,
    });

    let MARKETPLACE_CONTRACT_ADDRESS = contractAddresses[chainId as keyof typeof contractAddresses] as `0x${string}`;

    const { data: nftListings, isLoading: nftListingsLoading, error: nftListingsError } = useReadContract({
        address: MARKETPLACE_CONTRACT_ADDRESS,
        abi: marketPlaceABI,
        functionName: 'getListedNFTs',
    });

    useEffect(() => {
        if (contractError) {
            setError(`Contract interaction failed: ${contractError.message}`);
            setIsLoading(false);
        }
    }, [contractError]);

    useEffect(() => {
        if (isConfirmed) {
            setIsLoading(false);
            setIsListing(true);
        }
    }, [isConfirmed]);

    const handleListNFT = useCallback(async () => {
        if (!selectedNFT || !price || !connectedAddress) {
            setError('Please select an NFT and enter a price.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            writeContract({
                address: MARKETPLACE_CONTRACT_ADDRESS,
                abi: marketPlaceABI,
                functionName: 'listNFTForSale',
                args: [selectedNFT, parseEther(price)],
            });
        } catch (error) {
            const typedError = error as Error;
            setError(`Error listing NFT: ${typedError.message}`);
            setIsLoading(false);
        }
    }, [selectedNFT, price, writeContract, connectedAddress]);

    const handleNFTSelect = (nftId: string) => {
        setSelectedNFT(nftId);
    };

    return (
        <main className="exploreSection">
            <Header />
            <div className="nft-listing-container">
                <h2>Select an NFT to List</h2>
                <div className="nft-listings">
                    {/* Check if nftListings is an array and handle accordingly */}
                    {nftListings && !nftListingsLoading && !nftListingsError ? (
                        (nftListings as NFT[]).map((nft) => (
                            <div key={nft.tokenId} onClick={() => handleNFTSelect(nft.tokenId.toString())}>
                                <img src={nft.imageUrl} alt={nft.name} />
                                <p>{nft.name}</p>
                                <p>{nft.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>{nftListingsLoading ? 'Loading...' : 'No NFTs available'}</p>
                    )}
                </div>

                {selectedNFT && (
                    <div className="listing-form">
                        <h3>List {selectedNFT} for Sale</h3>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter Price (ETH)"
                        />
                        <button onClick={handleListNFT} disabled={isLoading}>
                            {isLoading ? 'Listing...' : 'List NFT'}
                        </button>
                    </div>
                )}

                {error && <p className="error-message">{error}</p>}
                {isListing && <p>NFT listed successfully!</p>}
            </div>
            <Footer />
        </main>
    );
}