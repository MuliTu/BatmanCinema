import React from 'react';
import { connect } from 'react-redux';
import Poster from '../components/Poster/Poster';
import '../components/Box/Box.scss'
import { getCurrentMovie, getCurrentTitles } from '../store';
import './style.scss'
import Button from '../components/Button/Button';
import { closePopUp } from '../reducers/PopUp/actions';
import { saveEditedMovie } from '../reducers/Movie/actions';

class EditMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poster: props.movie['Poster'],
            title: props.movie['Title'],
            id: props.movie['imdbID'],
            year: props.movie['Year'],
            plot: props.movie['Plot'],
            ganers: props.movie['Genre'],
            runtime: props.movie['Runtime'],
            director: props.movie['Director'],
            type: props.movie['Type'],
            isValid: true

        }
    }

    onChangeHandler = (e, label) => this.setState({[label]: e.target.value});

    onChangeTitle = (e, label) => {
        this.checkTitleValidation(e);
        this.onChangeHandler(e, label)
    };



    checkTitleValidation = (e) => this.setState({isValid: this.props.list.some(title => title === e.target.value)});

    isValidInput = (field) => {
        return field.length <= 0 ? {border: 'solid 1px red'} : {border: 'solid 1px green'}
    };

    render() {
        const {title, id, year, plot, ganers, runtime, poster, director, type} = this.state;
        return (
            <div className='container'>
                <Poster path={poster}/>
                <div className='info'>
                    <input className='title' value={title}
                           onChange={(e) => this.onChangeTitle(e, 'title')}
                           style={this.isValidInput(title)}/>
                    <p>{this.state.isValid ? 'Title is already exist' : ''}</p>

                    <input className='id' value={id}
                           disabled={true}/>
                    <input className='ganers' value={ganers}
                           onChange={(e) => this.onChangeHandler(e, 'ganers')}
                           style={this.isValidInput(ganers)}/>

                    <hr/>
                    <div className='information'>
                        <input value={type}
                               onChange={(e) => this.onChangeHandler(e, 'type')}
                               style={this.isValidInput(type)}/>

                        <input value={year} type='number'
                               min={1950}
                               max={2019}
                               onChange={(e) => this.onChangeHandler(e, 'year')}
                               style={this.isValidInput(year)}/>

                        <input value={runtime.split(' ')[0]}
                               type='number'
                               onChange={(e) => this.onChangeHandler(e, 'runtime')}
                               style={this.isValidInput(runtime)}/> Min

                    </div>
                    <div className='main'>
                        <textarea className='plot'
                                  value={plot}
                                  onChange={(e) => this.onChangeHandler(e, 'plot')}
                                  style={plot.length <= 0 ? {border: 'solid 1px red'} : {border: 'solid 1px green'}}

                        />
                        <input className='director'
                               value={director}
                               onChange={(e) => this.onChangeHandler(e, 'director')}
                               style={this.isValidInput(director)}/>

                    </div>
                </div>
                <Button label={'Save'} onClick={() => this.props.saveEditedMovie(this.state)}
                        disable={this.state.isValid}/>
                <Button label={'Cancel'} onClick={this.props.closePopUp}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: getCurrentMovie(state),
    list: getCurrentTitles(state)
});

export default connect(mapStateToProps, {closePopUp, saveEditedMovie})(EditMovie);