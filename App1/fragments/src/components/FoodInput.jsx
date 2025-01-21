import styles from './FoodInput.module.css'


const handleOnChange = (event) => {
    console.log(event.target.value);
};

const FootInput = () => {
    return <input className={styles.foodInput} type="text" onChange={handleOnChange}/>
};

export default FootInput;