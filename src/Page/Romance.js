import React, { Component } from 'react';
import axios from 'axios';
import '../Style/style.css';
import '../Style/bootstrap.min.css';
import MovieContent from '../components/MovieContent';
import az from '../logo.svg';


const urlMovie = 'https://api-todofancy.herokuapp.com/api/movies'

class Romance extends Component {
    constructor (props){
        super(props);
        this.state = {
          listMovie: []
        };
      }

    componentDidMount(){
        axios 
        .get(urlMovie)
        .then(function (response) {
          this.setState({ listMovie: response.data.movies});
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);        
        });        
      }

    render() {
        return (
            <div className='App'>
                    <div class="row">
                        {listMovie.filter(movie => movie.Category === 'romance').map((item, key) => {
                        const src_img = item.Poster === null ? az : item.Poster;
                        const Synopsis = item.Synopsis !== null ? item.Synopsis: "Tidak Punya Content";
                        const Title = item.Title !== null ? item.Title : "Tidak ada judul";
                        const Year = item.Year !== null ? item.Year: "tidak ada tahun";
                        return <MovieContent key={key} Title={Title} Poster={src_img} Synopsis={Synopsis} Year={Year}/>;
                        })}
                    </div>
                </div>
        )
    }
}

export default Romance;