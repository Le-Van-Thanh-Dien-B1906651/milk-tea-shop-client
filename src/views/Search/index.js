import { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import request from '../../utils/request';
import Header from '../../components/Header';
import MenuCard from '../../components/MenuCard';
import PaginationComponent from '../../components/PaginationComponent';

const cx=classNames.bind(styles);
const dataContext = createContext();

function Search() {
    const [searchResult, setSearchResult] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // number of items on a page
    
    const { query } = useParams();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResult.slice(indexOfFirstItem, indexOfLastItem);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchApi = async () => {
            await request
                .get(`/drink/search?q=${query}`)
                .then((res) => {
                    setSearchResult(res.data.searchResult);
                })
        }

        fetchApi();
    }, [query])

    return (
        <>
            <Header />
            <dataContext.Provider value={searchResult} >
                <main className='container'>
                    <p className={cx('title')}>Kết quả tìm kiếm: '{query}'</p>
                    <div className={cx('content')}>
                        <MenuCard data={currentItems} />
                    </div>
                    {Math.ceil(searchResult.length/itemsPerPage)>1 && <PaginationComponent
                        itemsPerPage={itemsPerPage}
                        totalItems={searchResult.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />}
                </main>
            </dataContext.Provider >
        </>
    )
}

export default Search