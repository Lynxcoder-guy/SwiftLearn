import { Link } from "react-router-dom"

export default function BlurtContent() {
    return (
        <main>
            <h1>Scope: Active Recall</h1>
            <p>Choose a topic, then write everything you remember before reviewing your notes.</p>
            <Link to="/scopecontents/timer">Start a blurting session</Link>
        </main>
    )
}