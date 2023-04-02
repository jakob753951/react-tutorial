import { MouseEvent, useState } from "react"

interface ListGroupProps {
	items: string[]
	heading: string
	onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
	const [selectedIndex, setSelectedIndex] = useState(-1)

	// const handleClick = (event: MouseEvent) => {
	// 	selected_index = event.target
	// }

	return (
		<>
			<h1>{heading}</h1>
			{ items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) =>
					<li
					onClick={() => {
						setSelectedIndex(index)
						onSelectItem(item)
					}}
					className={index === selectedIndex ? "list-group-item active" : "list-group-item"}
					key={item}>{item}</li>
				)}
			</ul>
		</>
	)
}

export default ListGroup