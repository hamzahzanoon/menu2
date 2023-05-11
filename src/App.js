import React , { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Navbars from "../src/components/Navbar/Navbar";
import Header from "../src/components/Header/Header";
import Categry from "../src/components/Categry/Categry";
import GridExample from "../src/components/Card/Card";
import {item} from "./data";


function App() {

  const [itemData , setItemdata] = useState(item)

  //filter by categry uniqe
  const allCatgery = ["الكل",...new Set(item.map((item) => item.catgry))]

  //filter by catgery
  const filterByCatgery = (food) => {
    if(food === "الكل") {
      setItemdata(item)
    }else {
      const newArr = item.filter((item) => item.catgry === food)
      setItemdata(newArr)
    }
  }

  //filter by search from
  const filterSearch = (word) => {
    if(word !== "") {
      const newArr = item.filter((item) => item.title === word)
      setItemdata(newArr)
    }
  } 


  return (
    <div className='color-body font'>
     <Navbars filterSearch={filterSearch}/>
      <Container>
       <Header />
       <Categry filterByCatgery={filterByCatgery} allCatgery={allCatgery}/>
       <GridExample itemData={itemData}/>
      </Container>
    </div>
  );
}

export default App;
