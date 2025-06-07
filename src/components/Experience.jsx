export default function Experience({ info, setInfo }) {
	function handleChange(e) {
		const { name, value } = e.target
		setInfo((prev) => ({ ...prev, [name]: value }))
	}
	return (
		<div>
			<h3>Experience</h3>
			<input
				type="text"
				placeholder="company"
				name="company"
				value={info.company}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="position"
				name="position"
				value={info.position}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="from"
				name="from"
				value={info.from}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="until"
				name="until"
				value={info.until}
				onChange={handleChange}
			/>
		</div>
	)
}
