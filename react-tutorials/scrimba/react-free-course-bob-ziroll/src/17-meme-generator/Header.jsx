import React from 'react'

function Header() {
  return (
    <header style={{ backgroundColor: "bisque", margin: "5% 0%"}}>
      <h2 style={{ textAlign: "center" }}>MEME GENERATOR</h2>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "180px"}} src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="problem?"/>
        <img style={{ width: "180px"}} src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="problem?"/>
        <img style={{ width: "180px"}} src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="problem?"/>
      </div>
    </header>
  )
}

export default Header