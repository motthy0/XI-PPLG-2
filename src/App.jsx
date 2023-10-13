import React, { useEffect } from "react"
import Home from "./Pages/Home"
import Carousel from "./Pages/Gallery"
import FullWidthTabs from "./Pages/Tabs"
import Footer from "./Pages/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<>
			<Home />

			<Carousel />
			<FullWidthTabs />

			<div id="Mesh1"></div>

			<Footer />
		</>
	)
}

export default App
