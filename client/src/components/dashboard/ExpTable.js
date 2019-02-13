import React from 'react';
import PropTypes from 'prop-types'

const ExpTable = ({exp}) => {
    return (
        <table className="table fonting whiting">
    <thead>
        <tr>
            <th className="text-center whiting">#</th>
            <th className="whiting">Event</th>
            <th className="whiting">Location</th>
            <th className="whiting">Date</th>
            <th className="text-center whiting">Place</th>
            <th className="text-right whiting">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td>2013</td>
            <td className="text-right">&euro; 99,225</td>
            <td className="td-actions text-right">
                <button type="button" rel="tooltip" className="btn btn-danger">
                    <i className="material-icons">close</i>
                </button>
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>John Doe</td>
            <td>Design</td>
            <td>2012</td>
            <td className="text-right">&euro; 89,241</td>
            <td className="td-actions text-right">
                <button type="button" rel="tooltip" className="btn btn-danger">
                    <i className="material-icons">close</i>
                </button>
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>Alex Mike</td>
            <td>Design</td>
            <td>2010</td>
            <td className="text-right">&euro; 92,144</td>
            <td className="td-actions text-right">
                <button type="button" rel="tooltip" className="btn btn-danger btn-simple">
                    <i className="material-icons">close</i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
    )
}



export default ExpTable;