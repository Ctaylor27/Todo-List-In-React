import React, { Component } from 'react';
import classes from './Input.module.css';

class Input extends Component  {
  state = {
    name: '',
    description: '',
    id: 3,
  }
  

  updateName = (event) => {
    let name = event.target.value;
    this.setState({name: name});
  }
  updateDesc = (event) => {
    let desc = event.target.value;
    this.setState({description: desc});
  }
  updateId = () => {
    let id = this.state.id;
    id++;
    this.setState({id: id});
  }
  submit = () => {
    this.updateId();
    return this.props.click(this.state.name, this.state.description, this.state.id)
  }
  clearFields = () => {
    this.setState({name: "", description: ""})
  }
  render() {
    return (
      <div className={classes.form_container}>
        <form>
          <div className={classes.formGroup}>
            <label>Todo Name</label>
            <input 
              onKeyDown={(event) => {
                  if (event.keyCode === 13){
                    this.submit();
                    return this.clearFields();
                  }
                }} 
              type="text" 
              onChange={this.updateName} 
              value={this.state.name} ></input>
          </div>
          <div className={classes.formGroup}>
            <label>Todo Description</label>
            <input 
              type="text"
              onChange={this.updateDesc}
              onKeyDown={(event) => {
                if (event.keyCode === 13){
                  this.submit();
                  return this.clearFields();
                }
              }} 
              value={this.state.description}
              ></input>
          </div>
          <button 
            type="button"
            className={classes.formGroup}
            onClick={ () => {  this.submit() }}
            >Enter</button>
          
        </form>
      </div>
    )
  }
}

export default Input;