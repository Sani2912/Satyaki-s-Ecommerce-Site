"use client";

import { useState, useEffect } from 'react';
import { fetchProductById } from '../../services/productService';
import { useRouter } from 'next/router';
import { Product } from '../../types/product'; 

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null); 
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function loadProduct() {
      if (id) {
        const data = await fetchProductById(id as string);
        setProduct(data);
      }
    }
    loadProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
