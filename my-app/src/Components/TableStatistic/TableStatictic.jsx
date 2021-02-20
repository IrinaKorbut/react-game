import { Container, Table } from 'react-bootstrap';
import { TableRow } from './TableRow'

import './Statistic.scss'

export const TableStatictic = (props) => {
    return (
        <Container className="table-container">
            <Table striped bordered hover variant="dark" size="sm" className="table-custom">
            <thead>
                <tr>
                    <th >#</th>
                    <th>NickName</th>
                    <th>Time</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <TableRow number='1' nickName='aaa' score='123' time='454'/>
                <TableRow number='2' nickName='bbb' score='234' time='34545'/>
                <TableRow number='3' nickName='ccc' score='345' time='6587'/>
                <TableRow number='4' nickName='ddd' score='456' time='35546'/>
                <TableRow number='5' nickName='eee' score='567' time='5454'/>                
            </tbody>
        </Table>
        </Container>
    )
}