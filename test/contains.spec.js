import contains from '../src/contains';
import create from '../src/create';

describe( 'contains', () => {
    const body = document.body;

    body.appendChild( create( `
        <div id="z">
            <div id="zz"></div>
        </div>
    `) );
    const z = document.querySelector( '#z' );
    const zz = document.querySelector( '#zz' );
    it( 'contains', () => {
        zz.parentNode.parentNode && expect( contains( zz, body ) ).toBeTruthy();
        expect( contains( zz, z ) ).toBeTruthy();
        expect( contains( body, zz ) ).toBeFalsy();
        expect( contains( zz, zz, false ) ).toBeFalsy();
    } );

    it( 'contains or equal', () => {
        expect( contains( zz, zz ) ).toBeTruthy();
        expect( contains( body, body ) ).toBeTruthy();
    } );
} );
