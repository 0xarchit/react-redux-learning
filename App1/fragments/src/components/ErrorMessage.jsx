/* eslint-disable react/prop-types */
const ErrorMessage = ({items}) => {
    return <>
        {/* {foodItems.length === 0 ? <h3>Please add food items</h3> : null}*/}
        {items.length === 0 && <h3>Please add food items</h3>}
    </>
}

export default ErrorMessage;