import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div> 
        {/* //Replace this Div with your Routes */}
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:id" component={Movie} />

      </div>
    </div>
  );
};



export default App;
