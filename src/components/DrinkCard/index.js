
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames/bind';

import styles from './DrinkCard.module.scss';

const cx = classNames.bind(styles);

function DrinkCard({ data, loading }) {
    let drinks = [];
    const navigate = useNavigate();

    if (loading)
        return (
            <h2>Loading . . . . .</h2>
        )

    data.forEach(item => {
        if (item.category.name !== 'TOPPING'){
            drinks.push(item);
        }
    })
    let twoColumns = [];
    let rows = [];

    for (let i=0; i<drinks.length; i+=2){
        let Item = [];
        for (let j=i; j<i+2; j++) {
            if (drinks[j] !== undefined) {
                if (drinks[j].category.name==='TOPPING') continue;
                let html = (
                    <div key={j} className='col-6'>
                        <Card className={cx('card')} onClick={() => navigate(`/drink/${drinks[j]._id}`)} >
                            <Card.Img variant="top" src={drinks[j].image} />
                            <Card.Body>
                                <Card.Title className={cx('title')} >{drinks[j].name}</Card.Title>
                                <Card.Text className={cx('price')}>
                                    {drinks[j].price}.000 đ
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
                Item.push(html);
            }
        }
        if (Item.length === 0) continue;
        else twoColumns.push(Item);
    }
    for (let i=0; i<twoColumns.length; i+=2){
        let Item = [];
        let html1 = (
            <div className='row col-sm-6'>
                {twoColumns[i]!==undefined && twoColumns[i].map(card => {
                    return (
                        card
                    )
                })}
            </div>
        )
        let html2 = (
            <div className='row col-sm-6'>
                {twoColumns[i+1]!==undefined && twoColumns[i+1].map(card => {
                    return (
                        card
                    )
                })}
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
            <div className='col'>
                {rows.map(row => {
                    return row;
                })}
            </div>
        </div>
    )
}

export default DrinkCard
