export default ( node, oldNode ) => {
    const parentNode = oldNode.parentNode;
    return parentNode && parentNode.replaceChild( node, oldNode );
};
