export const ACTIONS = {
  ADD_ITEM: "addItem",
  REMOVE_ITEM: "removeItem",
  CLEAR_CART: "clearCart",
};

export default function reducer(state, action) {
  let newQuantity = action.payload.amountToAdd;
  let newCart = state;
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      // check if item already exists in cart
      let checkIndex = state.findIndex(
        (item) => item.id === action.payload.product.id
      );
      // if item doesn't exist, create new item
      if (checkIndex === -1) {
        newCart = [
          ...state,
          {
            id: action.payload.product.id,
            name: action.payload.product.name,
            image: action.payload.product.image,
            price: action.payload.product.price,
            quantity: newQuantity,
          },
        ];
        localStorage.setItem("pokestore.userCart", JSON.stringify(newCart));
        return newCart;
      }
      // else, update new quantity value and return new state
      newQuantity += state[checkIndex].quantity;
      newCart = state.map((item) =>
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
      localStorage.setItem("pokestore.userCart", JSON.stringify(newCart));
      return newCart;
    case ACTIONS.REMOVE_ITEM:
      newCart = state.filter((item) => item.id !== action.payload.product.id);
      localStorage.setItem("pokestore.userCart", JSON.stringify(newCart));
      return newCart;
    case ACTIONS.CLEAR_CART:
      localStorage.removeItem("pokestore.userCart");
      return [];
    default:
      return state;
  }
}

function newItem(payload) {
  return { id: payload.product.id, quantity: payload.amountToAdd };
}
