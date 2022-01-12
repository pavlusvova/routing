export const TYPES = {
  SET_STATE: "SetState",
  ADD: "Add",
  REMOVE_ITEM: "RemoveItem",
  SORT_BY_NAME: "SortByName",
  SORT_BY_PRICE: "SortByPrice",
};

export default function reducer(
  state,
  action
) {
  // debugger;
  console.log(state);
  switch (action.type) {
    case TYPES.SET_STATE:
      return {
        // localStorage.getItem("state")
      };

    case TYPES.ADD:
      return {
        ...state,
        shops: state.shops.concat({
          id: Date.now(),
          name: action.payload.name,
          price: action.payload.price,
        }),
      };

    case TYPES.REMOVE_ITEM:
      return state.shops.filter((el) => !action.payload.includes(el.id));

    case TYPES.SORT_BY_NAME:
      if (action.payload) {
        return [...state.shops].sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return [...state.shops].sort((a, b) => b.name.localeCompare(a.name));
      }

    case TYPES.SORT_BY_PRICE:
      if (action.payload) {
        return [...state.shops].sort((a, b) => a.price - b.price);
      } else {
        return [...state.shops].sort((a, b) => b.price - a.price);
      }
    default:
      return state.shops;
  }
}
