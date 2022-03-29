import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import RatingView from './RatingView';

const RatingContainer = props => {
  const userList = useSelector(store => store.user.userList);
  const finalizeUserList = userList.sort((a, b) =>
    a.score > b.score ? -1 : 1,
  );
  return (
    <RatingView
      /**
       * Options
       */
      userList={finalizeUserList}

      /**
       * Methods
       */
    />
  );
};

export default RatingContainer;
