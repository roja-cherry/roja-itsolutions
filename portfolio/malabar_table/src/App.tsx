import './App.css'
import { CTA } from './components/CTA'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { Navbar } from './components/Navbar'
import { SignatureDishes } from './components/SignatureDishes'
import { Story } from './components/Story'
import { VisitUs } from './components/VisitUs'
function App() { return <><Navbar /><main><Hero /><Story /><SignatureDishes /><Experience /><Gallery /><MenuSection /><VisitUs /><CTA /></main><Footer /></> }
export default App
