import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
            jsnext : true
        } ),
        commonjs( {
            sourceMap : false
        } ),
        babel()
    ],
    output : [
        { file : 'dist/dom.bc.js', format : 'umd', name : 'dom' }
    ]
} ];
