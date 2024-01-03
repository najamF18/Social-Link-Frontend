import React from 'react';
import { useSelector } from 'react-redux';
const MainContent = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <main className="col-xs-12 col-sm-9 col-md-10 p-4">
      <h2>Welcome {user.fname} {user.lname}</h2>
     
    </main>
  );
};

export default MainContent;
