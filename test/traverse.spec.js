import create from '../src/create';
import traverse from '../src/traverse';

describe( 'traverse', () => {
    it( 'traverse a node', () => {
        const d = create( '<div><ul><li><span>Jaunty</span></li></ul></div>' );
        const nodes = [];
        traverse( d.firstChild, node => {
            nodes.push( node.nodeName );
        } );
        expect( nodes ).toEqual( [ 'DIV', 'UL', 'LI', 'SPAN', '#text' ] );
    } );

    it( 'traverse a node list', () => {
        const d = create( `
            '<li><p></p></li>',
            '<li><p></p></li>',
            '<li><p></p></li>'
        ` );
        const nodes = [];
        traverse( d.children, node => {
            nodes.push( node.nodeName );
        } );

        expect( nodes ).toEqual( [ 'LI', 'P', 'LI', 'P', 'LI', 'P' ] );
    } );

    it( 'traverse a documentFragement', () => {
        const d = create( '<div><ul><li><span>Jaunty</span></li></ul></div>' );
        const nodes = [];
        traverse( d, node => {
            nodes.push( node.nodeName );
        } );
        expect( nodes ).toEqual( [ 'DIV', 'UL', 'LI', 'SPAN', '#text' ] );
    } );
} );
