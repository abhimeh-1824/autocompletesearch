import React from "react";
import SingleUserList from "./SingleUserList.jsx/SingleUserList";

const UsersList = ({ usersData }) => {
  return (
    <>
      {usersData &&
        usersData.map((item) => <SingleUserList item={item} key={item.id} />)}
    </>
  );
};

export default UsersList;
