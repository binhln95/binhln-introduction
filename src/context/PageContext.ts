import { createContext, useState } from 'react';

export const PageContext = createContext<IPageContext>({});

interface IPageContext {
    currentPage?: ICurrentPage;
    setCurrentPage?: React.Dispatch<React.SetStateAction<ICurrentPage | undefined>>
}

export type ICurrentPage = 'Home' | 'About' | 'Resume' | 'UploadConfig'

export const initializeContext = () => {
    const [currentPage, setCurrentPage] = useState<ICurrentPage>();
    const response: IPageContext = {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage
    }
    return response;
}