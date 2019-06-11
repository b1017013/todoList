import React, { Component } from 'react';
import './form.css';


export default class Form extends Component {

    render() {
      return (
        <div className="form">
          <form name="todoform" onSubmit={this.props.onSubmit}>
            <input name="title" type="text" placeholder="Title" defaultValue="todoアプリ" /><br/>
            <textarea name="desc" placeholder="description" defaultValue="Reactでtodoアプリ作る"></textarea><br/>
            <button type="submit">Enter</button>
          </form>
        </div>
      );
    }
  }
  
  