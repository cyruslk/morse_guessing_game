import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class Receiver extends Component {
  constructor(props, context) {
   super(props, context)
   this.state = {
     volume: 0,
     value: "",
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleOnChange = (value) => {
   this.setState({
     volume: value
   })
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   event.preventDefault();

 }

  render() {
    console.log(this.state.volume);
    console.log(this.state.value);


    let { volume } = this.state




    return (
      <div className="Receiver">

      <CheckboxGroup className="checkboxes" value={['sine']}>
        <Checkbox value="sine"/> sine
        <Checkbox value="square"/> square
        <Checkbox value="sawtooth"/> sawtooth
        <Checkbox value="triangle"/> triangle

      </CheckboxGroup>


        {this.state.volume}
      <Slider
        className="slider"
        step={20}
        tooltip={false}
        value={volume}
        orientation="vertical"
        onChange={this.handleOnChange}
      />

      <form onSubmit={this.handleSubmit} className="form">
       <label>
         Name:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
     {this.state.encoded}
      </div>
    );
  }
}

export default Receiver;
