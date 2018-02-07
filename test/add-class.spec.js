import create from '../src/create';
import addClass from '../src/add-class';

describe( 'addClass', () => {
    const node = create( '<div></div>' ).firstChild;

    it( 'add the first classname', () => {
        addClass( node, 'c1' );
        expect( node.className ).toEqual( 'c1' );
    } );

    it( 'add a new classname', () => {
        addClass( node, 'c2' );
        expect( node.className ).toEqual( 'c1 c2' );
    } );

    it( 'add multiple classnames with an array', () => {
        addClass( node, [ 'c3', 'c4' ] );
        expect( node.className ).toEqual( 'c1 c2 c3 c4' );
    } );

    it( 'add multiple classnames with a string1', () => {
        addClass( node, 'c5          c6' );
        expect( node.className ).toEqual( 'c1 c2 c3 c4 c5 c6' );
    } );
} );
