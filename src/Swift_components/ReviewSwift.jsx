import { Link } from "react-router-dom"

export default function ReviewSwift() {
    return (
        <main>
            <h1>Swift review</h1>
            <p>Review the questions you missed and practise the underlying ideas again.</p>
            <Link to="/swiftcontents">Back to Swift topics</Link>
        </main>
    )
}