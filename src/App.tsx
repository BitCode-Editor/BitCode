import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() 
{
  return (
    <div className="App">
        <div id="container">
          <div id="fileContainer">
            <button type="button" id="buttonAdd" onClick={() => loadFile()}>Add</button>
            <div id="lineCotainer">
              <div id="line">

              </div>
              <div id="codeline">
                
              </div>
            </div>
          </div>
          <div id="fileShow">
            <div id="file">
              <h4>Select File</h4>
            </div>
          </div>
          <div id="codeContainer">
            <textarea id="typeArea" name="typeArea">
            
            </textarea>
          </div>
        </div>
    </div>
  );
}

function loadFile() {
  var input = document.createElement('input');
  input.type = 'file';
  
  var textarea = document.querySelector('typeArea') 

  input.click();
}

export default App;
