import { useState, useEffect, createContext } from 'react';
import classNames from 'classnames/bind';

import request from '../../utils/request';
import styles from './Menu.module.scss';
import Header from '../../components/Header';
import MenuCard from '../../components/MenuCard';
import PaginationComponent from '../../components/PaginationComponent';

const cx = classNames.bind(styles);
const dataContext = createContext();

function Menu() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // number of items on a page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchApi = async () => {
            await request
                .get('/drink')
                .then((res) => {
                    setData(res.data.drinks);
                })
        }
        fetchApi();
    }, [])

    return (
        <>
            <Header />
            <dataContext.Provider value={data}>
                <main className={`container`}>
                    <h2 className={`${cx('title')} text-center`}>MENU</h2>
                    <div className={cx('listCard')}>
                        <MenuCard data={currentItems} />
                    </div>
                    <PaginationComponent
                        itemsPerPage={itemsPerPage}
                        totalItems={data.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </main>
            </dataContext.Provider>
        </>
    )
}

export { dataContext }
export default Menu
