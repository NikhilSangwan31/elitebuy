import React from 'react';
import { CardProps } from '../../types/types';
import Button from './Button';

const Card: React.FC<CardProps> = ({ image, title, price, onAddToCart, children }) => {
  return (
    <div className="p-4 border rounded-lg w-full max-w-2xl">
      {image && <img src={image} alt={title} className="h-48 w-full object-cover" />}
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">${price}</p>
      {children}
      {onAddToCart && (
        <Button onClick={onAddToCart} text="Add to Cart" />
      )}
    </div>
  );
};

export default Card;
