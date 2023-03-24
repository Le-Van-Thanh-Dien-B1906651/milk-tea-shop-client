import classNames from 'classnames/bind';

import Header from '../../components/Header';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <Header />
            <main className="container">
                <h2 className={`text-center ${cx('title')}`}>GIỚI THIỆU</h2>
                <div className='row justify-content-center'>
                    <div className={`col-10 text-center ${cx('paragraph')}`}>
                        <b>TRÀ SỮA MỘC</b>  với thương hiệu nhiều năm hoạt động phục vụ khách hàng , luôn cải tiến chất lượng để mang lại hương vị ngon nhất trong từng ly trà.
                        Nhằm phục vụ khách hàng yêu mến, <b>TRÀ SỮA MỘC</b> luôn bổ sung những toping mới lạ, đa dạng cho nhiều sự lựa chọn của khách hàng.
                        Với nguyên liệu được chọn lọc tự nhiên và tỉ mỉ cho ra những thức uống ngon và bổ dưỡng lại an toàn vệ sinh thực phẩm, cam kết chất lượng.
                    </div>
                </div>
                <h3 className={`text-center ${cx('textWrapper')}`}>
                    <div className={cx('textContent')}>Hân hạnh phục vụ quý khách!</div>
                    <div className={cx('textContent')}>Thời gian: 9h00 - 22h00</div>
                </h3>
            </main>
        </>
    )
}

export default About
