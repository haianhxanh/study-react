import React from 'react' 

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      img: "http://i.imgflip.com/1bij.jpg",
      allImgs: []
    }
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data     // assigning all data to a new constant 
      this.setState({allImgs: memes})   // assigning that constant with data to property allImgs, we get back an array 
      console.log(memes)
    })
    // .then(data => {     // this will return an object "data" with all memes
    //   this.setState = {
    //     allImgs: data
    //   }
    //   console.log(data)
    // })
  }

  handleText = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleMeme = (event) => {
    // prevent our page from refreshing after clicking submit button
    event.preventDefault()  
    // get a random index in the array
    const randomNum = Math.floor(Math.random() * this.state.allImgs.length)
    // get the meme url from that index 
    const randomMeme = this.state.allImgs[randomNum].url    // I'm only concerned in URL property
    // set img to the url of the randomMeme
    this.setState({
      img: randomMeme
    })
  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>

        <form onSubmit={this.handleMeme}>
          <input type="text" name="topText" value={this.state.topText} placeholder="top text" onChange={this.handleText}/>

          <input type="text" name="bottomText" value={this.state.bottomText} placeholder="bottom text" onChange={this.handleText}/>

          <button>Gen</button>
        </form>

        <br/><br/>

        <div className="meme">
          <h1 className="top">{this.state.topText}</h1>
            <img style={{ width: "400px" }} src={this.state.img} alt=""/>
          <h1 className="bottom">{this.state.bottomText}</h1>
        </div>

      </div>
    )
  }
}

export default MemeGenerator