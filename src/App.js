import React, { useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Colors from './Colors'
import ColorPage from './ColorPage'
import './App.css';

export default function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  const [formData, setFormData] = useState({newColor: ''})
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/colors/:color'>
          <ColorPage colors={colors} />
        </Route>
        <Route exact path='/colors'>
          <Colors colors={colors} />
        </Route>
        <Redirect to='/colors'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

