import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames/bind';

import InputSearch from '../InputSearch';
import logo from '../../public/logo.png';
import styles from './Header.module.scss';

const cx = classNames.bind(styles)

function Header() {
    
    return (
            <header className={`${cx('header')} container`}>
                <div className={cx('bgHeader')}>
                    <img src={logo} className={cx('logo')} alt='logo' />
                </div>
                <Navbar style={{ background: 'green' }} expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to='/' className={cx('textMenu')}>TRANG CHỦ</Link>
                                <Link to='/about' className={cx('textMenu')}>GIỚI THIỆU</Link>
                                <Link to='/menu' className={cx('textMenu')}>MENU</Link>
                                <Link to='/discount' className={cx('textMenu')}>KHUYẾN MÃI</Link>
                                <Link to='/news' className={cx('textMenu')}>TIN TỨC</Link>
                                <Link to='/contact' className={cx('textMenu')}>LIÊN HỆ</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <InputSearch />
                    </Container>
                </Navbar>

            </header>
    )
}

export default Header
