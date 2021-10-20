import React, { useState } from 'react';

export const MyAccountController = () => {
  const [notificationsClicked, setNotificationsClicked] = useState(false);

  return {
    notificationsClicked,
    setNotificationsClicked,
  };
};
