import Card from './components/Card';
// import { Routes, Route } from 'react-router-dom';
import ViewModal from './components/ViewModal';
import './index.css';
import Navmenu from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";

function App(){
    const url = 'https://dummyjson.com/products';
    const [data, setData] = useState([0]);
    
        useEffect(()=>{
            fetch( url )
            .then( response => response.json())
            .then( d => setData(d))
            .catch( console.log('Error Occured.'))
        },[]);

  return (
    <>
    <Navmenu/>
    {/*Card Container Starts Here */}
    <h1 className='text-center'>Our Products</h1>
    <div className="container">
      <div className="cardContainer d-flex flex-wrap justify-content-center gap-3">
       {data.products? data.products.map((item, i)=> <Card product={item} key={i}/>) : 'No Data Found'}
      </div>
    </div>
    {/*Card Container End Here */}
    <ViewModal/>
    </>
  )}
export default App;