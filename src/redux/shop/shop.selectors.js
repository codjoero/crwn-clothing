import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => (collections ? Object.values(collections) : [])
);

export const selectCollection = collectionUrlparam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlparam] : null)
  );
