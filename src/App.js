import React, { useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Colors from './Colors'
import './App.css';

export default function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  const [formData, setFormData] = useState({newColor: ''})
  
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/colors/:name'>
          
        </Route> */}
        <Route exact path='/colors'>
          <Colors colors={colors} />
        </Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

