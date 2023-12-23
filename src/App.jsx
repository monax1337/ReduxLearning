import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCustomerAction,
    addManyCustomersAction,
    fetchCustomersAction,
    removeCustomerAction
} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/cashReducer";

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash});
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash});
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className={'app'}>
            <div style={{fontSize: "3rem", marginBottom: "10px"}}>Баланс: {cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => dispatch(asyncIncrementCreator())}>Пополнить счет</button>
                <button onClick={() => dispatch(asyncDecrementCreator())}>Снять со счета</button>
                {/*<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>*/}
                <button onClick={() => dispatch(fetchCustomersAction())}>Получить клиентов из базы</button>
            </div>
            {(customers.length > 0) ?
                <div>
                {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)} style={{
                            fontSize: '2rem',
                            border: '1px solid black',
                            padding: '10px',
                            marginTop: '5px'
                        }}>{customer.name}</div>
                    )}
                </div>
                :
                <div style={{fontSize: "2rem", marginTop: "20px"}}>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
};

export default App;