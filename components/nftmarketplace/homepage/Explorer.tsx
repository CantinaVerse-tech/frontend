import { TiArrowForwardOutline } from "react-icons/ti";
import { IoBagAddOutline } from "react-icons/io5";
import Link from 'next/link';

const TEMPORARY_IMAGE_URL = 'https://silver-selective-kite-794.mypinata.cloud/ipfs/QmNQq33D3Y1LhftVkHbVJZziuFLQuNLvFmSExwtEcKXcJx';

interface Collection {
  collectionAddress: string;
  name: string;
  owner: string;
  mintPrice: number;
  currentSupply: number;
  maxSupply: number;
  imageUrl: string;
}

interface ExplorerProps {
  collections: Collection[];
}

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export function Explorer({ collections }: ExplorerProps) {
  return (
    <section className="section explore" id="explore">
      <div className="container">
        <p className="section-subtitle">Collections</p>

        <div className="title-wrapper">
          <h2 className="h2 section-title">Explore</h2>
          <a href="/explore" className="btn-link">
            <span>Explore All</span>
            <TiArrowForwardOutline aria-hidden="true" />
          </a>
        </div>

        <ul className="grid-list">
          {collections.length > 0 ? (
            collections.map((collection, index) => (
              <li key={`${collection.collectionAddress}-${index}`}>
                <div className="card explore-card">
                  <figure className="card-banner">
                    <Link href={`/marketplace/explore/`} passHref>
                      <div>
                        <img
                          src={collection.imageUrl || TEMPORARY_IMAGE_URL} // Fallback image
                          width="250"
                          height="250"
                          loading="lazy"
                          alt={collection.name}
                          className="img-cover"
                        />
                      </div>
                    </Link>
                  </figure>

                  <h3 className="h3 card-title">
                    <Link href={`/marketplace/explore/`} passHref>
                      <div>{collection.name}</div>
                    </Link>
                  </h3>

                  <span className="card-author">
                    Creator:{" "}
                    <a href={`https://etherscan.io/address/${collection.owner}`} className="author-link">
                      {formatAddress(collection.owner)} {/* Display shortened address */}
                    </a>
                  </span>
                  <span className="card-author">Max Supply: <a className="wrapper-item"> {collection.maxSupply.toString()}</a></span>
                  <data className="card-author">Mint Price: <a className="wrapper-item">
                    {collection.mintPrice.toFixed(2)} ETH </a>
                  </data>

                  <button className="btn">
                    <IoBagAddOutline aria-hidden="true" />
                    <Link href={`/marketplace/explore/`} passHref>
                      <span>Mint</span>
                    </Link>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No collections found. Check back later!</li>
          )}
        </ul>
      </div>
    </section>
  );
}
