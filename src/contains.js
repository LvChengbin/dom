import isString from '@lvchengbin/is/src/string';

export default ( elem, container, acceptEqual = true ) => {
    elem = isString( elem ) ? document.querySelector( elem ) : elem;
    if( acceptEqual && container === elem ) return true;
    return !!( container.compareDocumentPosition( elem ) & 16 );
}
