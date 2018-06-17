import create from '../src/create';
import hasClass from '../src/has-class';

describe( 'hasClass', () => {
    const node = create( '<div class="a b c d e f g"></div>' ).firstChild;

    it( 'to check if a single classname exists', () => {
        expect( hasClass( node, 'a' ) ).toBeTruthy();
        expect( hasClass( node, 'x' ) ).toBeFalsy();
    } );

    it( 'to check a class list exists', () => {
        expect( hasClass( node, [ 'a', 'b' ] ) ).toBeTruthy();
        expect( hasClass( node, [ 'a', 'x' ] ) ).toBeFalsy();
    } );
} );
