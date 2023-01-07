export const ACTIONS = {
  ADD_ITEM: "addItem",
  REMOVE_ITEM: "removeItem",
  CLEAR_CART: "clearCart",
};

export default function reducer(state, action) {
  let newQuantity = action.payload.amountToAdd;
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      // check if item already exists in cart
      let checkIndex = state.findIndex(
        (item) => item.id === action.payload.product.id
      );
      // if item doesn't exist, create new item
      if (checkIndex === -1) {
        return [
          ...state,
          {
            id: action.payload.product.id,
            name: action.payload.product.name,
            image: action.payload.product.image,
            price: action.payload.product.price,
            quantity: newQuantity,
          },
        ];
      }
      // else, update new quantity value and return new state
      newQuantity += state[checkIndex].quantity;
      return state.map((item) =>
        item.id === action.payload.product.id
          ? {
              id: action.payload.product.id,
              name: action.payload.product.name,
              image: action.payload.product.image,
              price: action.payload.product.price,
              quantity: newQuantity,
            }
          : item
      );
    case ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.product.id);
    case ACTIONS.CLEAR_CART:
      return [];
    default:
      return state;
  }
}

function newItem(payload) {
  return { id: payload.product.id, quantity: payload.amountToAdd };
}
