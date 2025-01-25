import Item from "./item";

const FoodItems = ({items}) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item key={item} foodItem={item} handleByClick={() => alert(`${item} purchased!`)} />
            ))}
        </ul>
    );
};

export default FoodItems;