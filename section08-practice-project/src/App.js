import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (username, userAge) => {
    setUserList((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.push({
        id: Math.random().toString(),
        name: username,
        age: userAge,
      });
      return updatedUsers;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUser} />
      <UserList items={userList} />
    </>
  );
}

export default App;
