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

function saveTextAsFile() 
{
  var textToWrite = document.getElementById('typeArea').innerHTML;
  var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
  var fileNameToSaveAs = "ecc.plist";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

var button = document.getElementById('save');
button.addEventListener('click', saveTextAsFile);


function loadFileAndSet() {
  var input = document.createElement('input');
  input.type = 'file';
  
  var textarea = document.querySelector('typeArea') 

  input.click();
}

export default App;
