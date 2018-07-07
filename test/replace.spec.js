import create from '../src/create';
import replace from '../src/replace';

describe( 'replace', () => {
    it( 'replace a node', () => {
        const node = create( '<div><p></p></div>' ).firstChild;
        replace( create( '<i></i>' ).firstChild, node.querySelector( 'p' ) );
        expect( node.firstChild.nodeName ).toEqual( 'I' );
    } );

    it( 'replace by a fragment', () => {
        const node = create( '<div><p></p></div>' ).firstChild;
        replace( create( '<i></i>' ), node.querySelector( 'p' ) );
        expect( node.firstChild.nodeName ).toEqual( 'I' );
    } );
} );
