import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart;

// Memoized selectors
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartCounter = createSelector(
  [selectCart],
  cart => cart.cartCounter
);

export const selectTotalPrice = createSelector(
  [selectCart],
  cart => cart.totalPrice
);

export const selectextraCost = createSelector(
  [selectCart],
  cart => cart.extraCost
);

export const selectTaxes = createSelector(
  [selectCart],
  cart => cart.taxes
);

export const selectGrandTotal = createSelector(
  [selectCart],
  cart => cart.grandTotal
);