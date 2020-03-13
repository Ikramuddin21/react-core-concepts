import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Sakib', 'Jafor', 'Alomgir', 'Rajjak', 'Shuvo', 'Anowar']
const products = [
  {name: 'Photoshop', price:'$90.99'},
  {name: 'Illustrator', price:'$60.45'},
  {name: 'PDF Reader', price:'$6.64'},
  {name: 'Premiere El', price:'$243.64'}
]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <p>Amar kaj hocche application bananu</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
          <li>{nayoks[4]}</li>
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
 </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count + 1)}>Submit</button>
      <button onMouseMove={ () => setCount(count-1)}>Decrease</button>
      <button onMouseMove={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style= {productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>

  )
}
export default App;
