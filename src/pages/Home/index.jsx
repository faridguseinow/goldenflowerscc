import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';

//Import Components
import Button from '@/components/Button/Index';
import Slider from '@/components/Slider/index';
import MapSVG from '@/assets/media/images/materials/world_map.png';
import AboutVid from '@/assets/media/video/about_vid.mp4';
// import QRcodeVid from '@/assets/media/video/GFCC-QR-video.mp4';
import { Helmet } from 'react-helmet';

//Import Images
import GFCCphone from '@/assets/media/images/materials/iphone_gfcc.png'
import GFCCqr from '@/assets/media/images/materials/gfcc_app_qr.png'

//Import Utils
import { useTranslation } from 'react-i18next';

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';
import ParallaxText from '@/components/Parallax';

const Index = () => {
    const { t, i18n } = useTranslation();

    let sliderMainOptions = [
        {
            img: 'https://sun9-51.userapi.com/impg/PxZkPrrOjVZzit2tlatNh64gPFZ4QFcFBUde4A/_GaNmEAc2YI.jpg?size=1280x853&quality=95&sign=0fb842027c86b8a967d963500b4e8c96&type=album'
        },
        {
            img: 'https://sun9-52.userapi.com/impg/0NzSz2zT8HymeJpIW9MIuKqe0DBaYk4-lyGuWA/BqLfctZ4fSg.jpg?size=1280x853&quality=95&sign=dede5b363a7217c0cc9a1fa8c9320e5f&type=album'
        },
        {
            img: 'https://sun9-24.userapi.com/impg/tF3TEh2LLcPSiMWxEuSWKphQyWscnyXjlO-OQQ/lD7NM1PxWLM.jpg?size=1080x720&quality=95&sign=213cc431d5836b35402ef0392d8be844&type=album'
        },
        {
            img: 'https://sun9-29.userapi.com/impg/if-3JNyfbIVZ3rWDy5jfqckIwwrNq6q4eA8tQQ/Bx-5mfiFXOk.jpg?size=1080x720&quality=95&sign=f3138b6260d632ab4cb231ca7894d0a0&type=album'
        },
        {
            img: 'https://sun9-40.userapi.com/impg/akYge6qrzYj03BwbGHgjgerHROKE4UM_r8b11g/07z2pBdjBhY.jpg?size=1080x720&quality=95&sign=ce6c4286caca4b4ae1d7bff842fc9aef&type=album'
        },
        {
            img: 'https://sun9-19.userapi.com/impg/AM_HAknMYE7Pjbo0dNGj4nOCqXRxSPMckK52Dw/-aw_sXoTmmU.jpg?size=1080x720&quality=95&sign=dbb654a650778a6a7d8e0b4e12cd8cb2&type=album'
        }
    ]

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="home_page_container">

            <Helmet>
                <title>Golden Flowers Cash&Carry - Home</title>
                <link rel="canonical" href="http://gfcc.ru/" />
            </Helmet>

            <header>

                <video playsInline src={AboutVid} autoPlay muted loop></video>

                <div className="header_slogan">
                    <p className='p1'>{t('home.headerDesc1')}</p>
                    <p className='p2'>{t('home.headerDesc2')}</p>

                    <div className="yandex_otziv">
                        <iframe src="https://yandex.ru/sprav/widget/rating-badge/57660294184?type=award"></iframe>

                        {/* <a href="https://yandex.ru/maps/org/golden_flowers/57660294184/reviews/?ll=37.765846%2C55.564916&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=16" target='_blank'>
                            <span>
                                <svg width="170" height="170" viewBox="120 0 150 248" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M119.701 215.006l.076-.034.069-.047c1.212-.808 2.667-1.334 4.169-1.334 1.364 0 2.654.444 3.793 1.122l.049.029.052.024c3.478 1.567 6.973 3.096 10.465 4.623 7.547 3.301 15.079 6.596 22.403 10.259 1.414.865 3.078 1.322 4.822 1.322a9.36 9.36 0 0 0 9.371-9.377l.03-153.51v0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0C175 39.826 152.162 17 124.016 17c-28.147 0-50.985 22.857-50.985 51.023V68.113L73 221.623A9.36 9.36 0 0 0 82.37 231c1.768 0 3.395-.498 4.81-1.316 7.24-3.622 14.693-6.867 22.161-10.12a1008.05 1008.05 0 0 0 10.36-4.558z" fill="#fff" stroke="#EBEBEB" stroke-width="2">
                                    </path>
                                    <path d="M139.533 170.852c.242 0 .47-.042.684-.125a1.69 1.69 0 0 0 .585-.405c.167-.176.302-.385.404-.627a2.28 2.28 0 0 0 .154-.864 2.24 2.24 0 0 0-.154-.85 1.883 1.883 0 0 0-.404-.628 1.63 1.63 0 0 0-.585-.376 1.79 1.79 0 0 0-1.38 0 1.659 1.659 0 0 0-.572.376 1.883 1.883 0 0 0-.404.628 2.24 2.24 0 0 0-.154.85c0 .325.052.613.154.864.102.242.237.451.404.627.167.177.358.312.572.405.223.083.455.125.696.125zm0 1.743c-.52 0-1.012-.084-1.477-.251a3.818 3.818 0 0 1-1.213-.753 3.594 3.594 0 0 1-.822-1.185 4.038 4.038 0 0 1-.293-1.575c0-.576.098-1.092.293-1.547.204-.465.478-.86.822-1.185a3.612 3.612 0 0 1 1.213-.739 4.115 4.115 0 0 1 1.477-.265c.521 0 1.009.088 1.464.265.465.167.869.414 1.213.739a3.5 3.5 0 0 1 .836 1.185c.205.455.307.971.307 1.547 0 .585-.102 1.11-.307 1.575-.195.465-.469.86-.822 1.185a3.62 3.62 0 0 1-1.213.753 4.337 4.337 0 0 1-1.478.251z" fill="#000">
                                    </path>
                                    <path d="M135.49 165.235v1.631h-2.188v5.589h-1.938v-5.589h-2.146v-1.631h6.272z" fill="#000">
                                    </path>
                                    <path d="M126.303 172.595a4.495 4.495 0 0 1-1.575-.265 3.693 3.693 0 0 1-1.226-.739 3.404 3.404 0 0 1-.781-1.171 4.17 4.17 0 0 1-.279-1.561c0-.567.093-1.083.279-1.547.195-.465.465-.86.808-1.185a3.713 3.713 0 0 1 1.255-.753 4.468 4.468 0 0 1 1.617-.279c.418 0 .794.042 1.129.126.344.083.637.19.878.32v1.757a2.518 2.518 0 0 0-.836-.419 3.115 3.115 0 0 0-.962-.153c-.65 0-1.18.191-1.589.572-.4.381-.599.882-.599 1.505 0 .325.051.623.153.892.111.26.265.483.46.669.195.186.423.335.683.446.269.103.562.154.878.154.316 0 .632-.047.948-.14.316-.093.609-.237.878-.432v1.659c-.223.167-.52.302-.892.404-.372.093-.781.14-1.227.14z" fill="#000">

                                    </path>
                                    <path d="M118.763 172.595a4.79 4.79 0 0 1-1.645-.265 3.575 3.575 0 0 1-1.226-.767 3.395 3.395 0 0 1-.781-1.171 4.23 4.23 0 0 1-.265-1.519c0-.586.098-1.111.293-1.575.204-.465.474-.86.808-1.185a3.692 3.692 0 0 1 1.185-.753 3.93 3.93 0 0 1 1.436-.265c.511 0 .98.098 1.408.293.437.186.799.46 1.087.822.298.363.511.813.641 1.352.14.53.172 1.139.098 1.827h-4.921c.121.473.367.864.739 1.17.381.298.906.447 1.575.447.409 0 .823-.056 1.241-.168a3.295 3.295 0 0 0 1.059-.502v1.534c-.297.213-.687.39-1.171.529a5.943 5.943 0 0 1-1.561.196zm-.265-6.008a1.49 1.49 0 0 0-1.059.404c-.288.26-.483.613-.586 1.059h3.095c-.028-.418-.167-.766-.418-1.045-.251-.279-.595-.418-1.032-.418z" fill="#000">
                                    </path>
                                    <path d="M107.466 165.235l1.951 4.126 2.036-4.126h2.355l.014 7.22h-1.937v-4.725l-1.98 4.168h-1.31l-1.868-4.21v4.767h-1.673v-7.22h2.412z" fill="#000">
                                    </path><path d="M151.019 160.595c-.614 0-1.162-.089-1.645-.265a3.58 3.58 0 0 1-1.227-.767 3.395 3.395 0 0 1-.781-1.171 4.252 4.252 0 0 1-.264-1.519c0-.586.097-1.111.292-1.575.205-.465.474-.86.809-1.185a3.692 3.692 0 0 1 1.185-.753 3.925 3.925 0 0 1 1.435-.265c.511 0 .981.098 1.408.293.437.186.799.46 1.088.822.297.363.511.813.641 1.352.139.53.172 1.139.097 1.827h-4.92c.121.473.367.864.739 1.17.381.298.906.447 1.575.447.409 0 .822-.056 1.24-.168a3.3 3.3 0 0 0 1.06-.502v1.534c-.298.213-.688.39-1.171.529a5.949 5.949 0 0 1-1.561.196zm-.265-6.008c-.418 0-.772.134-1.06.404-.288.26-.483.613-.585 1.059h3.094c-.027-.418-.167-.766-.418-1.045-.251-.279-.595-.418-1.031-.418z" fill="#000">

                                    </path>
                                    <path d="M143.423 160.595c-.614 0-1.162-.089-1.645-.265a3.59 3.59 0 0 1-1.227-.767 3.409 3.409 0 0 1-.781-1.171 4.252 4.252 0 0 1-.264-1.519c0-.586.097-1.111.292-1.575.205-.465.474-.86.809-1.185a3.692 3.692 0 0 1 1.185-.753 3.925 3.925 0 0 1 1.435-.265c.512 0 .981.098 1.408.293.437.186.8.46 1.088.822.297.363.511.813.641 1.352.139.53.172 1.139.097 1.827h-4.92c.121.473.367.864.739 1.17.381.298.906.447 1.575.447.409 0 .822-.056 1.24-.168a3.3 3.3 0 0 0 1.06-.502v1.534c-.298.213-.688.39-1.171.529a5.949 5.949 0 0 1-1.561.196zm-.265-6.008c-.418 0-.772.134-1.06.404-.288.26-.483.613-.585 1.059h3.094c-.027-.418-.167-.766-.418-1.045-.251-.279-.594-.418-1.031-.418z" fill="#000">

                                    </path>
                                    <path d="M128.012 153.235h1.938v5.589h2.342v-5.589h1.937v5.589h2.328v-5.589h1.938v7.22h-10.483v-7.22z" fill="#000"></path><path d="M123.178 158.852c.241 0 .469-.042.683-.125a1.69 1.69 0 0 0 .585-.405 2.05 2.05 0 0 0 .404-.627c.103-.251.154-.539.154-.864a2.22 2.22 0 0 0-.154-.85 1.868 1.868 0 0 0-.404-.628 1.63 1.63 0 0 0-.585-.376 1.792 1.792 0 0 0-1.38 0 1.668 1.668 0 0 0-.572.376 1.883 1.883 0 0 0-.404.628 2.24 2.24 0 0 0-.153.85c0 .325.051.613.153.864.102.242.237.451.404.627.168.177.358.312.572.405.223.083.455.125.697.125zm0 1.743a4.337 4.337 0 0 1-1.478-.251 3.83 3.83 0 0 1-1.213-.753 3.609 3.609 0 0 1-.822-1.185 4.038 4.038 0 0 1-.293-1.575c0-.576.098-1.092.293-1.547.204-.465.479-.86.822-1.185a3.622 3.622 0 0 1 1.213-.739 4.116 4.116 0 0 1 1.478-.265 4 4 0 0 1 1.463.265c.465.167.869.414 1.213.739a3.5 3.5 0 0 1 .836 1.185c.205.455.307.971.307 1.547 0 .585-.102 1.11-.307 1.575-.195.465-.469.86-.822 1.185a3.62 3.62 0 0 1-1.213.753 4.331 4.331 0 0 1-1.477.251z" fill="#000">

                                    </path>
                                    <path d="M112.986 153.235l.042.961a2.745 2.745 0 0 1 1.032-.808 3.224 3.224 0 0 1 1.38-.293c.436 0 .855.079 1.254.237.4.149.753.377 1.06.683.306.307.548.688.724 1.143.186.456.279.981.279 1.575 0 .632-.102 1.19-.307 1.673a3.618 3.618 0 0 1-.78 1.199 3.307 3.307 0 0 1-1.115.739 3.26 3.26 0 0 1-1.241.251 3.36 3.36 0 0 1-1.254-.223 2.98 2.98 0 0 1-.976-.628v3.178h-1.938v-9.687h1.84zm3.806 3.61c0-.325-.051-.618-.154-.878a2.002 2.002 0 0 0-.404-.655 1.69 1.69 0 0 0-.585-.405 1.895 1.895 0 0 0-1.422 0 1.759 1.759 0 0 0-.6.419 1.88 1.88 0 0 0-.418.655 2.319 2.319 0 0 0-.153.878c0 .334.051.632.153.892.102.26.242.479.418.655.177.167.377.297.6.39.223.093.46.14.711.14.251 0 .488-.047.711-.14.223-.093.418-.227.585-.404.167-.186.302-.404.404-.655a2.41 2.41 0 0 0 .154-.892z" fill="#000">

                                    </path>
                                    <path d="M106.312 158.852c.241 0 .469-.042.683-.125a1.69 1.69 0 0 0 .585-.405 2.07 2.07 0 0 0 .405-.627 2.28 2.28 0 0 0 .153-.864 2.24 2.24 0 0 0-.153-.85 1.885 1.885 0 0 0-.405-.628 1.63 1.63 0 0 0-.585-.376 1.792 1.792 0 0 0-1.38 0 1.668 1.668 0 0 0-.572.376 1.883 1.883 0 0 0-.404.628 2.24 2.24 0 0 0-.153.85c0 .325.051.613.153.864.102.242.237.451.404.627.168.177.358.312.572.405.223.083.455.125.697.125zm0 1.743a4.337 4.337 0 0 1-1.478-.251 3.83 3.83 0 0 1-1.213-.753 3.624 3.624 0 0 1-.822-1.185 4.038 4.038 0 0 1-.293-1.575c0-.576.098-1.092.293-1.547.205-.465.479-.86.822-1.185a3.622 3.622 0 0 1 1.213-.739 4.116 4.116 0 0 1 1.478-.265 4 4 0 0 1 1.463.265c.465.167.869.414 1.213.739.353.325.632.72.837 1.185.204.455.306.971.306 1.547 0 .585-.102 1.11-.306 1.575-.196.465-.47.86-.823 1.185a3.62 3.62 0 0 1-1.213.753 4.331 4.331 0 0 1-1.477.251z" fill="#000">

                                    </path>
                                    <path d="M99.325 155.298l3.262 5.157h-2.342l-2.328-3.68-2.37 3.68h-2.02l3.33-5.116-3.121-4.864h2.37l2.16 3.429 2.216-3.429h2.007l-3.164 4.823z" fill="#000">

                                    </path>
                                    <path d="M155.289 173.61c1.55-1.659 5.851-4.339 10.529-.256-2.511 2.786-6.824 3.729-10.529.256z" fill="#FC0">

                                    </path>
                                    <path d="M160.414 169.225c1.264-4.034 5.436-5.384 8.796-3.374-.89 3.498-5.056 5.667-8.796 3.374z" fill="#FC0">

                                    </path>
                                    <path d="M163.578 164.046c-.537-4.73 2.506-7.31 6.216-7.078.858 4.164-2.266 7.258-6.216 7.078z" fill="#FC0">

                                    </path>
                                    <path d="M163.834 157.914c-2.67-3.709-2.15-6.898 1.558-9.568 2.67 3.709 2.151 6.898-1.558 9.568z" fill="#FC0">

                                    </path>
                                    <path d="M92.71 173.61c-1.55-1.659-5.85-4.339-10.528-.256 2.511 2.786 6.824 3.729 10.529.256z" fill="#FC0">

                                    </path>
                                    <path d="M87.586 169.225c-1.264-4.034-5.436-5.384-8.796-3.374.89 3.498 5.055 5.667 8.796 3.374z" fill="#FC0">

                                    </path>
                                    <path d="M84.422 164.046c.537-4.73-2.506-7.31-6.216-7.078-.858 4.164 2.266 7.258 6.216 7.078z" fill="#FC0">

                                    </path>
                                    <path d="M84.166 157.914c2.67-3.709 2.15-6.898-1.558-9.568-2.67 3.709-2.15 6.898 1.558 9.568z" fill="#FC0">

                                    </path>
                                    <path d="M123.999 27.96c-22.153 0-40.124 17.97-40.124 40.124 0 11.065 4.498 21.096 11.741 28.361 7.265 7.265 24.371 17.781 25.384 28.826.148 1.647 1.352 2.999 2.999 2.999s2.851-1.352 2.999-2.999c1.013-11.045 18.098-21.54 25.363-28.805 7.264-7.286 11.762-17.317 11.762-28.382 0-22.153-17.971-40.125-40.124-40.125z" fill="#F43">

                                    </path>
                                    <path d="M123.999 81.81c-7.581 0-13.726-6.145-13.726-13.726 0-7.582 6.145-13.727 13.726-13.727 7.582 0 13.727 6.145 13.727 13.727 0 7.581-6.145 13.727-13.727 13.727z" fill="#fff">

                                    </path>

                                    <p color='#000'>2025</p>

                                </svg>
                            </span>
                        </a> */}

                    </div>
                </div>

            </header>

            <div className="gfccapp_container">

                <div className="gfccapp_inner">

                    <div className="gfccapp_left">

                        <div className="gfccapp_text">
                            <h3 className='desktop_text'>{t('home.qrHeader')}</h3>
                            <p>
                                {t('home.qrtext1')}<br />
                                {t('home.qrtext2')}<br />
                                {t('home.qrtext3')}<br />
                                {t('home.qrtext4')}<br />
                                {t('home.qrtext5')}<br />
                                {t('home.qrtext6')}<br />
                                {t('home.qrtext7')}<br />
                            </p>
                        </div>

                        <div className="gfccapp_qr">
                            <img src={GFCCqr} alt="GFCC QR Code" />
                        </div>


                    </div>

                    <div className="gfccapp_middle">
                        <img
                            src={GFCCphone}
                            alt="GFCC app preview"
                        />
                    </div>

                    {/* <div className="gfccapp_right">
                        <video playsInline src={QRcodeVid} autoPlay muted loop></video>
                    </div> */}


                </div>
            </div>

            <div className="about_wrapper">
                <div className="about_wrapper_inner">

                    <div className="left_content">
                        <img src="https://avatars.mds.yandex.net/get-altay/13237301/2a0000019016f360369bf0ac99d20eb87a79/XXXL" alt="" />
                    </div>
                    <div className="right_content">
                        <p className='content_title'>{t('home.aboutSection.title')}</p>

                        <span className='content_desc'>{t('home.aboutSection.desc')}</span>

                        <div className="content_button">
                            <Button
                                btnText={t('home.aboutSection.btnText')}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/about'}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="main_title_wrapper">
                <div className="main_slogan">

                    <div className="main_slogan_text">
                        <h1>{t('home.collectionSection.title')}</h1>
                        <p>{t('home.collectionSection.desc')}</p>
                        <div className="content_button">
                            <Button
                                btnText={t('home.collectionSection.btnText')}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/about'}
                            />
                        </div>
                    </div>

                </div>
                <div className="slide_wrapper">
                    <Slider
                        loop={true}
                        options={sliderMainOptions}
                    />
                </div>
            </div>

            <div className="scroller_container">
                <h1>{t('home.marqueeSection.title')}</h1>
                <div className="scroller_departments">

                    <div className="scroll_flowers scroll_parts">
                        <div className="scroller_text">
                            <h1>{t('home.marqueeSection.flowers')}</h1>
                        </div>

                        <ParallaxText baseVelocity={-1} size={2}>
                            <img src="https://sun9-48.userapi.com/impg/nMctEaxRZdeF4u3ad-nnx4aH06fvtGNBVzAWiw/4qNNq6-VWP4.jpg?size=1080x720&quality=95&sign=6961a86d4edb0d31f7e8b4d1295badf1&type=album" />
                            <img src="https://sun9-40.userapi.com/impg/1ENGAYDDpURdfP4tKwQJFr0Xe7iHKlM5R5ozwQ/XcJlM2tCL6U.jpg?size=1080x720&quality=95&sign=ede28e0ac82d593a3f7c4f32ec257897&type=album" />
                            <img src="https://sun9-22.userapi.com/impg/9sKkMp-lAaxDiQUqr0hXWvi2nPOjZXUtQO7QXA/cKfXbojIP6A.jpg?size=1080x720&quality=95&sign=c5c4e2fbbcc17fda22009b9412cddf72&type=album" />
                            <img src="https://sun9-15.userapi.com/impg/xvDeQLcCHmOfwY2Xnsw5eadfdj_Uyu_7HMbFcQ/zBYQhowM-fw.jpg?size=1080x720&quality=95&sign=6e131275efe20b7edda90aa959611ff3&type=album" />
                            <img src="https://sun9-21.userapi.com/impg/arYn0Oo2rzIy09CoQ58jlmEceElVpzsXeZQihg/IcWy4X15pi4.jpg?size=1080x720&quality=95&sign=c4ab4e5f38c73529eb38cb214f516fd0&type=album" />
                            <img src="https://sun9-7.userapi.com/impg/wf18sBd9iZtg_KVymP6C_dAtgXA9s2PwOE5zhQ/uF06sgrQF1Y.jpg?size=1080x721&quality=95&sign=9ddbd63ebceeed218b2eaa5e212788dd&type=album" />
                            <img src="https://sun9-42.userapi.com/impg/GcEbFo0ambtlcUOZ8FXccdpsDJM6L_2cDOj8ZQ/SEog1xdbFq0.jpg?size=1080x720&quality=95&sign=06b2b544d815bf3df841a4e14b4def72&type=album" />
                            <img src="https://sun9-44.userapi.com/impg/WIVU5U5_MLd-1h-EkDVbahNXn0Z00Aahsj_B9w/kxSW1BGXo98.jpg?size=1080x720&quality=95&sign=cb76ec7275dc3862029dab3fea764963&type=album" />
                        </ParallaxText>
                    </div>

                    <div className="scroll_plants scroll_parts">
                        <ParallaxText baseVelocity={1} size={2}>
                            <img src="https://sun9-34.userapi.com/impg/1R5J3N2P5dbh20e4THF4I_df9_MYlyFNaN6iZQ/-DvJaU3lgac.jpg?size=1080x720&quality=95&sign=cd52d4ac54a7096e55d3255ba9911923&type=album" />
                            <img src="https://sun9-54.userapi.com/impg/dEYVhkKVYhfv5n1GtqvnPIfC83khj3w2FZZ4Mw/eXfLzvJLtSc.jpg?size=1080x720&quality=95&sign=4aa9df82d16419e4c7c21814b276914f&type=album" />
                            <img src="https://sun9-26.userapi.com/impg/Ux1bIswMAsx5cJuDCOyhOVRh0R4iEPnmAnxaFg/c52T3tfATFY.jpg?size=1080x720&quality=95&sign=ec89164171e9f51760f45a117bdbf011&type=album" />
                            <img src="https://sun9-80.userapi.com/impg/wCpJPkYemI6V8nZl2p9NOn8Mxs7sLNPF9Ao6mg/yahR2arSSW0.jpg?size=1080x720&quality=95&sign=e88a5bf10f434e81b3ad75df0750b531&type=album" />
                            <img src="https://sun9-1.userapi.com/impg/Ekqc3MyVhPa5rJITw149XXX4gkqUNe73cTpbqA/9RgV5lC2Nfc.jpg?size=1080x720&quality=95&sign=ba625321c16f08a073d0e4c7b6eddd37&type=album" />
                            <img src="https://sun9-65.userapi.com/impg/MoWU_g5dqcq7mY1D0kTEBkALTFrRhOrxacqkog/56UYe9qq0gc.jpg?size=1080x720&quality=95&sign=3df65d793c6dce32c9d17e096e48a703&type=album" />
                            <img src="https://sun9-43.userapi.com/impg/ELqkySzfWawwvgbldNI_GDgglvGRXpxo0n5yOA/1wGEGuEQ6KE.jpg?size=1080x720&quality=95&sign=bb6aeac8156d8bd5210fa4468de26784&type=album" />
                            <img src="https://sun9-18.userapi.com/impg/31yuM9aK2E5keNQj-TMqQG0Sk9xPlZttYbKDGg/7aMhXcdVyFQ.jpg?size=1080x720&quality=95&sign=5d2e6abc21fe19940ea25d410cdead7d&type=album" />
                        </ParallaxText>

                        <div className="scroller_text">
                            <h1>{t('home.marqueeSection.plants')}</h1>
                        </div>
                    </div>

                    <div className="scroll_accessories scroll_parts">
                        <div className="scroller_text">
                            <h1>{t('home.marqueeSection.accessories')}</h1>
                        </div>

                        <ParallaxText baseVelocity={-1} size={2}>
                            <img src="https://sun9-35.userapi.com/impg/xV-bwTCjzCyRUkAm2bawKS6VzHKJ-2OQAZHL1g/V-g7OucFuT8.jpg?size=1080x720&quality=95&sign=7893ae8957527f4c89ca97be863408ed&type=album" />
                            <img src="https://sun9-65.userapi.com/impg/PiG_CJClmW03ttlJ3nIh0ujga2lENQ1HISZsbw/2TXiywq56JE.jpg?size=1080x720&quality=95&sign=15f783bdb1e386d19d7379e5acb51c7e&type=album" />
                            <img src="https://sun9-22.userapi.com/impg/VvHm-8nVEnStN0Dp8ovhmttKRNutvp76aXj9wg/TsdL8PbslDI.jpg?size=1080x720&quality=95&sign=8e55367911e5e5fa6381a9cff3b43d29&type=album" />
                            <img src="https://sun9-79.userapi.com/impg/4EftWAYK4nnwT77RogS6G7rw0ORyudCyvidRPg/OM1gkXErFMI.jpg?size=1080x720&quality=95&sign=40be25d2701cb2b9535f04fd424d1dc8&type=album" />
                            <img src="https://sun9-42.userapi.com/impg/xaPAdb3rX0iFAZY2y23ny_LLyE33pqMOV7LyAg/VbsjP3bVF6g.jpg?size=1080x720&quality=95&sign=5b3973438055dd29264e83a515a056a6&type=album" />
                            <img src="https://sun9-11.userapi.com/impg/IZ3s0jAoR7oBo8bIuk865oflzkKjyH27dygR4Q/uYej2KtgoAI.jpg?size=1080x720&quality=95&sign=e9074ff5b7dd88232247b4ea2d4eb6af&type=album" />
                            <img src="https://sun9-3.userapi.com/impg/udA-zjSJ33wVL5T93qrATllWm_OUM86UKY_cvQ/ott_3BiUH_0.jpg?size=1080x720&quality=95&sign=2443a4a63ab2fe3bdfd6943f9225fdde&type=album" />
                            <img src="https://sun9-69.userapi.com/impg/16bVlWcD2mGxzQBiiKpl0uctGHsjjQzMSSj1Kg/Poo-gM-_obE.jpg?size=1080x720&quality=95&sign=465568ebb5a4b0f9a74f64c86b029c01&type=album" />
                        </ParallaxText>
                    </div>
                </div>
            </div>

            <div className="home_map_wrapper">
                <div className='map'>
                    <img src={MapSVG} />
                    <div className='map_wrapper'>
                        <div className="map_wrapper_text">
                            <span>{t('home.supplierSection.title')}</span>
                            <p>{t('home.supplierSection.desc')}</p>
                            <div className="content_button">
                                <Button
                                    btnText={t('home.supplierSection.btnText')}
                                    className={'btn btn_white hover_gold'}
                                    icon={'arrow-right'}
                                    href={'/suppliers'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="yandex_container">
                <div className='reviews_forms'>
                    <iframe className="reviews" src="https://yandex.ru/maps-reviews-widget/57660294184?comments"></iframe>
                    <iframe className="yandex_forms" src="https://forms.yandex.ru/u/678c1a1990fa7b0b411c1639/?iframe=1" frameborder={0} width={650}></iframe>
                </div>

            </div> */}
        </motion.div>
    )
}

export default Index