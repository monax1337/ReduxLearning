const defaultValue = {
    customers: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
export const FETCH_CUSTOMERS= "FETCH_CUSTOMERS";
const ADD_MANY_CUSTOMERS= "ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: action.payload}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state
    }
}

export const addCustomerAction = payload => ({type: ADD_CUSTOMER, payload})
export const fetchCustomersAction = () => ({type: FETCH_CUSTOMERS})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})