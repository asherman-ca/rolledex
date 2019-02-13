import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types'

class EduTable extends Component {

    render (){
        const eduContent = this.props.edu.map((row, idx) => (
            <tr>
                <td className="text-center">{idx+1}</td>
                <td>{row.gym}</td>
                <td>{row.location}</td>
                <td>
                <Moment format="YYYY/MM/DD">{row.from}</Moment> -{' '}
                {row.to === null ? '' : <Moment format="YYYY/MM/DD">{row.to}</Moment>}    
                </td>
                <td className="td-actions text-center">
                <button type="button" rel="tooltip" className="btn btn-danger">
                    <i className="material-icons">close</i>
                </button>
                </td>
            </tr>    
        ));

    return (
        <table className="table fonting whiting">
        <thead>
        <tr>
            <th className="text-center whiting">#</th>
            <th className="whiting">Name</th>
            <th className="whiting">Location</th>
            <th className="text-center whiting">Dates</th>
            <th className="text-right whiting">Actions</th>
        </tr>
        </thead>
        <tbody>
            {eduContent}
        </tbody>
    </table>
)}}

export default EduTable;