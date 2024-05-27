import React from 'react'

function StarBtn(props){

    const findAction = () => {
        props.actions.findAction();
    }

    const paymentAction = () => {
        props.actions?.paymentAction();
    }

    const infoAction = () => {
        props.actions?.infoAction();
    }

    return (
        <div className='ml-12'>
            <button className='start-btn' onClick={() => findAction()}>Suggest Product</button>
            <button className='start-btn' onClick={() => paymentAction()}>Payment Method</button>
            <button className='start-btn' onClick={() => infoAction()}>About Us</button>
        </div >
    )
}

export default StarBtn
