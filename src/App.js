import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="main">
            <Header />
            <About />
            <Footer />
        </div>
    )
}