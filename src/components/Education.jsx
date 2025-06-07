export default function Education({ info, setInfo }) {
	function handleChange(e) {
		const { name, value } = e.target
		setInfo((prev) => ({ ...prev, [name]: value }))
	}
	return (
		<div>
			<h3>Education</h3>
			<input
				type="text"
				placeholder="school"
				name="school"
				value={info.school}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="title"
				name="title"
				value={info.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="date"
				name="date"
				value={info.date}
				onChange={handleChange}
			/>
		</div>
	)
}
