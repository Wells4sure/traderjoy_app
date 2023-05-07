export interface CategoryI {
  id?: number;
  name: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductI {
  id?: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  category: CategoryI;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartI {
  id?: number;
  product: ProductI;
  quantity: number;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}
