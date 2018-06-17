import isNode from '@lvchengbin/is/src/node';
import isObject from '@lvchengbin/is/src/object';
import { find } from './event-handlers';

const removeEventListener = ( elem, type, handler ) => {

    let wrappedHandler = find( handler, elem );

    wrappedHandler = wrappedHandler ? wrappedHandler.wrappedHandler : handler;

    if( isNode( elem ) ) {
        if( elem.removeEventListener ) {
            return elem.removeEventListener( type, wrappedHandler );
        }
        return elem.detachEvent( 'on' + type, wrappedHandler );
    }

    if( isObject( elem ) ) {
        for( let i = 0, l = elem.length; i < l; i += 1 ) {
            removeEventListener( elem[ i ], type, handler );
        }
        return;
    }

    const elems = document.querySelectorAll( elem );

    for( let i = 0, l = elems.length; i < l; i += 1 ) {
        removeEventListener( elems[ i ], type, handler );
    }
};

export default removeEventListener;
