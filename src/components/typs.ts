import { ICurrentPage } from "../context/PageContext";

export const getSectionClass = (page: ICurrentPage) => {
    let className = '';
    switch(page) {
        case 'Home' :
            className = 'hero section dark-background';
            break;
        case 'About' :
            className = 'about section';
            break;
        case 'Resume' :
            className = 'resume section';
            break
        default :
            className = 'hero section dark-background';
            break;
    }
    return className;
}