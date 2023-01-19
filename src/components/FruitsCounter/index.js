import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  clickMango = () => {
    const {key1} = this.state
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  clickBanana = () => {
    const {key2} = this.state
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="container">
        <h1 className="header">
          Bob ate <span>{key1}</span> mangoes <span>{key2}</span> bananas
        </h1>
        <div className="img-container">
          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="images"
            />
            <button className="button" type="button" onClick={this.clickMango}>
              Eat Mango
            </button>
          </div>
          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="images"
            />
            <button className="button" type="button" onClick={this.clickBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
