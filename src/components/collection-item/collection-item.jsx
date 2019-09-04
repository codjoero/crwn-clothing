import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import { addCartItem } from '../../redux/cart/cart.actions';
import './collection-item.scss';

const CollectionItem = ({ item, addCartItemAction }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addCartItemAction(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItemAction: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
