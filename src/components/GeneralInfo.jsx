export default function GeneralInfo({ info, setInfo }) {
	function handleChange(e) {
		const { name, value } = e.target
		setInfo((prev) => ({ ...prev, [name]: value }))
	}
	return (
		<div>
			<h3>General information</h3>
			<input
				type="text"
				placeholder="name"
				name="name"
				value={info.name}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="email"
				name="email"
				value={info.email}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="phone"
				name="phone"
				value={info.phone}
				onChange={handleChange}
			/>
		</div>
	)
}
