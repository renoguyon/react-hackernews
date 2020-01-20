import { ITEMS_FETCHED, ITEM_FETCHED, SET_CURRENT_LIST, SET_LIST_IDS } from './actions';

const initialState = {
  currentList: 'top',
  lists: {
    top: []
  },
  itemsById: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LIST:
      return {
        ...state,
        currentList: action.name
      };

    case SET_LIST_IDS:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.list]: action.ids
        }
      };

    case ITEMS_FETCHED:
      return {
        ...state,
        itemsById: {
          ...state.itemsById,
          ...action.items
        }
      };

    case ITEM_FETCHED:
      return {
        ...state,
        itemsById: {
          ...state.itemsById,
          [action.id]: action.item
        }
      };

    default:
      return state
  }
};
