export const getVisibleItems = (state) => {
  return getItemsByList(state.content.currentList)(state);
};

export const getItemsByList = (list) => (state) => {
  const items = [];
  const activeIds = state.content.lists[list] ? state.content.lists[list] : [];

  activeIds.forEach((id) => {
    if (state.content.itemsById[id]) {
      items.push(state.content.itemsById[id]);
    }
  });

  return items;
};

export const getItemById = (id) => (state) => {
  return state.content.itemsById[id] ? state.content.itemsById[id] : null;
};
