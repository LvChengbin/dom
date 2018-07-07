import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default [ {
    input : 'src/index.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } )
    ],
    output : [
        { file : 'dist/dom.cjs.js', format : 'cjs' },
        { file : 'dist/dom.js', format : 'umd', name : 'dom' }
    ]
}, {
    input : 'src/index.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } ),
        buble( {
            transforms : {
                arrow : true,
                dangerousForOf : true
            }
        } )
    ],
    output : [
        { file : 'dist/dom.bc.js', format : 'umd', name : 'dom' }
    ]
} ];
