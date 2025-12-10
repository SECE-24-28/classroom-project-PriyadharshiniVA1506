import React, { useState } from "react";
import axios from "axios";

const FetchApiComponent = () => {
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  
  const fetchAllData = async () => {
    const [productsRes, todosRes, usersRes] = await Promise.all([
      axios("https://dummyjson.com/products"),
      axios("https://dummyjson.com/todos"),
      axios("https://dummyjson.com/users")
    ]);
    setProducts(productsRes.data.products);
    setTodos(todosRes.data.todos);
    setUsers(usersRes.data.users);
  };
  
  return (
    <div style={{ background: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>API Fetch</h1>
      <button onClick={fetchAllData} style={{ background: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>Fetch Data</button>
      
      <h2 style={{ color: 'black' }}>Products</h2>
      {products.length === 0 ? <p style={{ color: 'black' }}>No products</p> : products.map(item => (
        <div key={item.id} style={{ marginBottom: '10px', padding: '10px' }}><h3 style={{ color: 'black' }}>{item.title}</h3><p style={{ color: 'black' }}>${item.price}</p></div>
      ))}
      
      <h2 style={{ color: 'black' }}>Todos</h2>
      {todos.length === 0 ? <p style={{ color: 'black' }}>No todos</p> : todos.map(item => (
        <div key={item.id} style={{ marginBottom: '10px', padding: '10px' }}><p style={{ color: 'black' }}>{item.todo}</p></div>
      ))}
      
      <h2 style={{ color: 'black' }}>Users</h2>
      {users.length === 0 ? <p style={{ color: 'black' }}>No users</p> : users.map(item => (
        <div key={item.id} style={{ marginBottom: '10px', padding: '10px' }}><h3 style={{ color: 'black' }}>{item.firstName} {item.lastName}</h3><p style={{ color: 'black' }}>{item.email}</p></div>
      ))}
    </div>
  );
};
export default FetchApiComponent;