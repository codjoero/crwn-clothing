import React from 'react';
import {
  CartItemContainer,
  ItemDetailsContianer,
  CartItemImage,
  NameContainer
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContianer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContianer>
  </CartItemContainer>
);

export default CartItem;
