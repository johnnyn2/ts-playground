export interface Product {
    id?: number,
    title?: string,
    price?: number,
    category?: string,
    description?: string,
    image?: string
}

export interface ProductValidation {
    id?: boolean,
    title?: boolean,
    price?: boolean,
    category?: boolean,
    description?: boolean,
    image?: boolean
}

export type ProductKey = 'id' | 'title' | 'price' | 'category' | 'description' | 'image';

export type RequestType = 'PUT' | 'POST' | 'DELETE';