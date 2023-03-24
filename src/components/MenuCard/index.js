import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames/bind';

import styles from './MenuCard.module.scss';

const cx = classNames.bind(styles);

function MenuCard({ data, loading }) {
    const navigate = useNavigate();

    let twoColumns = [];
    let rows = [];

    if (loading)
        return (
            <h2>Loading . . . . .</h2>
        )

    for (let i=0; i<data.length; i+=2){
        let Item = [];
        for (let j=i; j<i+2; j++) {
            if (data[j] !== undefined) {
                let html = (
                    <div key={j} className='col-6'>
                        <Card className={cx('card')} onClick={() => navigate(`/drink/${data[j]._id}`)} >
                            <Card.Img letiant="top" src={data[j].image} />
                            <Card.Body>
                                <Card.Title className={cx('title')} >{data[j].name}</Card.Title>
                                <Card.Text className={cx('price')}>
                                    {data[j].price}.000 đ
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
                Item.push(html)
            }
        }
        twoColumns.push(Item);
    }
    for (let i=0; i<twoColumns.length; i+=2){
        let Item = [];
        let html1 = (
            <div className='col-sm-6'>
                <div className='row'>
                    {twoColumns[i]!==undefined && twoColumns[i].map(card => {
                        return (
                            card
                        )
                    })}
                </div>
            </div>
        )
        let html2 = (
            <div className='col-sm-6'>
                <div className='row'>
                    {twoColumns[i+1]!==undefined && twoColumns[i+1].map(card => {
                        return (
                            card
                        )
                    })}
                </div>
            </div>
        )
        Item = (
            <div key={i} className='row'>
                {html1}
                {html2}
            </div>
        )
        rows.push(Item);
    }

    return (
        <div className='row'>
            <div className='col-12'>
                {rows.map(row => {
                    return row;
                })}
            </div>
        </div>
    )
}

export default MenuCard
