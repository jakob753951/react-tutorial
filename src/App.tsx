import Alert from "./components/Alert"
import Button from "./components/Button"
import {ButtonType} from "./components/Button"
import ListGroup from "./components/ListGroup"

function App() {
	return <div>
		<Button type={ButtonType.Primary} onclick={() => {console.log("test")}}>
			Demo
		</Button>
	</div>
}

export default App
