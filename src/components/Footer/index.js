import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx=classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={`container ${cx('footer')}`}>
            <Row className={`${cx('wrapper')} justify-content-center`}>
                <Col xs={4} className={cx('content')} > 
                    CN1: 123, Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ<br/>
                    CN1: 123, Nguyễn Văn Linh, Ninh Kiều, Cần Thơ<br/>
                    CN1: 123, 30/4, Ninh Kiều, Cần Thơ
                </Col>
                <Col xs={4} className={cx('content')} > 
                    Hân hạnh được phục vụ quý khách<br/>
                    Hotline: 0909 212 909 - 0988 292 021<br/>
                    Website: trasuanhalam.vercel.app
                </Col>
            </Row>
        </footer>
    )
}

export default Footer
