import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profileActions';


class ProfileExpTable extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const expContent = this.props.exp.map((row, idx) => (
      <tr key={idx}>
        {/* <td className="text-center">{idx + 1}</td> */}
        <td>{row.name}</td>
        <td>{row.location}</td>
        <td className="text-center">
          <Moment format="YYYY/MM/DD">{row.date}</Moment>
        </td>
        <td className="text-center">{row.place}</td>
      </tr>
    ));
    return (
      <table className="table fonting">
        <thead>
          <tr>
            {/* <th className="text-center">#</th> */}
            <th>Event</th>
            <th>Location</th>
            <th className="text-center">Date</th>
            <th className="text-center">Place</th>
          </tr>
        </thead>
        <tbody>{expContent}</tbody>
      </table>
    );
  }
}

ProfileExpTable.propTypes = {
  exp: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, {deleteExperience})(ProfileExpTable);
