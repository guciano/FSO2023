const Total = ({parts}) => {
    const total = parts.reduce((acmTotal, part) => acmTotal + part.exercises, 0)

    return <strong>Total of {total} exercises</strong>
}

export { Total }