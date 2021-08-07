import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
 const products = [
                   {name: 'photoShop', price: '$90.90'},
                   {name:'illustrator', price: '$80.80'},
                   {name:'pdf reader', price: '$20.80'},
                  ]
const Friends = ['Omar','kamor','sumon','kawsar','arman','asif']                   

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <h2 style={{backgroundColor: 'red'}}>Learn React js with jhankar mahbub</h2>
        <Counter></Counter>
        <Users></Users>
        
        {
          Friends.map(friend=> <p>{friend}</p>)
        }
       {
        products.map(product => <Product product={product}></Product> )
       }  
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(20);
  const handleIncrease =()=>{
     setCount(count + 1)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
        
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])
  return(
    <div>
      <h2>Dynamic user: {users.length}</h2>
     <ul>
       {
         users.map(user => <li>{user.phone}</li>)
       }
     </ul>
    </div>
  )
}

function Product(props){
  const ProductStyle={
    backgroundColor: 'white',
    
    borderRadius: '5px',
    color: 'black',
    width: '300px',
    height: 'auto',
    margin: '20px'
}
console.log(props);
  return(
    <div style={ProductStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button style={{marginBottom: '20px'}}>Buy now</button>
    </div>
  )
}

export default App;
