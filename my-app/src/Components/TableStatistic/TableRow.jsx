export const TableRow = (props) => {
    return (
        <tr >
            <td>{props.number}</td>
            <td>{props.nickName}</td>
            <td>{props.fieldSize}</td>
            <td>{props.numbersRange}</td>
            <td>{props.score}</td>
        </tr>
    )
}