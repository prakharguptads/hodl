import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
let Sun, Moon;



export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div >
      <div class="custom-control custom-switch">
            <input type="checkbox" onClick={toggleTheme} class="custom-control-input" id="darkSwitch"/>
            <label class="custom-control-label" for="darkSwitch"></label>
          </div>
      
      
    </div>
  )
}