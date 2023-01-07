export const ACTIONS = {
  ADD_ITEM: "addItem",
  REMOVE_ITEM: "removeItem",
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      let newQuantity = action.payload.amountToAdd;
      let newProductId = action.payload.product.id;
      // check if item already exists in cart
      let checkIndex = state.findIndex((item) => item.id === newProductId);
      // if item doesn't exist, create new item
      if (checkIndex === -1) {
        return [
          ...state,
          {
            id: newProductId,
            quantity: newQuantity,
          },
        ];
      }
      // else, update new quantity value and return new state
      newQuantity += state[checkIndex].quantity;
      return state.map((item) =>
        item.id === newProductId
          ? { id: newProductId, quantity: newQuantity }
          : item
      );
    case ACTIONS.REMOVE_ITEM:
      return state - 1;
    default:
      return state;
  }
}

function newItem(payload) {
  return { id: payload.product.id, quantity: payload.amountToAdd };
}
