import React, { Component } from 'react';
import './todo.css';

export default class from extends Component {

    render() {
      const link = this.props.done? 'Back' : 'Done！';
      const className = this.props.done? 'done' : 'undone';
      const todoDelete = this.props.done? 'Remove' : '';
      return(
          
        <li className={className}>
          <span>{this.props.countTodo}</span>
          <span>：{this.props.title}　　</span>
          <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>　　
          <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props)}}>{todoDelete}</a><br/>
          <p>{this.props.desc}</p>
        </li>
        
      );
    }
  
  }
