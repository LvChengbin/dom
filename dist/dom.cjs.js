'use strict';

const wrap = {
    $default : [ 0, '', '' ],
    option : [ 1, '<select multiple="multiple">', '</select>' ],
    thead : [ 1, '<table>', '</table>' ],
    tr : [ 2, '<table><tbody>', '</tbody></table>' ],
    col : [ 2, '<table><tbody></tbody><colgroup>', '</colgroup></table>' ],
    td : [ 3, '<table><tbody><tr>', '</tr></tbody></table>' ]
};

const rtag = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i; // eslint-disable-line

wrap.optgroup = wrap.option;
wrap.tbody = wrap.tfoot = wrap.colgroup = wrap.caption = wrap.thead;
wrap.th = wrap.td;


var create = html => {
    const frag = document.createDocumentFragment();
    const tag = ( rtag.exec( html ) || [ '', '' ] )[ 1 ];
    const wr = wrap[ tag ] || wrap.$default;
    let node = document.createElement( 'div' );
    let depth = wr[ 0 ];
    node.innerHTML = wr[ 1 ] + html + wr[ 2 ];
    while( depth-- ) node = node.lastChild;
    let child;
    while( ( child = node.firstChild ) ) {
        frag.appendChild( child );
    }
    return frag;
}

var remove = node => {
    if( node.remove ) {
        return node.remove();
    }
    const parentNode = node.parentNode;
    parentNode && parentNode.removeChild( node );
}

var isString = str => typeof str === 'string' || str instanceof String;

var replace = ( node, oldNode ) => {
    if( isString( node ) ) {
        node = create( node );
    }
    const parentNode = oldNode.parentNode;
    return parentNode && parentNode.replaceChild( node, oldNode );
};

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

var addClass = ( el, classname ) => {
    if( Array.isArray( classname ) ) {
        classname = classname.join( ' ' );
    }

    const result = el.className + ' ' + classname;
    const arr = result.split( /\s+/ );

    const unique = [];

    for( let item of arr ) {
        unique.push( item );
    }

    el.className = unique.join( ' ' ).trim();
    return el;
};

var removeClass = ( el, classname ) => {
    if( !Array.isArray( classname ) ) {
        classname = classname.split( /\s+/ );
    }

    const exists = el.className.split( /\s+/ );

    for( let i = 0, l = exists.length; i < l; i += 1 ) {
        if( classname.indexOf( exists[ i ] ) > -1 ) {
            exists.splice( i--, 1 );
        }
    }
    el.className = exists.join( ' ' );
    return el;
};

var index = { create, remove, replace, traverse, addClass, removeClass };

module.exports = index;
