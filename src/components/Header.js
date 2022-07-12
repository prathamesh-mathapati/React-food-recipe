import React from "react";
import './../App.css'

const Header = (props) => {
  const { search, onInputChange,onSearchClick } = props
  return (
    <div className="hiding">
      <h1 className="display-1">
        <img className="food-icon img-fluid" src="./fast-food-svgrepo-com.svg" alt="" />Food Recipe</h1>

      <div className="input-group w-50 m-auto">
        <input type="text" className="form-control" placeholder="Search recipe..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} onChange={onInputChange} />
        <button className="btn  btn-dark" onClick={onSearchClick} id="basic-addon2">Search Recipe</button>
      </div>

    </div>
  )
}

export default Header;