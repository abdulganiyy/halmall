export interface Product {
  _id: string;
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: any;
  stock?: number;
}

//    discountPercentage: number
//    rating: number
//    stock: number
//    brand: string
//    category: string
//    thumbnail: string
