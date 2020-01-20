import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemById } from '../store/content/selectors';
import firebaseClient from '../api/firebase-client';
import { ITEM_FETCHED } from '../store/content/actions';

const useItemContent = (id, onErrorCallback) => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const cachedItem = useSelector(getItemById(id));

  useEffect(() => {
    if (!cachedItem) {
      firebaseClient.child(`/item/${id}`).once('value', (snapshot) => {
        const itemContent = snapshot.val();

        if (!itemContent && typeof onErrorCallback === 'function') {
          onErrorCallback();
        }

        if (itemContent) {
          setContent(itemContent);
          setLoading(false);

          dispatch({
            type: ITEM_FETCHED,
            id,
            item: itemContent
          });
        }
      });
    } else if (!content) {
      setContent(cachedItem);
      setLoading(false);
    }
  }, [id, cachedItem]);

  return [content, isLoading];
};

export default useItemContent;
