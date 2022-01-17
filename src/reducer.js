export const TYPES = {
  ADD: "Add",
  REMOVE_ITEM: "RemoveItem",
  SORT_BY_NAME: "SortByName",
  SORT_BY_PRICE: "SortByPrice",
  SELECTED_ITEM: "SelectedItem",
};

export default function reducer(state, action) {
  console.log(state);
  // debugger;
  switch (action.type) {
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
    case TYPES.SELECTED_ITEM:
      if (state.shops.some( shop => shop.id === action.payload 
        && shop.selected === true)) {
        return {
          ...state,
          shops: state.shops.map((shop) =>
            shop.id === action.payload ? { ...shop, selected: false } : shop
          ),
        };
      }
      else if (state.shops.some((shop) => shop.id === action.payload)) {
        return {
          ...state,
          shops: state.shops.map((shop) =>
            shop.id === action.payload ? { ...shop, selected: true } : shop
          ),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
