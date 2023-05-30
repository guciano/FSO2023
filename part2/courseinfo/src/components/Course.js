import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

const Course = ({course}) => 
    <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>

export { Course }