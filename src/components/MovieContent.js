import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../Style/bootstrap.min.css';
import '../Style/style.css';

class MovieContent extends Component {
    render () {
        console.log('signin props', this.props);
        return (
            <div class='row' style={{marginTop:"30px"}}>
            <div class="well">
                <div class="media">
    		            <img className= "poster" src={this.props.Poster}/>
  		            <div class="media-body">
    		            <h4 class="media-heading">{this.props.Title}</h4>
                        <p class="text-left">{this.props.Year}</p>
                        <p>{this.props.Synopsis}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

MovieContent.propTypes = {
    Title: PropTypes.string.isRequired,
    Synopsis: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    Year: PropTypes.string.isRequired,
};

export default MovieContent;