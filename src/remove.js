export default node => {
    if( node.remove ) {
        return node.remove();
    }
    const parentNode = node.parentNode;
    parentNode && parentNode.removeChild( node );
}
