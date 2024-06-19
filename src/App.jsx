import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Signup";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice",
      surname: "Smith",
      login: "alice.smith@example.com",
      password: "P@ssw0rd1",
    },
    {
      id: 2,
      name: "Bob",
      surname: "Johnson",
      login: "bob.johnson@example.com",
      password: "Qwerty!2",
    },
    {
      id: 3,
      name: "Charlie",
      surname: "Williams",
      login: "charlie.williams@example.com",
      password: "Charlie#3",
    },
    {
      id: 4,
      name: "David",
      surname: "Brown",
      login: "david.brown@example.com",
      password: "D@v1dBrow",
    },
    {
      id: 5,
      name: "Eve",
      surname: "Jones",
      login: "eve.jones@example.com",
      password: "Eve@1234",
    },
    {
      id: 6,
      name: "Fiona",
      surname: "Garcia",
      login: "fiona.garcia@example.com",
      password: "F!0naGarc",
    },
    {
      id: 7,
      name: "George",
      surname: "Miller",
      login: "george.miller@example.com",
      password: "George!7",
    },
    {
      id: 8,
      name: "Hannah",
      surname: "Davis",
      login: "hannah.davis@example.com",
      password: "Hannah@8",
    },
    {
      id: 9,
      name: "Ivy",
      surname: "Martinez",
      login: "ivy.martinez@example.com",
      password: "IvyM@rt9",
    },
    {
      id: 10,
      name: "Jack",
      surname: "Taylor",
      login: "jack.taylor@example.com",
      password: "J@ckTay10",
    },
  ]);


  const handelAddUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <>
      <Signup users={users} onAdd={handelAddUser} />
    </>
  );
}

export default App;
