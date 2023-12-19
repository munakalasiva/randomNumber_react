// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerate = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="btn" type="button" onClick={this.onClickGenerate}>
            Generate
          </button>
          <p className="font">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
