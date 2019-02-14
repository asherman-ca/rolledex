import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

class ExpTable extends Component {
  render() {
    const expContent = this.props.exp.map((row, idx) => (
      <tr>
        <td className="text-center">{idx + 1}</td>
        <td>{row.name}</td>
        <td>{row.location}</td>
        <td className="text-center">
          <Moment format="YYYY/MM/DD">{row.date}</Moment>
        </td>
        <td className="text-center">{row.place}</td>
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
            <th className="whiting">Event</th>
            <th className="whiting">Location</th>
            <th className="text-center whiting">Date</th>
            <th className="text-center whiting">Place</th>
            <th className="text-center whiting">Actions</th>
          </tr>
        </thead>
        <tbody>{expContent}</tbody>
      </table>
    );
  }
}

ExpTable.PropTypes = {
  exp: PropTypes.object.isRequired
};

export default ExpTable;
