import addClass from './add-class';
import removeClass from './remove-class';

export default elem => {
    const parentNode = elem.parentNode;
    if( !parentNode ) return;

    const classname = 'temporary-classname-for-reapinting-element-in-ie8';
    addClass( parentNode, classname );
    removeClass( parentNode, classname );
};
