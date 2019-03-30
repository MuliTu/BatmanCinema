import React from 'react';
import './App.scss';
import Movies from './containers/Movies/Movies';
import PopUp from './containers/PopUp/PopUp';
import Button from './components/Button/Button';
import { addMovie, setMovieIndex } from './reducers/Movie/actions';
import { connect } from 'react-redux';
import { openPopUp } from './reducers/PopUp/actions';

class App extends React.Component {
    title = 'Batman Cinema';

    openModal = (index, type) => {
        this.props.setMovieIndex(index);
        this.props.openPopUp(type);
    };

    render() {
        return (
            <div className='App'>
                <h2>{this.title}</h2>
                <Button label={'Add'} onClick={() => {
                    this.props.addMovie();
                    this.openModal(0,'add');
                }}/>
                <PopUp/>
                <Movies popUpFunction={this.openModal}/>
            </div>
        );
    }
}



export default connect(null, {addMovie,setMovieIndex,openPopUp})(App);
