import isString from '@lvchengbin/is/src/string';
import addEventListener from './add-event-listener';
import contains from './contains';
import matches from './matches';

export default ( elem, selector, eventType, handler ) => {
    const useCapture = {
        focus : true,
        blur : true,
        load : true
    };

    elem = isString( elem ) ? document.querySelector( elem ) : elem;

    addEventListener( elem, eventType, function( e ) {
        let node = e.target;
        while( node ) {
            if( matches( node, selector ) && contains( node, elem ) ) {
                e.boundTarget = node;
                handler.call( this, e );
                break;
            }
            node = node.parentNode;
            if( !node || node === elem ) break;
        }
    }, useCapture[ eventType ] );
}
