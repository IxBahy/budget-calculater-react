import React, { useContext } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { FormContext } from '../FormContext';
export const Item = ({ expense: { id, charge, amount } }) => {
    const context = useContext(FormContext);
    return (
        <>
            <li className='item'>
                {/* info */}

                <div className='info'>
                    <span className='expense'>{charge}</span>
                    <span className='amount'>${amount}</span>
                </div>
                {/* end of info */}

                {/* buttons */}
                <div>
                    <button className='edit-btn' aria-label='edit button' onClick={() => context.handleEdit(id)} >
                        <MdEdit />
                    </button>
                    {/* end of edit */}
                    <button className='clear-btn' aria-label='delete button' onClick={() => context.handleDelete(id)}>
                        <MdDelete />
                    </button>
                </div>

            </li>
        </>
    )
}
