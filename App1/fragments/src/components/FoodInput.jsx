import styles from './FoodInput.module.css'

const FootInput = ({handleOnKeyDown}) => {
    return <input className={styles.foodInput} type="text" onKeyDown={handleOnKeyDown}/>
};

export default FootInput;