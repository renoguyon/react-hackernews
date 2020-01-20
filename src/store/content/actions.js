import firebaseClient from '../../api/firebase-client';

export const SET_CURRENT_LIST = 'SET_CURRENT_LIST';
export const SET_LIST_IDS = 'SET_LIST_IDS';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const ITEM_FETCHED = 'ITEM_FETCHED';

const fetchItems = (ids, storedItems) => {
  return Promise.all(ids.map(id => fetchItem(id, storedItems)));
};

const fetchItem = (id, storedItems) => {
  if (storedItems && storedItems[id]) {
    return Promise.resolve(storedItems[id]);
  }

  return new Promise((resolve, reject) => {
    firebaseClient.child(`/item/${id}`).once('value', (snapshot) => {
      resolve(snapshot.val());
    }, reject);
  });
};

const toIndexedObject = (collection, key = 'id') => {
  const object = {};

  if (Array.isArray(collection)) {
    collection.forEach((item) => {
      const index = item[key];
      object[index] = item;
    });
  }

  return object;
};

export function setListContent(name, ids, limit = 10) {
  return async (dispatch, getState) => {
    const selectedIds = Array.isArray(ids) ? ids.slice(0, limit) : [];
    const state = getState();

    const fetchedItems = await fetchItems(selectedIds, state.content.itemsById);

    dispatch({
      type: SET_LIST_IDS,
      list: name,
      ids: selectedIds
    });

    dispatch({
      type: ITEMS_FETCHED,
      items: toIndexedObject(fetchedItems)
    });
  };
}
