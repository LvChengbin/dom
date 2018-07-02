import isString from '@lvchengbin/is/src/string';
import create from './create';

export default ( node, oldNode ) => {
    const parentNode = oldNode.parentNode;
    return parentNode && parentNode.replaceChild( node, oldNode );
};
