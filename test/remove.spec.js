import create from '../src/create';
import remove from '../src/remove';

describe( 'remove', () => {

    it( 'remove a node from another node', () => {
        const node = create( '<div><p></p></div>' ).firstChild;
        remove( node.querySelector( 'p' ) );
        expect( node.querySelector( 'p' ) ).toEqual( null );
    } );
} );



