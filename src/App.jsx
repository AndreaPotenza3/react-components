import Header from './components/header'
import Card from './components/post/Card/card'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
