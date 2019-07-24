import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./recipeViewModel.css";
const RecipeViewModel = ({ recipe: { Id, Name, Instructions, Image } }) => {
  return (
    <Fragment>
      <div className="card cardStyle">
        <img src={Image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">{Instructions}</p>
          <a className="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeViewModel;
