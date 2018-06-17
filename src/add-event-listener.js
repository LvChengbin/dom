import isNode from '@lvchengbin/is/src/node';
import isObject from '@lvchengbin/is/src/object';
import { wrap } from './event-handlers';

const addEventListener = ( elem, type, handler, useCapture = false ) => {
    if( isNode( elem ) ) {
        const wrappedHandler = wrap( handler, elem );

        if( elem.addEventListener ) {
            return elem.addEventListener( type, wrappedHandler, useCapture );
        }
        return elem.attachEvent( 'on' + type, wrappedHandler );
    }

    if( isObject( elem ) ) {
        for( let i = 0, l = elem.length; i < l; i += 1 ) {
            addEventListener( elem[ i ], type, handler, useCapture );
        }
        return;
    }

    const elems = document.querySelectorAll( elem );

    for( let i = 0, l = elems.length; i < l; i += 1 ) {
        addEventListener( elems[ i ], type, handler, useCapture );
    }
}

export default addEventListener;
