const axios = require('axios');

async function mintNFT(assetUrl, metadata) {
    try {
        const endpoint = 'https://api.opensea.io/api/v1/assets';
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
        const name = 'Avatar_TEST';
        const description = 'Personal infromation avatar tester';

        const payload = {
            token_id: '1',
            asset_contract_address: contractAddress,
            name: name,
            description: description,
            image_url: assetUrl,
            external_url: assetUrl,
            attributes: metadata
        };

        const response = await axios.post(endpoint, payload);
        console.log('NFT minted successfully:', response.data);
    } catch (error) {
        console.error('Error minting NFT:', error.response.data);
    }
}

// Example usage
const assetUrl = 'https://example.com/your_asset.gltf ';
const metadata = [{ trait_type: 'Color', value: 'Red' }, { trait_type: 'Size', value: 'Large' }];
mintNFT(assetUrl, metadata);
