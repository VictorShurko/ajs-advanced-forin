export default function orderByProps(object, order) {
    const result = [];
    const copyObj = { ...object };

    order.forEach((el) => {
        result.push({
            key: el, value: copyObj[el]
        });
        delete copyObj[el];
    });

    const sortedObj = [];
    for (let prop in copyObj) {
        sortedObj.push(prop);
    }
    sortedObj.sort();

    for (let key of sortedObj) {
        result.push({
            key, value: copyObj[key]
        });
    }

    return result;
}