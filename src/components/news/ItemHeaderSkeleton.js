import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const ItemHeaderSkeleton = () => {
  return (
    <div>
      <Skeleton variant="rect" width="80%" height="24" style={{ marginTop: 30, marginBottom: 20 }} />
      <Skeleton width="50%"/>
    </div>
  );
};

export default ItemHeaderSkeleton;
