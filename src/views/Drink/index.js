import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Drink.module.scss';
import request from '../../utils/request';
import Header from '../../components/Header';
import OrderModal from '../../components/OrderModal';

const cx=classNames.bind(styles);

function Drink() {
    const [data, setData] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const fetchApi = async () => {
            await request
                .get(`/drink/${id}`)
                .then((res) => {
                    setData(res.data.drink[0])
                })
            // setName(data.category.name!==undefined ? data.category.name : '');
        }
        
        fetchApi();
    }, [])

    return (
        <>
            <Header />
            <main className={`container`}>
                <div className='row justify-content-center'>
                    <div className={`col-sm-10 ${cx('nav')}`}>
                    
                        <Link className={cx('link')} to='/'>Trang chủ</Link>
                        &gt;
                        <Link className={cx('link')} to='/menu'>MENU</Link>
                        &gt;
                        {data.name}
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className='col-sm-5 text-center'>
                                <img className={cx('image')} src={data.image} alt='drink' />
                            </div>
                            <div className={`col ${cx('info')}`}>
                                <p className={cx('name')}>{data.name}</p>
                                <p className={cx('desc')}>Mô tả: {data.description}</p>
                                <p className={cx('price')}>Giá tiền: {data.price}.000 đ</p>
                                <OrderModal name={data.name} price={data.price} />
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className={`col-sm-10 text-center ${cx('text')}`}>
                                Giao hàng tận nơi trong khu vực quận Ninh Kiều và quận Cái Răng, thành phố Cần Thơ<br/>
                                Hân hạnh được phục vụ quý khách!
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
    )
}

export default Drink
