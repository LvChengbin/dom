function traverse( node, cb ) {
    let nodes;

    if( node.nodeType === 11 ) {
        nodes  = node.children;
    } else if( !node.length ) {
        nodes = [ node ];
    } else {
        nodes = Array.prototype.slice.call( node );
    }
    for( let i = 0, l = nodes.length; i < l; i = i + 1 ) {
        const node = nodes[ i ];
        cb && cb( node );
        if( node.nodeType === 1 && node.hasChildNodes() ) {
            traverse( node.childNodes, cb );
        }
    }
}
export default traverse;
