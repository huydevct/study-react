import React, { Component } from 'react';

class Table extends Component {
    constructor(){
        super();
        this.table = [
            ['google','huy','hung','van anh'],
            ['samsung','nam','toan','thao'],
            ['apple ','thanh','kien','ly']
        ];
    }
    render () {
        return (
            <div>
                <table>
                    <caption>HTML table</caption>
                    <thead>
                        <tr>
                            {
                                this.table.map((item) => {
                                    return(
                                        <th key="index"> {item[0]} </th> 
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.table.map((item) => {
                                return(
                                    <tr key="index">
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>     
                                        <td>{item[3]}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;