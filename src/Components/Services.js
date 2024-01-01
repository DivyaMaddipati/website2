import React, { Component } from 'react'
import './services.css'

export default class Services extends Component {
  render() {
    return (
      <div>
        <div style={{height:'100px'}}></div>
        <div class="section">
  <div class="row">
    <div class="part">
      {/* <div class="icon">Icon 1</div> */}
      <h3>ARTIFICIAL INTELLIGENCE</h3>
      <p>Artificial Intelligence is a way of making a computer, a computer-controlled robot, or a software thinks intelligently, in the similar manner the intelligent humans think.</p>
    </div>
    <div class="part">
      {/* <div class="icon">Icon 2</div> */}
      <h3>MACHINE LEARNING</h3>
      <p>Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves. Research firms can get more accuracy with less cost using Machine learning development.</p>
    </div>
    <div class="part">
      {/* <div class="icon">Icon 3</div> */}
      <h3>BLOCK CHAIN</h3>
      <p>Blockchain enabled ways to reduce operation cost, delay and improves security and trust. We adopted the technology to apply in the right use cases to add an actual purpose of the blockchain.</p>
    </div>
  </div>
  <div class="row">
  <div class="part">
      {/* <div class="icon" style={{color:'white'}}>Icon 1</div> */}
      <div><h3 style={{color:'white'}}>DATA SCIENCE</h3>
      <p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from data in various forms, both structured and unstructured.</p></div>
    </div>
    <div class="part">
      {/* <div class="icon">Icon 2</div> */}
      <h3>MOBILE FIRST SERVICES</h3>
      <p>All the industries are adopted mobility to improve the usability, security and faster transactions. So every web application should have mobile compatibility to maximize the business scope by adding more customer base.</p>
    </div>
    <div class="part">
      {/* <div class="icon">Icon 3</div> */}
      <h3>HYBRID CLOUD</h3>
      <p>Hybrid cloud enables us to pool the best services from each cloud provider to solve any problem much simpler and efficient. We evaluate and distinguish the services of all cloud provider and choose the best for our use-case.</p>
    </div>
  </div>
</div>

      </div>
    )
  }
}
