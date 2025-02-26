import React, { createContext, useContext, useState } from "react";

// Ürünler için bir tür (TypeScript)
interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

// Context'in türünü tanımla
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

// Başlangıç değeri boş bir liste olacak
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider bileşeni
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Ürün ekleme fonksiyonu
  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook: Veriyi kolayca çekmek için
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct, ProductProvider içinde kullanılmalı");
  }
  return context;
};
