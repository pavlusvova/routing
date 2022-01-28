export const TYPES = {
  ADD: "Add",
  REMOVE_ITEM: "RemoveItem",
  SORT_BY_NAME: "SortByName",
  SORT_BY_PRICE: "SortByPrice",
  SELECTED_ITEM: "SelectedItem",
};

export const initialState = {
  shops: [
    {id: 1, name: "a", price: "2", selected: false},
    {id: 2, name: "b", price: "1", selected: false},
    {id: 3, name: "c", price: "5", selected: false},
    {id: 4, name: "d", price: "3", selected: false},
    {id: 5, name: "e", price: "6", selected: false},
    {id: 6, name: "g", price: "4", selected: false},
  ]
}

export default function reducer(state = initialState, action) {
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
      return{
        ...state,
        shops: state.shops.filter((el) => !action.payload.includes(el.id))
      }
    case TYPES.SORT_BY_NAME:
      if (action.payload) {
        return {
          ...state,
          shops: state.shops.sort((a, b) => a.name.localeCompare(b.name)),
        };
      } else {
        return {
          ...state,
          shops: state.shops.sort((a, b) => b.name.localeCompare(a.name)),
        };
      }

    case TYPES.SORT_BY_PRICE:
      if (action.payload) {
        return {
          ...state,
          shops: state.shops.sort((a, b) => a.price - b.price),
        };
      } else {
        return {
          ...state,
          shops: state.shops.sort((a, b) => b.price - a.price),
        };
      }
    case TYPES.SELECTED_ITEM:
      if (
        state.shops.some(
          (shop) => shop.id === action.payload && shop.selected === true
        )
      ) {
        return {
          ...state,
          shops: state.shops.map((shop) =>
            shop.id === action.payload ? { ...shop, selected: false } : shop
          ),
        };
      } else if (state.shops.some((shop) => shop.id === action.payload)) {
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
