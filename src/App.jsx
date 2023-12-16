import React from 'react'
import Footer from './layouts/Footer/Footer'
import Main from './Pages/Main/Main'
import Header from './layouts/Header/Header'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';




function App() {
  const lang = localStorage.getItem("lang") || "uz";
  return (


    <div>
      <TawkMessengerReact
                propertyId="6576aa7907843602b8006012"
                widgetId="1hhbojqp1"/>
      
      < Header />
      <Main />
      < Footer />
    </div>

    
  )
}

export default App