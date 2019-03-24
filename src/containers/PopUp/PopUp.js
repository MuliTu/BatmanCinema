import React from 'react';
import { connect } from 'react-redux';
import { currentModalState, currentType } from '../../store';
import Modal from 'react-responsive-modal';
import { closePopUp } from '../../reducers/PopUp/actions';
import { popUpCases } from './utilis';
import './style.scss'

const PopUp = ({children, popUpState, type,closePopUp}) => {
    const componentType = popUpCases(type);
    return (
        <Modal open={popUpState} onClose={closePopUp} styles={componentType.style}>
            {componentType.component}
        </Modal>
    );
};

const mapStateToProps = state => ({
    popUpState: currentModalState(state),
    type: currentType(state)
});

export default connect(mapStateToProps, {closePopUp})(PopUp);