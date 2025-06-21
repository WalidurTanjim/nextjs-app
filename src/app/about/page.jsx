import Link from "next/link"

const About = () => {
    return (
        <div>
            <h1>This is about page.</h1>
            <Link href={'/'}><button>Back to Home</button></Link>
        </div>
    )
}

export default About