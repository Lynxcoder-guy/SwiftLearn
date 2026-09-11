import { Link } from "react-router-dom"

export default function ReviewBlurt() {
    return (
        <main>
            <h1>Review your blurting</h1>
            <p>Compare your recall with your notes and identify the topics to revisit.</p>
            <Link to="/scopecontents">Choose another topic</Link>
        </main>
    )
}