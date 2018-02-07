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


export default  html => {
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
