export default ( el, classname ) => {
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
