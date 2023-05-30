const Total = ({parts}) => {
    const total = parts.reduce((acmTotal, part) => acmTotal + part.exercises, 0)

    return <strong>Number of exercises: {total}</strong>
}

export { Total }