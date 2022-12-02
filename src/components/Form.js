import React, { useContext } from 'react'
import { MdSend, MdEdit } from 'react-icons/md'
import { FormContext } from '../FormContext';
export const Form = () => {
    const context = useContext(FormContext);
    return (
        <>
            <form onSubmit={context.handleSubmit}>
                <div className='form-center'>
                    <div className='form-group'>
                        <label htmlFor='charge'>charge</label>
                        <input type="text" className='form-control' id='charge' name='charge'
                            placeholder='e.g. rent' value={context.charge} onChange={context.handleCharge} />
                    </div>
                    {/* end of form charge */}

                    <div className='form-group'>
                        <label htmlFor='amount'>amount</label>
                        <input type="text" className='form-control' id='amount' name='amount'
                            placeholder='e.g. 100' value={context.amount} onChange={context.handleAmount} />
                    </div>
                    {/* end of form amount */}
                </div>
                {/* end of form center */}

                {context.edit === false ?
                    <button type='submit' className='btn' onClick={context.handleSubmit} >submit <MdSend className='btn-icon' /></button> :
                    <button type='submit' className='btn' onClick={context.handleEditedSubmit} >Edit <MdEdit className='btn-icon' /></button>
                }
            </form>
        </>
    )
}
