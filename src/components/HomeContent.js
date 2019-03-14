import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/bootstrap.min.css';
import '../Style/style.css';

class HomeContent extends Component {
    render () {
        console.log('signin props', this.props);
        return (
            <section className="category">
            <div className="row">
                <div className="col-3">
                    <figure>
                    <figcaption>Romance</figcaption>
                    <img className= "poster" src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt="Trulli"/>
                    <br/><Link to="/Romance" role="button" class="btn btn-primary moviebtn">See Movies</Link>
                    </figure>
                </div>
                <div className="col-3">
                    <figure>
                    <figcaption>Action</figcaption>
                    <img className= "poster" src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Trulli"/>
                    <br/><Link to="/Romance" role="button" class="btn btn-primary moviebtn">See Movies</Link>
                    </figure>
                </div>
                <div className="col-3">
                    <figure>
                    <figcaption>Fiction</figcaption>
                    <img className= "poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTM2Njc1NDleQTJeQWpwZ15BbWU3MDUzNDA0MzE@._V1_SX300.jpg" alt="Trulli"/>
                    <br/><Link to="/Romance" role="button" class="btn btn-primary moviebtn">See Movies</Link>
                    </figure>
                </div>
                <div className="col-3">
                    <figure>
                    <figcaption>Comedy</figcaption>
                    <img className= "poster" src=	"https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" alt="Trulli"/>
                    <br/><Link to="/Romance" role="button" class="btn btn-primary moviebtn">See Movies</Link>
                    </figure>
                </div>
            </div>              
            </section>
        )
    }
}


export default HomeContent;