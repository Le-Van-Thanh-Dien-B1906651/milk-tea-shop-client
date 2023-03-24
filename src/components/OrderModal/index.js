import { useState, useEffect } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { IoAddOutline } from 'react-icons/io5';
import classNames from "classnames/bind";

import request from '../../utils/request';
import { address } from "../../public/adress";
import styles from './OrderModal.module.scss';

const cx=classNames.bind(styles);

const OrderModal = ({ name, price }) => {
    const [show, setShow] = useState(false);
    const [wards, setWards] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [drinkAddIndex, setDrinkAddIndex] = useState(-1);
    const [drinksOrder, setDrinksOrder] = useState([]);
    const [totalAmount, setTotalAmount] = useState(price);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (value) => {
        if (value==='')
            setWards([]);
        else setWards(address[value-1].ward);
        
    }

    const handeAdd = () => {
        if (drinkAddIndex==='-1') return;
        const drinkOrder = {
            name: drinks[drinkAddIndex].name,
            price: drinks[drinkAddIndex].price
        }
        setDrinksOrder([...drinksOrder, drinkOrder]);
        // setTotalAmount(totalAmount+drinkOrder.price);
    }

    useEffect(() => {
        const fetchApi = async () => {
            await request
                .get('/drink')
                .then((res) => {
                    setDrinks(res.data.drinks);
                })
        }

        fetchApi();
    }, [])

    return (
        <>
            <p 
                className={cx('btnOrder')}
                onClick={handleShow}
            >
                Đặt hàng
            </p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className={cx('header')} closeButton>
                    <Modal.Title className='text-danger'>Giao Hàng Tận Nơi - Miễn Phí</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={() => alert('Đặt hàng thành công! Nhân viên của chúng tôi sẽ gọi điện xác nhận đơn hàng trong ít phú nữa, hân hạnh được phục vụ quý khách!')}>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Quận/Huyện</Form.Label>
                                <Form.Select 
                                    id='district' 
                                    onChange={() => handleSelect(document.getElementById('district').value)}
                                    required
                                >
                                    <option value="">Chọn quận/huyện</option>
                                    {address.map(district => {
                                        return (
                                            <option key={district.id} value={district.id}>
                                                {district.name}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group> 

                            <Form.Group as={Col} >
                                <Form.Label>Phường/Xã</Form.Label>
                                <Form.Select required>
                                    <option value="">Chọn Phường/Xã</option>
                                    {wards.map(ward => {
                                        return (
                                            <option key={ward.id} value={ward.id}>
                                                {ward.name}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>                        
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type='text' placeholder="Tên đường, số nhà, khu vực,..." required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control required type="text" placeholder="Nguyễn Văn A" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Giới Tính</Form.Label>
                                <Form.Select required>
                                    <option value=''>Chọn giới tính</option>
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control required type="text" placeholder="09392xxxx1" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Nội dung</Form.Label>
                            <Row className="align-items-center">
                                <Col xs={8}>
                                    {name}
                                </Col>
                                
                                <Col>
                                    {price}.000 đ
                                </Col>
                            </Row>
                            {drinksOrder.map((drink, index) => {
                                return (
                                    <Row key={index} className="align-items-center">
                                        <Col xs={8}>
                                            {drink.name}
                                        </Col>
                                        
                                        <Col>
                                            {drink.price}.000 đ
                                        </Col>
                                    </Row>
                                )
                            })}
                            
                            <Row className={`mb-3 ${cx('wrapperAdd')}`}>
                                    <Form.Group as={Col} xs={8}>
                                        <Form.Label>Thêm sản phẩm</Form.Label>
                                        <Form.Select
                                            value={drinkAddIndex}
                                            onChange={(e) => setDrinkAddIndex(e.target.value)}
                                        >
                                            <option value={-1}>Chọn sản phẩm</option>
                                            {drinks.map((drink, index) => {
                                                return (
                                                    <option key={index} value={index}>{drink.name}</option>
                                                )
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <Form.Label>&nbsp;</Form.Label>
                                        <div className={cx('btnAdd')} onClick={handeAdd} >
                                            <IoAddOutline />Thêm
                                        </div>
                                    </Form.Group>
                                </Row>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control as="textarea" />
                        </Form.Group>
                            <Button variant="light" type='submit' className={cx('btnOrder')}>
                                Đặt hàng
                            </Button>
                    </Form>
                </Modal.Body>
                
            </Modal>
        </>
        )
}

export default OrderModal
