import create from '../src/create';
import removeClass from '../src/remove-class';

describe( 'removeClass', () => {
    const node = create( '<div class="c1 c2 c3 c4 c5 c6 c7 c8 c9 c10"></div>' ).firstChild;
    it( 'remove a classname', () => {
        removeClass( node, 'c1' );
        expect( node.className ).toEqual( 'c2 c3 c4 c5 c6 c7 c8 c9 c10' );
    } );

    it( 'remove classnames with a string', () => {
        removeClass( node, 'c2 c3 c4' );
        expect( node.className ).toEqual( 'c5 c6 c7 c8 c9 c10' );
    } );

    it( 'remove classnames with an array', () => {
        removeClass( node, [ 'c5', 'c6', 'c7' ] );
        expect( node.className ).toEqual( 'c8 c9 c10' );
    } );

    it( 'remove non-existent classname', () => {
        removeClass( node, [ 'c5', 'c6', 'c7' ] );
        expect( node.className ).toEqual( 'c8 c9 c10' );
    } );
} );
