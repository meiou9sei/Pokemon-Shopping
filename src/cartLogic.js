export const ACTIONS = {
  ADD_ITEM: "addItem",
  REMOVE_ITEM: "removeItem",
};

export default function reducer(state, action) {
  let newProductId = action.payload.product.id;
  let newProductName = action.payload.product.name;
  let newProductImage = action.payload.product.image;
  let newProductPrice = action.payload.product.price;
  let newQuantity = action.payload.amountToAdd;
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      // check if item already exists in cart
      let checkIndex = state.findIndex((item) => item.id === newProductId);
      // if item doesn't exist, create new item
      if (checkIndex === -1) {
        return [
          ...state,
          {
            id: newProductId,
            name: newProductName,
            image: newProductImage,
            price: newProductPrice,
            quantity: newQuantity,
          },
        ];
      }
      // else, update new quantity value and return new state
      newQuantity += state[checkIndex].quantity;
      return state.map((item) =>
        item.id === newProductId
          ? {
              id: newProductId,
              name: newProductName,
              image: newProductImage,
              price: newProductPrice,
              quantity: newQuantity,
            }
          : item
      );
    case ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== newProductId);
    default:
      return state;
  }
}

function newItem(payload) {
  return { id: payload.product.id, quantity: payload.amountToAdd };
}
