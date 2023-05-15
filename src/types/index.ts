export interface AuthStateI {
    isLoggedIn: boolean;
    token: string;
    user: UserI;
  }
  
  export interface UserI {
    id?: number;
    name: string;
    email: string;
    role: string;
  }
  
  export interface ProductI {
    id?: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: CategoryI;
    barcode?: string;
  }
  
  export interface CategoryI {
    id?: number;
    name: string;
    color: string;
  }
  
  export interface CartI {
    id?: number;
    product: ProductI;
    quantity: number;
    price: number;
  }
  
  export interface paymentDetailsI {
    paymentMethod: string;
    amountPaid?: number;
  }
  export interface CustomerI {
    id?: number;
    name: string;
    email: string;
    phone: string;
    address: string;
  }
  
  export interface SaleDetailsI {
    id?: number;
    cart: CartI[];
    paymentDetails: paymentDetailsI;
    invoiceNo: string;
    customer?: CustomerI;
    salesPerson: UserI;
    date: Date | string;
  }
  
  export interface PosStateI {
    products: ProductI[];
    cartItems: CartI[];
    saleDetails: SaleDetailsI;
    OrderQty: number;
  }
  
  export interface RowKeyColumnI<T> {
    position: number;
    column: string;
    key: keyof T;
  }
  