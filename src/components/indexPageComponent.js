import React, { Component } from 'react';

/**
 * Component for basic index page
 */
export default class indexPageComponent extends Component {
  render() {
    return (
        /* Everything must be wrapped in one div */
        <center>
            <h2>Welcome to Wayfair's React Workshop</h2>
            <img width="400" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"></img>
            <img width="750"src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Wayfair_logo_with_tagline.png"></img>
            <img width="400" src="https://techtogether.io/imgs/logos/lockup_techtogether_white.png"></img>
        </center>
    );
  }
}
