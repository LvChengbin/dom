import isFunction from '@lvchengbin/is/src/function';
import isString from '@lvchengbin/is/src/string';

/**
 * Implementation of the Element.prototype.matches function which can be used cross platforms.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 *
 * @param {Element|String} elem
 * @param {String} Selector
 *
 * @return {Bool}
 */
export default ( elem, selector ) => {

    const funcs = [ 'matches', 'msMatchesSelector', 'mozMatchesSelector', 'webkitMatchesSelector', 'oMatchesSelector' ];

    elem = isString( elem ) ? document.querySelector( elem ) : elem;

    for( const func of funcs ) {
        if( isFunction( elem[ func ] ) ) {
            return elem[ func ]( selector );
        }
    }

    const matches = ( elem.document || elem.ownerDocument ).querySelectorAll( selector );

    for( const match of matches ) {
        if( match === elem ) return true;
    }

    return false;
};
