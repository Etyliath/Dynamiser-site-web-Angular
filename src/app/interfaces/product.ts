export interface Product {
    id: number;
    title: string;
    shortDSecription: string;
    photos: {photosmall:string,photoLarge:string},
    description: string;
    price: number;
}
