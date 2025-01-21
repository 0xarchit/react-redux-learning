/* eslint-disable react/prop-types */

import styles from "./Item.module.css";


const Item = ({ foodItem }) => {
    const handleByClick = (event) => {
    console.log(event);
    alert(`${foodItem} Bought`);
};
    return (
        <li className={`${styles.item1} list-group-item`}><span className={styles['span']}>{foodItem}</span>
            <button className={`${styles.button} btn btn-info`} onClick={(event) => handleByClick(event)}>Buy</button></li>
    );
};

export default Item;