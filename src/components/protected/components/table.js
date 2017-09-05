import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class TableComponent extends Component {
    state = { header: [
                {name: 'FilterCriteria 1'},
                {name: 'FilterCriteria 2'},
                {name: 'FilterCriteria 3'},
                {name: 'FilterCriteria 4'},
                {name: 'FilterCriteria(%)'},
                {name: 'Filter Flag'},],
             tableData: [{id: '1', criteria1: 'Portfolio 01', criteria2: 'Dummy 1', criteria3: 'India', criteria4: 'Dummies 1', criteriaper: '10', flag: 'true',},
                         {id: '2', criteria1: 'Portfolio 02', criteria2: 'Dummy 2', criteria3: 'Hong kong', criteria4: 'Dummies 2', criteriaper: '20', flag: 'false',},
                         {id: '3', criteria1: 'Portfolio 03', criteria2: 'Dummy 3', criteria3: 'China', criteria4: 'Dummies 3', criteriaper: '30', flag: 'true',},
                       ],
            }
    render() {

        return (
            <Table striped color='blue'>
                <Table.Header>
                    <Table.Row>
                        {this.state.header.map((reg) => {
                            return (
                                <Table.HeaderCell key={ reg.name }>{ reg.name }</Table.HeaderCell>
                            )
                        }, this)}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.state.tableData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.criteria1}{Math.floor(Math.random() * (50 - 10 + 1)) + 10}</Table.Cell>
                                <Table.Cell>{data.criteria2}{Math.floor(Math.random() * (75 - 50 + 1)) + 50}</Table.Cell>
                                <Table.Cell>{data.criteria3}{Math.floor(Math.random() * (100 - 50 + 1)) + 50}</Table.Cell>
                                <Table.Cell>{data.criteria4}{Math.floor(Math.random() * (10 - 1 + 1)) + 1}</Table.Cell>
                                <Table.Cell>{Math.floor(Math.random() * (100 - 1 + 1)) + 1}</Table.Cell>
                                <Table.Cell>{data.flag}</Table.Cell>
                            </Table.Row>
                        )
                    }, this)}
                </Table.Body>
            </Table>
        )
    }
}

export default TableComponent