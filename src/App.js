import React from 'react';
import './App.scss';
import Movies from './containers/Movies/Movies';
import PopUp from './containers/PopUp/PopUp';
import Button from './components/Button/Button';
import { addMovie } from './reducers/Movie/actions';
import { connect } from 'react-redux';

class App extends React.Component {
    title = 'Herolo Cinema';

    render() {
        return (
            <div className='App'>
                <h2>{this.title}</h2>
                <Button label={'Add'} onClick={() => this.props.addMovie({})}/>

                <PopUp/>
                <Movies/>
            </div>
        );
    }
};

export default connect(null, {addMovie})(App);
