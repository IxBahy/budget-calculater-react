import React, { useContext } from 'react'
import { Item } from './Item'
import { MdDelete } from "react-icons/md"
import { FormContext } from '../FormContext';
export const List = () => {
    const context = useContext(FormContext);
    return (
        <>
            <ul className='list'>
                {context.expenses.map((expense) => {
                    return (
                        <Item key={expense.id} expense={expense} />
                    )
                })}
            </ul>
            {
                context.expenses.length > 0
                &&
                <button className='btn' onClick={context.handleClearAllItems}> clear expenses <MdDelete className='btn-icon' /></button>
            }
        </>
    )
}
