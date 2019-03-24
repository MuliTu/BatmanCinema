import React from 'react';
import { connect } from 'react-redux';
import { addMovie, deleteMovie, fetchMoviesBySearch, setMovieIndex, } from '../../reducers/Movie/actions';
import { getMovies } from '../../store/index';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import { openPopUp } from '../../reducers/PopUp/actions';
import './style.scss'

class Movies extends React.Component {
    componentDidMount() {
        this.props.fetchMoviesBySearch('Batman');
    }

    movieListEntity = (movie, index) => (
        <div key={index}>
            <Button label={'Delete'} onClick={() => this.props.popUpFunction(index, 'delete')}/>
            <Button label={'Edit'} onClick={() => this.props.popUpFunction(index, 'edit')}/>
            <Box movie={movie} editMode={true}/>
        </div>);


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
    setMovieIndex,
    deleteMovie,
    openPopUp,
    addMovie
})(Movies)
