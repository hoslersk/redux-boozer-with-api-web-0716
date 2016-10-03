import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';
import CocktailsNew from './cocktails_new'

export default (props) => {
    return (
      <div>
        <NavBar title="Boozr" url="/" />
        <div className='container'>
          <Link to='/cocktails'>See All Cocktails</Link>
          <br></br>
          <Link to='/cocktails/new'>Add Cocktail</Link>
          { props.children }
        </div>
      </div>
    )
};
