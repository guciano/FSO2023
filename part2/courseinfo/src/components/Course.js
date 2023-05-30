import { Header } from "./Header"
import { Content } from "./Content"

const Course = ({course}) => 
    <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
    </div>

export { Course }