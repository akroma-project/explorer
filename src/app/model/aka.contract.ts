export default class AkaContract {
    id!: number;
    address!: string;
    owner!: string;
    type: 'ERC20' | 'ERC721' | 'ERC1155' = 'ERC20';
}