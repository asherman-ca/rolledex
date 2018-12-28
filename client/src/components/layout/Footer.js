import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <nav class="float-left">
            <ul>
              <li>
                <a href="#creative">Rolledex</a>
              </li>
              <li>
                <a href="#creative">About Me</a>
              </li>
              <li>
                <a href="#creative">Github</a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &#xA9;
            <script>document.write(new Date().getFullYear())</script>, made with{' '}
            <i class="fa fa-heart heart" /> by
            <a href="http://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
