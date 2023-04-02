import Alert from "./components/Alert"
import ListGroup from "./components/ListGroup"

function App() {
	const handleSelectItem = (item: string) => {
		console.log(item)
	}

	return <div>
		<Alert/>
	</div>
}

export default App
