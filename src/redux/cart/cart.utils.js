export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartitem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map(cartItem =>
      cartItem.id === existingCartitem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
