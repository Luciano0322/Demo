import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


class Outputlist extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>中文名字</th>
                        <th>英文名字</th>
                        <th>性別</th>
                        <th>手機</th>
                        <th>電子信箱</th>
                        <th><Button variant="primary">修改</Button></th>
                        <th><Button variant="danger">刪除</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Outputlist
