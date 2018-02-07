import is from '@lvchengbin/is';
import create from '../src/create';

describe( 'dom.create', () => {
    it( 'simple', () => {
        expect( create( '<div></div>' ).nodeType ).toEqual( 11 );
        expect( create( '<table></table>' ).nodeType ).toEqual( 11 );
        expect( create( '<td></td>' ).nodeType ).toEqual( 11 );
        expect( create( '<li></li>' ).nodeType ).toEqual( 11 );
        expect( create( '<div></div>' ).firstChild.nodeName ).toEqual( 'DIV' );
        expect( create( '<table></table>' ).firstChild.nodeName ).toEqual( 'TABLE' );
        expect( create( '<td></td>' ).firstChild.nodeName ).toEqual( 'TD' );
        expect( create( '<li></li>' ).firstChild.nodeName ).toEqual( 'LI' );
        expect( create( '<span></span><img />' ).firstChild.nodeName ).toEqual( 'SPAN' );
        expect( create( '<span></span><img />' ).lastChild.nodeName ).toEqual( 'IMG' );
    } );

    it( 'nested dom', () => {
        const node = create( `
            <div>
                <p>
                    <span>
                        <b>bold</b>
                    </span>
                </p>
                <p>
                    <span>
                        <i>italic</i>
                    </span>
                </p>
            </div>
        ` );
        expect( node.querySelectorAll( 'p' ).length ).toEqual( 2 );
        expect( node.querySelectorAll( 'span' ).length ).toEqual( 2 );
        expect( node.querySelector( 'i' ).textContent ).toEqual( 'italic' );
    } );

    it( 'multiple nodes', () => {
        const node = create( `
            <li>1</li>
            <li>2</li>
            <li>3</li>
        ` );

        expect( node.children.length ).toEqual( 3 );
        expect( node.querySelectorAll( 'li' ).length ).toEqual( 3 );
    } );

    it( 'text node', () => {
        const node = create( 'text' );
        expect( is.textNode( node.firstChild ) ).toBeTruthy();
    } );
} );
