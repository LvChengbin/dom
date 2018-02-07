export default ( el, classname ) => {
    if( Array.isArray( classname ) ) {
        classname = classname.join( ' ' );
    }

    const result = el.className + ' ' + classname;
    const arr = result.split( /\s+/ );

    const unique = [];

    for( let item of arr ) {
        unique.push( item );
    }

    el.className = unique.join( ' ' ).trim();
    return el;
};
