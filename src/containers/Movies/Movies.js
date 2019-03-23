import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie, deleteMovie, fetchMoviesBySearch, setCurrentMovieIndex, } from '../../reducers/Movie/actions';
import { getMovies } from '../../store/index';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import './style.scss'
import { openPopUp } from '../../reducers/PopUp/actions';

class Movies extends Component {
    componentDidMount() {
        this.props.fetchMoviesBySearch('Batman');
    }

    movieListEntity = (movie, index) => (
        <div key={index}>
            <Button label={'Delete'} onClick={() => this.openModal(index,'delete')}/>
            <Button label={'Edit'} onClick={() => this.openModal(index,'edit')}/>
            <Box movie={movie} editMode={true}/>
        </div>);

    openModal = (index, type) => {
        this.props.setCurrentMovieIndex(index);
        this.props.openPopUp(type);
    };

    render() {

        return (
            <div className='box-order'>
                {this.props.movies.map(this.movieListEntity)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: getMovies(state),
});

export default connect(mapStateToProps, {
    fetchMoviesBySearch,
    getMovies,
    setCurrentMovieIndex,
    deleteMovie,
    openPopUp,
    addMovie
})(Movies)
