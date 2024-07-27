export interface Review {
    metaDataUri: string;
    category: string;
    domainAddress: string;
    siteUrl: string;
    siteType: string;
    siteTag: string;
    siteSafety: string;
    siteIpfsHash: string;
    siteRating: number;
    transactionHash: string;
    transactionVersion: number;
    createdAt: string;
    voter: string;
    name: string;
}

export interface ReviewStats {
    totalReviews: Review[];
    totalCount: number;
}


// Example types definition for the VPN nodes
export interface VpnNode {
  id: string;
  name: string;
  httpPort: string;
  domain: string;
  nodename: string;
  chainName: string;
  address: string;
  region: string;
  status: string;
  downloadSpeed: number;
  uploadSpeed: number;
  startTimeStamp: number;
  lastPingedTimeStamp: number;
  walletAddress: string;
  walletAddressSol: string;
  ipinfoip: string;
  ipinfocity: string;
  ipinfocountry: string;
  ipinfolocation: string;
  ipinfoorg: string;
  ipinfopostal: string;
  ipinfotimezone: string;
}
  
  // Example type for the API response
  export interface VpnNodesResponse {
    nodes: VpnNode[];
  }