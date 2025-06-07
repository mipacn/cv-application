import "./App.css"
import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"
import GenerateCV from "./components/GeneratedCV"

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		email: "",
		phone: "",
	})
	const [education, setEducation] = useState({
		school: "",
		title: "",
		date: "",
	})
	const [experience, setExperience] = useState({
		company: "",
		position: "",
		from: "",
		until: "",
	})
	return (
		<div className="app-container">
			<h1 className="title">CV Application</h1>
			<div className="container">
				<div className="forms">
					<GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
					<Education info={education} setInfo={setEducation} />
					<Experience info={experience} setInfo={setExperience} />
				</div>
				<div className="result">
					<GenerateCV
						generalInfo={generalInfo}
						education={education}
						experience={experience}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
