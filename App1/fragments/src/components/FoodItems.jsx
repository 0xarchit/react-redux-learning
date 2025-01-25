import { useState } from "react";
import Item from "./Item";

const FoodItems = ({items}) => {
    let [boughtItems, setBoughtItems] = useState([]);

    let onBuyButton = (item, event) => {
        setBoughtItems([...boughtItems, item]);
    }
    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item
                    key={item}
                    foodItem={item}
                    bought={boughtItems.includes(item)}
                    handleByClick={(event) => onBuyButton(item, event)}
                />
            ))}
        </ul>
    );
};

export default FoodItems;