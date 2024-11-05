'use client';

import { useEffect, useState, useCallback } from 'react';
import { Explorer } from "./Explorer";
import { HeroContainer } from "./HeroContainer";
import { RecentListings } from "./RecentListings";
import { RecentAuctions } from './RecentAuctions';
import { Instructions } from './Instructions';
import { Footer } from '../../pagesFooter';
import { useReadContract, useChainId } from 'wagmi';
import { factoryNFTContractABI } from '@/ABIs/factoryNFTContractABI';
import { formatEther } from 'viem';

type EthereumAddress = `0x${string}`;

const contractAddresses: Record<number, EthereumAddress> = {
  5: '0xAEdF68cA921Fe00f09A9b358A613C60B76C88285',  // Sepolia Testnet
  84532: '0x156b0e52cE557A0E489944f46Bd849BBD81345E5', // Base Testnet
  11155420: '0xf802c833FE8864EAF41c512D66B7C56f5B85d710', // OP Testnet
  // Add other network contract addresses here
};

const TEMPORARY_IMAGE_URL = 'https://silver-selective-kite-794.mypinata.cloud/ipfs/QmNQq33D3Y1LhftVkHbVJZziuFLQuNLvFmSExwtEcKXcJx';

export default function MainSection() {
  interface Collection {
    collectionAddress: string;
    name: string;
    symbol: string;
    currentSupply: number;
    maxSupply: number;
    owner: string;
    royaltyPercentage: number;
    mintPrice: number;
    imageUrl: string;
    metadataURI: string;
  }

  const [collections, setCollections] = useState<Collection[]>([]);
  const chainId = useChainId();
  const FACTORY_CONTRACT_ADDRESS = contractAddresses[chainId as keyof typeof contractAddresses];

  const { data: collectionsData } = useReadContract({
    address: FACTORY_CONTRACT_ADDRESS,
    abi: factoryNFTContractABI,
    functionName: 'getAllCollections',
  }) as { data: Collection[] | undefined };

  const fetchMetadata = useCallback(async (metadataCID: string) => {
    try {
      const response = await fetch(`https://silver-selective-kite-794.mypinata.cloud/ipfs/${metadataCID}`);
      if (!response.ok) throw new Error("Failed to fetch metadata");
      const metadata = await response.json();
      console.log('Fetched metadata:', metadata); // Log fetched metadata
      return metadata.image;
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
      return TEMPORARY_IMAGE_URL; // Fallback image
    }
  }, []);

  const updateCollectionImage = useCallback((collectionAddress: string, imageUrl: string) => {
    setCollections(prevCollections =>
      prevCollections.map(c =>
        c.collectionAddress === collectionAddress ? { ...c, imageUrl } : c
      )
    );
  }, []);

  const fetchAndSetCollections = async () => {
    if (collectionsData) {
      const parsedCollections = await Promise.all(collectionsData.map(async (collection: Collection) => {
        return {
          collectionAddress: collection.collectionAddress,
          name: collection.name,
          symbol: collection.symbol,
          currentSupply: collection.currentSupply,
          maxSupply: collection.maxSupply,
          owner: collection.owner,
          imageUrl: TEMPORARY_IMAGE_URL,
          hasFetchedMetadata: false, // Add a flag to check if metadata has been fetched
          mintPrice: parseFloat(formatEther(BigInt(collection.mintPrice))), // Assuming mintPrice is in wei
          royaltyPercentage: parseFloat(collection.royaltyPercentage.toString()),
          metadataURI: collection.metadataURI,
        };
      }));

      setCollections(parsedCollections);

      for (const collection of parsedCollections) {
        // Only fetch if metadata hasn't been fetched yet
        if (!collection.hasFetchedMetadata) {
          try {
            const imageUrl = await fetchMetadata(collection.metadataURI);
            if (imageUrl) {
              updateCollectionImage(collection.collectionAddress, imageUrl);
            }
            // Set the flag to true after fetching
            setCollections(prev =>
              prev.map(c =>
                c.collectionAddress === collection.collectionAddress ? { ...c, hasFetchedMetadata: true } : c
              )
            );
          } catch (error) {
            console.error('Failed to fetch metadata for collection:', collection.collectionAddress, error);
          }
        }
      }
    }
  };

  useEffect(() => {
    fetchAndSetCollections().catch(error => console.error("Failed to fetch collections:", error));
  }, [collectionsData, fetchMetadata, updateCollectionImage]);

  return (
    <main>
      <article>
        <HeroContainer />
        <Explorer collections={collections} />
        <RecentListings />
        <RecentAuctions />
        <Instructions />
        <Footer />
      </article>
    </main>
  );
}