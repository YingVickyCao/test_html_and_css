import React, { Component } from 'react';

// https://www.taniarascia.com/getting-started-with-react/

// Function Component
function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name, Job</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Charlie</td>
                    <td>Janitor</td>
                </tr>

                <tr>
                    <td>Dee</td>
                    <td>Aspiring actress</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;