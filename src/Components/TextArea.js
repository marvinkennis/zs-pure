
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';

class TextArea extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <div>
        <textarea class="zs-text-box" rows="4" cols="50">
          Fuck this 
        </textarea>
      </div>
    );
  }
}


export default TextArea;
