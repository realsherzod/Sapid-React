import React from 'react'
import Footer from './layouts/Footer/Footer'
import Main from './Pages/Main/Main'
import Header from './layouts/Header/Header'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>


    <div>
      < Header />
      <Main />
      < Footer />
    </div>

    </QueryClientProvider>
  )
}

export default App