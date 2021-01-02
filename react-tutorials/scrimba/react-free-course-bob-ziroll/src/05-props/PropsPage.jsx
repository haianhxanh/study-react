import React from "react";
import ContactCard from "./ContactCard.jsx";

function PropsPage() {
  return (
    <div className="contacts">
        <ContactCard 
           // here we are creating object contact
           // Note: since this is Js, we first need to have outer {} to access Js, and inner {} are for object itself, that's why we have two pairs of {}
            contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
        />
        
        <ContactCard 
            contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
        />
        
        <ContactCard
            contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
        />
        
        <ContactCard 
            contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
        />
            
        </div>



    // INSTEAD OF THE BELOW WE CAN CREATE AN OBJECT CONTAINING ALL THE PROPS
    // <div className="contacts">
    //   <ContactCard 
    //     name="Mr. Whiskerson" 
    //     imgUrl="http://placekitten.com/300/200" 
    //     phone="(212) 555-1234" 
    //     email="mr.whiskaz@catnap.meow"
    //   />
      
    //   <ContactCard 
    //     name="Fluffykins" 
    //     imgUrl="http://placekitten.com/400/200" 
    //     phone="(212) 555-2345" 
    //     email="fluff@me.com"
    //   />
      
    //   <ContactCard 
    //     name="Destroyer" 
    //     imgUrl="http://placekitten.com/400/300" 
    //     phone="(212) 555-3456" 
    //     email="ofworlds@yahoo.com"
    //   />
      
    //   <ContactCard 
    //     name="Felix" 
    //     imgUrl="http://placekitten.com/200/100" 
    //     phone="(212) 555-4567" 
    //     email="thecat@hotmail.com"
    //   />
            
    //     </div>
    
    // INSTEAD OF THE BELOW CODE WE ARE CREATING PROPS 


      // <div className="contact-card">
      //     <img src="http://placekitten.com/400/200"/>
      //     <h3>Fluffykins</h3>
      //     <p>Phone: (212) 555-2345</p>
      //     <p>Email: fluff@me.com</p>
      // </div>
    
      // <div className="contact-card">
      //     <img src="http://placekitten.com/400/300"/>
      //     <h3>Destroyer</h3>
      //     <p>Phone: (212) 555-3456</p>
      //     <p>Email: ofworlds@yahoo.com</p>
      // </div>
    
      // <div className="contact-card">
      //     <img src="http://placekitten.com/200/100"/>
      //     <h3>Felix</h3>
      //     <p>Phone: (212) 555-4567</p>
      //     <p>Email: thecat@hotmail.com</p>
      // </div>
  )
}

export default PropsPage;