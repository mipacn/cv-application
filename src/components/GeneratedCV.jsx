export default function GenerateCV({ generalInfo, education, experience }) {
	return (
		<div>
			<h3>General Information</h3>
			<p>name: {generalInfo.name} </p>
			<p>email: {generalInfo.email} </p>
			<p>phone: {generalInfo.phone} </p>
			<h3>Education</h3>
			<p>school: {education.school} </p>
			<p>title: {education.title} </p>
			<p>date: {education.date} </p>
			<h3>Experience</h3>
			<p>company: {experience.company} </p>
			<p>position: {experience.position} </p>
			<p>from: {experience.from} </p>
			<p>until: {experience.until} </p>
		</div>
	)
}
