import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
        <div>
            <div style={{height:'150px'}}></div>
            <div className='cards'>
        <div class="card">
        <div class="front">
          <h2>
START-UP SPEED
</h2>
        </div>
        <div class="back">
          <div class="content">
            <p>Since you're learning as you go, you don't need to worry about sticking to a plan. And if something unexpected pops up, you can continue to move forward instead of going back to the drawing board.</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="front">
          <h2>ENTERPRISE QUALITY</h2>
        </div>
        <div class="back">
          <div class="content">
            <p>Our team itself defines enterprise metrics as we are the tiny group of intelligent engineers with exceptional and diversified skills, we pool the right technologies to solve the right problem in a smart way.</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="front">
          <h2>LOW COST</h2>
        </div>
        <div class="back">
          <div class="content">
            <p>A small group of diversified expert engineers can smartly solve a complex problem rather an army of the same skilled engineers. We call this as Experts as a Service.</p>
          </div>
        </div>
      </div>
      </div>
     {/* <div class="card">
        <div class="front">
          <h2>GREAT SATISFACTION</h2>
        </div>
        <div class="back">
          <div class="content">
            <p>As we build zero maintenance systems with cloud-native design, hence it adds the smile to every actor of the system.</p>
          </div>
        </div>
      </div>  */}
      </div>
      
    )
  }
}
