import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './InputSearch.module.scss';

const cx = classNames.bind(styles)

function InputSearch() {
    const [valueSearch, setValueSearch] = useState('');

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (valueSearch.length > 0){
            navigate(`/search/${valueSearch}`);
            setValueSearch('');
        }
        
    }
   
    return (
        <Form className={`d-flex ${cx('searchForm')}`} onSubmit={(e) => handleSearch(e)}>
            <Form.Control
                type="search"
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
                placeholder="Tìm kiếm"
                className={cx('searchInput')}
            />
            <span className={cx('searchSpan')}></span>
            <Button 
                className={cx('btnSearch')} 
                variant="outline-dark"
                onClick={handleSearch}
            >
                <FaSearch />
            </Button>
        </Form>
    )
}

export default InputSearch
