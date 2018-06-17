import isFunction from '@lvchengbin/is/src/function';
import addEventListener from '../src/add-event-listener';
import removeEventListener from '../src/remove-event-listener';

document.body.innerHTML += `
    <div id="a"></div>
    <div id="b"></div>
    <div id="c"></div>
    <ul>
        <li>xxx</li>
        <li>xxx</li>
    </ul>
    <ol>
        <li>xxx</li>
        <li>xxx</li>
    </ol>
    <div class="x"></div>
    <div class="x"></div>
`;

const a = document.querySelector( '#a' );

describe( 'addEventListener', () => {
    it( 'addEventListener to an element', done => {

        addEventListener( '#a', 'click', e => {
            expect( e.target ).toEqual( a );
            expect( e.currentTarget ).toEqual( a );
            done();
        } )

        a.click();
    } );

    it( 'addEventListener to multiple elements with a css selector', done => {
        const li = document.querySelector( 'ul li' );

        addEventListener( 'ul li', 'click', e => {
            expect( e.target ).toEqual( li );
            expect( e.currentTarget ).toEqual( li );
            done();
        } )

        li.click();
    } );

    it( 'e.target & e.currentTarget', done => {
        const li = document.querySelector( 'ol li' );

        addEventListener( 'ol', 'click', e => {
            expect( e.currentTarget ).toEqual( document.querySelector( 'ol' ) );
            expect( e.target ).toEqual( li );
            done();
        } )

        li.click();
    } );

    it( 'e.preventDefault', done => {
        const b = document.querySelector( '#b' );
        addEventListener( b, 'click', e => {
            expect( isFunction( e.preventDefault ) ).toBeTruthy();
            done();
        } )
        b.click();
    } );
} );

describe( 'removeEventListener', () => {
    it( 'removeEventListener from an element', () => {
        let i = 0;
        const handler = () => i++;
        addEventListener( '#c', 'click', handler );
        removeEventListener( '#c', 'click', handler );
        a.click();
        expect( i ).toEqual( 0 );
    } );

    it( 'removeEventListener from mutliple elements', () => {
        let i = 0;
        const handler = () => i++;
        addEventListener( '.x', 'click', handler );
        removeEventListener( '.x', 'click', handler );
        document.querySelectorAll( '.x' )[ 0 ].click();
        document.querySelectorAll( '.x' )[ 1 ].click();
        expect( i ).toEqual( 0 );

    } );
} );
