import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid';//used to generate random ids

// context
export const FormContext = React.createContext()



const FormContextProvider = (props) => {

    //getting initail values from the browser local storage
    const initialExpenses = localStorage.getItem("expenses")
        ? JSON.parse(localStorage.getItem("expenses")) : []

    //************************* state values ************************
    //all expenses 
    const [expenses, setExpenses] = useState(initialExpenses);

    //single expense->charge
    const [charge, setCharge] = useState('')

    //edit
    const [edit, setEdit] = useState(false)

    //amount 
    const [amount, setAmount] = useState('')

    //id
    const [id, setId] = useState(0);

    //alert
    const [alert, setAlert] = useState({ show: false, type: '', text: '' })

    //************************* end of state values   ************************



    //************************* functionality  ************************

    //useEffct

    //setting the browser local storage values with useEffect hook
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    //**********general functions********* 

    //****** forms *******

    //onChange

    //charge
    const handleCharge = e => {
        setCharge(e.target.value)
    }

    //amount
    const handleAmount = e => {
        setAmount(e.target.value)
    }

    //********************** 

    //onSubmit


    //normal submit
    const handleSubmit = e => {
        if (charge !== '' && amount > 0) {
            let newExpense = { id: uuid(), charge, amount }
            setExpenses([...expenses, newExpense])
            handleAlert({ type: 'success', text: 'item added' })
            //reseting the values of the states 
            resetValues()

        }
        else {
            handleAlert({ type: 'danger', text: "charge can't be empty value and amount value has to be bigger" })

        }
        e.preventDefault()
    }

    //edited submit
    const handleEditedSubmit = e => {
        if (charge !== '' && amount > 0) {
            // editing the selected item
            let newExpanses = expenses.map((item) => {
                if (item.id === id) {
                    item.charge = charge
                    item.amount = amount
                }
                return item
            })
            setExpenses(newExpanses)
            handleAlert({ type: 'success', text: 'item edited' })
            //reseting the values of the states 
            resetValues()
        }
        else {
            handleAlert({ type: 'danger', text: "charge can't be empty value and amount value has to be bigger" })
        }
        e.preventDefault()
    }

    //****** end of forms functions *******


    //alert
    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text })
        setTimeout(() => {
            setAlert({ show: false, type: '', text: '' })
        }, 5000);
    }



    const handleClearAllItems = () => {
        setExpenses([])
        handleAlert({ type: 'danger', text: 'all items deleted' })
    }

    const resetValues = () => {
        setCharge('')
        setAmount('')
        setEdit(false)
    }
    //**** end of general functions ****/

    //**** specific use functions*****

    const handleDelete = (id) => {
        let tempExpenses = expenses.filter(item => item.id !== id)
        setExpenses(tempExpenses)
        handleAlert({ type: 'danger', text: 'item deleted' })

    }

    const handleEdit = (id) => {
        setEdit(true)
        let tempExpense = expenses.filter(item => item.id === id)
        setCharge(tempExpense[0].charge)
        setAmount(tempExpense[0].amount)
        setId(tempExpense[0].id)

    }

    //**** end of specific use functions*****


    //************************* end of functionality  ************************

    return (
        <FormContext.Provider value={
            {
                alert, amount, charge, expenses, edit,
                handleCharge, handleAmount, handleSubmit,
                handleClearAllItems, handleDelete, handleEdit, handleEditedSubmit
            }
        }>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormContextProvider;


