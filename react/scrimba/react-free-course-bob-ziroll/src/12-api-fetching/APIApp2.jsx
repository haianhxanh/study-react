import React, {Component} from 'React'

class APIApp2 extends Component {
  constructor() {
    super()
    this.state = {                           // way to save data 
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})            // set loading to true in order to display a text while users are waiting

    fetch('https://swapi.dev/api/people/1/')  // URL with data 
      .then(response => response.json())      // turn response into json 
      .then(data => {
        this.setState({                       // saving data 
          loading: false,                     // set loading back to false when data has been fetched
          character: data
        })
      })
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name
    return (
      <div>
        <h1>12b. API fetching</h1>
        {/* displaying received data */}
        {text}           
      </div>
    )
  }
}

export default APIApp2