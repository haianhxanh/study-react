import React, {Component} from 'React'

// http://swapi.co/ (old)
// http://swapi.dev/

class APIApp extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    // test link http://swapi.dev/api/people/4/
    fetch('http://swapi.dev/api/people/15/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        character: data
      })
    })
  }

  render() {
    const text = this.state.loading ? 'loading...' : this.state.character.name
    return (
      <div>
        <div><h1>12a. API fetching</h1></div>
        <p>{text}</p>
      </div>
    )
  }
}

export default APIApp