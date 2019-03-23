import React from 'react'
import Button from '../components/Button/Button';
import { deleteMovie } from '../reducers/Movie/actions';
import { closePopUp } from '../reducers/PopUp/actions';
import { connect } from 'react-redux';

const DeleteMovie = ({deleteMovie, closePopUp}) => (
    <div>
        <p>Do you really want to delete this movie?</p>
        <Button label={'Yes'} onClick={() => {
            closePopUp();
            deleteMovie();
        }}/>
        <Button label={'Cancel'} onClick={closePopUp}/>

    </div>
);

export default connect(null, {deleteMovie, closePopUp})(DeleteMovie)