const handlers = [];

function find( handler, element ) {
    for( const item of handlers ) {
        if( item.handler === handler && item.element === element ) {
            return item;
        }
    }
    return false;
}

function wrap( handler, element ) {
    const data = find( handler, element );

    if( data ) {
        return data.wrappedHandler;
    }
    const wrappedHandler = function( e ) {
        // to correct the target property for old IE browsers.
        e.target || ( e.target = e.srcEelement );

        // to correct the currentTarget property for old IE browsers.
        e.currentTarget || ( e.currentTarget = element );

        // there is not a "preventDefault" method in IE8.
        if( !e.preventDefault ) {
            e.preventDefault = function() {
                e.returnValue = false;
            }
        }

        handler( e );
    };

    handlers.push( {
        wrappedHandler,
        handler,
        element
    } );

    return wrappedHandler;
}

function remove( handler, element ) {
    for( let i = 0, l = handlers.length; i < l; i += 1 ) {
        const item = handlers[ i ];

        if( item.handler === handler && item.element === element ) {
            handlers.splice( i--, 1 );
            l--;
            return item;
        }
    }

    return false;
}

export { find, wrap, remove };
