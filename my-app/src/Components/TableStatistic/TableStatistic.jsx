import { Container, Table } from 'react-bootstrap';
import { TableRow } from './TableRow'
import { compareUsersScore } from '../../functions/helpFunctions'

import table from'./Statistic.module.scss'

export const TableStatistic = (props) => {
    // debugger;

    props.scoreData.sort( compareUsersScore );
    const rows = props.scoreData.map( (player, index) => <TableRow 
            number={ index + 1 }
            nickName={ player.userName }
            fieldSize={ player.sizeTitle }
            numbersRange={ player.numbersRangeTitle }
            score={ player.score } /> )
    
    return (
        <Container className={table.container}>
            <div className={table.wrapper}>
            <Table striped bordered hover variant="dark" size="sm" className={table.custom}>
            <thead >
                <tr>
                    <th >#</th>
                    <th>Nick Name</th>
                    <th>Game Field</th>
                    <th>Numbers Range</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                { rows } 
            </tbody>
        </Table>
            </div>
            
        </Container>
    )
}