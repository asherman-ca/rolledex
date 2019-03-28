import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profileActions';

class ProfileEduTable extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const eduContent = this.props.edu.map((row, idx) => (
      <tr key={idx}>
        {/* <td className="text-center">{idx + 1}</td> */}
        <td>{row.gym}</td>
        <td>{row.location}</td>
        <td className="text-center">
          <Moment format="YYYY/MM/DD">{row.from}</Moment> -{' '}
          {row.to === null ? '' : <Moment format="YYYY/MM/DD">{row.to}</Moment>}
        </td>
      </tr>
    ));
    return (
      <table className="table fonting">
        <thead>
          <tr>
            {/* <th className="text-center">#</th> */}
            <th>Name</th>
            <th>Location</th>
            <th className="text-center">Date</th>
          </tr>
        </thead>
        <tbody>{eduContent}</tbody>
      </table>
    );
  }
}

ProfileEduTable.propTypes = {
  edu: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, {deleteEducation})(ProfileEduTable);
