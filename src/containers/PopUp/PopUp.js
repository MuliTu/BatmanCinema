import React from 'react';
import { currentModalState, currentType } from '../../store';
import Modal from 'react-responsive-modal';

import { connect } from 'react-redux';
import './style.scss'
import { closePopUp } from '../../reducers/PopUp/actions';
import { componentRandreing } from './utilis';

const PopUp = ({children, popUpState, closePopUp,type}) => {
    const componentType = componentRandreing(type);

    return (
        <Modal
            open={popUpState}
            onClose={closePopUp}
            styles={componentType.style}>

            {componentType.component}
        </Modal>
    );
};

const mapStateToProps = state => ({
    popUpState: currentModalState(state),
    type:currentType(state)
});

export default connect(mapStateToProps, {closePopUp,currentType})(PopUp);