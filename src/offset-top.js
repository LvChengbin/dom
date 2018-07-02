export default el => {
    let y = 0;
    while( el && !isNaN( el.offsetTop ) ) {
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return y;
};
