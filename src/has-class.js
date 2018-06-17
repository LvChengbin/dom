const hasClass = ( el, classname ) => {
    if( Array.isArray( classname ) ) {
        for( let item of classname ) {
            if( !hasClass( el, item ) ) return false;
        }
        return true;
    }

    const classlist = el.className.split( /\s+/ );
    return classlist.indexOf( classname ) > -1;
};

export default hasClass;
