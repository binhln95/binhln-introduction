import { SideBar } from './components/sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'
import { initializeContext, PageContext } from './context/PageContext'
import { getSectionClass } from './components/typs'
import { Resume } from './components/resume'

function App() {
  const value = initializeContext();
  return (
    <>
      <BrowserRouter>
        <PageContext.Provider value={value}>
          <SideBar />
          <main className="main">
            <section className={getSectionClass(value.currentPage!)}> 
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                  {/* <Route path="/upload-config" element={<UploadConfig />}></Route> */}
              </Routes>
            </section>
          </main>
        </PageContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
