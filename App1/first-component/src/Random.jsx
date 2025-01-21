function Random() {
    let number = Math.random() * 100;
    return <h1>Random Number is: {number.toFixed(0)}</h1>
}

export default Random