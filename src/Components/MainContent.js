import React, { useState } from 'react'
import product from "../data/product_data"

export default function MainContent() {
  const [data, setData] = useState(product);
  const [searchvalue, setSearchValue] = useState("")

  const filterResult = (proItem) => {
    const result = product.filter((curData) => {
      return curData.Product_name === proItem;
    });
    setData(result);
    console.log(result)
  }
  return (
    <div>
      <div className="main_content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src='./images/logo.png' alt="..." width={70}/>
            <h1 className="navbar-brand" style={{fontSize:"30px"}}>Fitness Shopping Cart</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" id="search" onChange={(e) => { e.preventDefault(); setSearchValue(e.target.value) }} />
                <button className="btn btn-outline-primary" type="submit" onClick={(e) => { e.preventDefault(); filterResult(searchvalue) }}>Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {
        data.map((item) =>
          <div id="ss">
            <div className='Container-fluid max-2' key={item.id}>
              <div className='row  max-2'>
                <div className='col-md-12'>
                  <img src={item.thumb} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.Product_name}</h5>
                    <p className="card-text">Description:{item.description}</p>
                    <p className="card-text">{item.currency}{item.price}</p>
                    <p id="button_buy" className="btn btn-primary">Buy Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
    </div>

  )
}
