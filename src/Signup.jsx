import React from 'react';
import { useState } from "react";


const Signup = ({users, onAdd}) => {
    
  const [user, setUser] = useState({id: '', name: '', surname: '', login: '', password: ''});

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();
    let isExsist = users.find(us => us.login == user.login);
    if(isExsist) {
        setSuccess('')
        return setError('This login has already been used!')
    } 
    if(user.password.length < 6) {
        setSuccess('')
        return setError('Password must be at least 6 characters.');
    }
    if(!user.id.trim() || !user.name.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()) {
        setSuccess('')
        return setError('Please fill all inputs');
    }

    onAdd(user);
    setError('');
    setUser({id: '', name: '', surname: '', login: '', password: ''})
    setSuccess('You have successfuly been registered :)')
  }
  
    return (
    <>
        <h1>Sign Up</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {success && <p style={{color: 'green'}}>{success}</p>}
      <form action=""  onSubmit={handleSumbit}  style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
        <input
          type="text"
          placeholder="id"
          value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="surname"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />
        <input
          type="email"
          placeholder="login"
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Save</button>
      </form>
    </>
  )
}

export default Signup