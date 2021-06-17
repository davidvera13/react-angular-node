import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'

// we pass openBtn from parent component to the child and we define an alias
const BookingModal = ({
    title = "Default Modal",
    subtitle = "confirm Data",
    children,
    onSubmit,
    openBtn: OpenBtn
}) => {
    const [isOpen, setIsOpen ] = useState(false);
    return (
        <>
            {!OpenBtn &&
                <button
                    className="btn btn-success"
                    onClick={() => setIsOpen(true)}>
                    Open
                </button>
            }
            {OpenBtn &&
                <div onClick={() => setIsOpen(true)}>
                    {OpenBtn}
                </div>
            }

            <Modal
                focusTrapped={false}
                open={isOpen}
                onClose={() => setIsOpen(false) }
                classNames={{ modal: 'booking-modal' }}
            >
                <h4 className='modal-title title'>{ title }</h4>
                <p className='modal-subtitle'>Subtitle : { subtitle }</p>
                <div className='modal-body'>
                    { children }
                </div>
                <div className='modal-footer'>
                    <button
                        type='button'
                        className='btn btn-booking-main '
                        onClick={() => onSubmit(() => setIsOpen(false))}
                    >
                        Confirm
                    </button>
                    <button
                        type='button'
                        className='btn btn-alert'
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </>
    );
}
export default BookingModal;
