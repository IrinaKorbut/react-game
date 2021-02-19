export const TableRow = (props) => {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.nickName}</td>
            <td>{props.time}</td>
            <td>{props.score}</td>
        </tr>
    )
}