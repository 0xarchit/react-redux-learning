import styles from "./Item.module.css";


const Item = ({ foodItem, bought, handleByClick }) => {
//     const handleByClick = (event) => {
//     console.log(event);
//     alert(`${foodItem} Bought`);
// };
    return (
        <li className={`${styles.item1} list-group-item ${bought && "active"}`}><span className={styles['span']}>{foodItem}</span>
            <button className={`${styles.button} btn btn-info`} onClick={handleByClick}>Buy</button></li>
    );
};

export default Item;