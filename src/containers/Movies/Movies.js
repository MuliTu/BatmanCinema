import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesBySearch } from '../../reducer/actions';
import { getMovies } from '../../store/index';
import Box from '../../components/Box/Box';

import './test.scss'

class Movies extends Component {
    componentDidMount() {
        this.props.fetchMoviesBySearch( 'Batman' );
    }


    render() {
        console.log( this.props.movies );
        return (
            <div className='box-order'>
                {this.props.movies.map( (x, index) => (
                    <div key={index}>
                        <Box movie={x}/>
                    </div>) )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: getMovies( state )
});

export default connect( mapStateToProps, {fetchMoviesBySearch, getMovies} )( Movies )
