import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import request from '../../utils/request';
import styles from './Home.module.scss';
import Header from '../../components/Header';
import CarouselAds from '../../components/CarouselAds';
import DrinkCard from '../../components/DrinkCard';

const cx = classNames.bind(styles);

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            await request
                .get('/drink')
                .then((res) => {
                    setData(res.data.drinks);
                })
            setLoading(false);
        }
        fetchApi();
    }, [])

    return (
        <>
            <Header />
            <main className='container'>
                <CarouselAds />
                <h2 className={cx('title')}>SẢN PHẨM NỔI BẬT</h2>
                <div className={cx('listCard')}>
                    <DrinkCard data={data} loading={loading} />
                </div>
            </main>
        </>
        
    )
}

export default Home
