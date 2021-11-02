const Area = (r) => {
    return Math.PI * Math.pow(r, 2);
}

const Circumference = (r) => {
    return Math.PI * 2 * r;
}

module.exports = {
    Area,
    Circumference
};