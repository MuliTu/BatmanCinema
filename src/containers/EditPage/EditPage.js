import React from 'react';
import { connect } from 'react-redux';
import { getCurrentMovie, getCurrentTitles } from '../../store/index';
import { closePopUp } from '../../reducers/PopUp/actions';
import { saveEditedMovie } from '../../reducers/Movie/actions';
import Poster from '../../components/Poster/Poster';
import Button from '../../components/Button/Button';
import { fixTitle, isTitleEqual, isTitleExist, isValidInput } from './utilis';
import Alert from '../../components/Alert/Alert';
import './style.scss'
import '../../components/Box/style.scss'

class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                poster: props.movie.poster,
                title: props.movie.title,
                id: props.movie.id,
                year: props.movie.year,
                plot: props.movie.plot,
                genre: props.movie.genre,
                runtime: props.movie.runtime,
                director: props.movie.director,
                type: props.movie.type,
            },
            oldTitle: props.movie.title,
            isValid: true

        }
    }

    onChangeHandler = (value, label) =>
        this.setState({
            movie: {
                ...this.state.movie,
                [label]: value
            }
        });


    onChangeTitleHandler = (value, label) => {
        const title = fixTitle(value);
        const isExist = isTitleExist(title, this.props.list);
        const isEqual = isTitleEqual(title, this.state.oldTitle);
        this.setState({isValid: isEqual || isExist});
        this.onChangeHandler(title, label)
    };

    render() {
        const {title, id, year, plot, genre, runtime, poster, director, type} = this.state.movie;
        return (
            <div className='container'>
                <div>
                    <Poster path={poster}/>
                    <input value={poster}
                           onChange={(e) => this.onChangeHandler(e.target.value, 'poster')}
                           style={isValidInput(poster)}
                    />
                </div>
                <div className='info'>
                    <input className='title'
                           value={title}
                           onChange={(e) => this.onChangeTitleHandler(e.target.value, 'title')}
                           style={isValidInput(title)}/>

                    <Alert isValid={!this.state.isValid} text={'Title is already exist'}/>

                    <input className='id'
                           value={id}
                           disabled={true}/>

                    <input className='genre'
                           value={genre}
                           onChange={(e) => this.onChangeHandler(e.target.value, 'genre')}
                           style={isValidInput(genre)}/>
                    <hr/>
                    <div className='information'>
                        <input value={type}
                               onChange={(e) => this.onChangeHandler(e.target.value, 'type')}
                               style={isValidInput(type)}/>

                        <input value={year} type='number'
                               min={1950}
                               max={2019}
                               onChange={(e) => this.onChangeHandler(e.target.value, 'year')}
                               style={isValidInput(year)}/>

                        <input value={runtime.split(' ')[0]}
                               type='number'
                               onChange={(e) => this.onChangeHandler(e.target.value, 'runtime')}
                               style={isValidInput(runtime)}/> Min

                    </div>
                    <div className='main'>
                        <textarea className='plot'
                                  value={plot}
                                  onChange={(e) => this.onChangeHandler(e.target.value, 'plot')}
                                  style={isValidInput(plot)}

                        />
                        <input className='director'
                               value={director}
                               onChange={(e) => this.onChangeHandler(e.target.value, 'director')}
                               style={isValidInput(director)}/>
                    </div>
                </div>
                <Button label={'Save'} onClick={() => {
                    this.props.saveEditedMovie(this.state.movie);
                    this.props.closePopUp()
                }}
                        disable={!this.state.isValid}/>
                <Button label={'Cancel'} onClick={this.props.closePopUp}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: getCurrentMovie(state),
    list: getCurrentTitles(state)
});

export default connect(mapStateToProps, {closePopUp, saveEditedMovie})(EditPage);