import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div
        class="page-header header-filter clear-filter"
        data-parallax="true"
        style={{ backgroundImage: "url('assets/img/bg0.jpg')" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="brand">
                <h1>Rolledex</h1>
                <h3 class="title">
                  {' '}
                  Accelerate your BJJ progression by tracking, sharing and
                  discovering techniques.{' '}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
