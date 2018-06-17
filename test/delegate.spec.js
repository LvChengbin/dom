import delegate from '../src/delegate';


describe( 'delegate', () => {
    const body = document.body;

    body.innerHTML += `
        <div class="link"></div>
        <input id="input" />
    `;

    it( 'click', done => {

        const link = document.querySelector( '.link' );
        delegate( body, '.link', 'click', e => {
            expect( e.target ).toEqual( link );
            expect( e.currentTarget ).toEqual( body );
            expect( e.boundTarget ).toEqual( link );
            done();
        } );

        link.click();
    } );


    it( 'focus', done => {
        const input = document.querySelector( 'input' );
        delegate( body, 'input', 'focus', e => {
            expect( e.target ).toEqual( input );
            expect( e.currentTarget ).toEqual( body );
            expect( e.boundTarget ).toEqual( input );
            done();
        } );

        input.focus();
    } );
} );
