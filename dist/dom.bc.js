(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.dom = factory());
}(this, (function () { 'use strict';

var wrap = {
    $default : [ 0, '', '' ],
    option : [ 1, '<select multiple="multiple">', '</select>' ],
    thead : [ 1, '<table>', '</table>' ],
    tr : [ 2, '<table><tbody>', '</tbody></table>' ],
    col : [ 2, '<table><tbody></tbody><colgroup>', '</colgroup></table>' ],
    td : [ 3, '<table><tbody><tr>', '</tr></tbody></table>' ]
};

var rtag = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i; // eslint-disable-line

wrap.optgroup = wrap.option;
wrap.tbody = wrap.tfoot = wrap.colgroup = wrap.caption = wrap.thead;
wrap.th = wrap.td;


function create (html) {
    var frag = document.createDocumentFragment();
    var tag = ( rtag.exec( html ) || [ '', '' ] )[ 1 ];
    var wr = wrap[ tag ] || wrap.$default;
    var node = document.createElement( 'div' );
    var depth = wr[ 0 ];
    node.innerHTML = wr[ 1 ] + html + wr[ 2 ];
    while( depth-- ) { node = node.lastChild; }
    var child;
    while( ( child = node.firstChild ) ) {
        frag.appendChild( child );
    }
    return frag;
}

function remove (node) {
    if( node.remove ) {
        return node.remove();
    }
    var parentNode = node.parentNode;
    parentNode && parentNode.removeChild( node );
}

function replace ( node, oldNode ) {
    var parentNode = oldNode.parentNode;
    return parentNode && parentNode.replaceChild( node, oldNode );
}

function traverse( node, cb ) {
    var nodes;

    if( node.nodeType === 11 ) {
        nodes  = node.children;
    } else if( !node.length ) {
        nodes = [ node ];
    } else {
        nodes = Array.prototype.slice.call( node );
    }
    for( var i = 0, l = nodes.length; i < l; i = i + 1 ) {
        var node$1 = nodes[ i ];
        cb && cb( node$1 );
        if( node$1.nodeType === 1 && node$1.hasChildNodes() ) {
            traverse( node$1.childNodes, cb );
        }
    }
}

function addClass ( el, classname ) {
    if( Array.isArray( classname ) ) {
        classname = classname.join( ' ' );
    }

    var result = el.className + ' ' + classname;
    var arr = result.split( /\s+/ );

    var unique = [];

    for( var i = 0, list = arr; i < list.length; i += 1 ) {
        var item = list[i];

        unique.push( item );
    }

    el.className = unique.join( ' ' ).trim();
    return el;
}

function removeClass ( el, classname ) {
    if( !Array.isArray( classname ) ) {
        classname = classname.split( /\s+/ );
    }

    var exists = el.className.split( /\s+/ );

    for( var i = 0, l = exists.length; i < l; i += 1 ) {
        if( classname.indexOf( exists[ i ] ) > -1 ) {
            exists.splice( i--, 1 );
        }
    }
    el.className = exists.join( ' ' );
    return el;
}

var index = { create: create, remove: remove, replace: replace, traverse: traverse, addClass: addClass, removeClass: removeClass };

return index;

})));
