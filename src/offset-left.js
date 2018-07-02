export default el => {
    let x = 0;
    while( el && !isNaN( el.offsetLeft ) ) {
        x += el.offsetLeft - el.scrollLeft;
        el = el.offsetParent;
    }
    return x;
};
