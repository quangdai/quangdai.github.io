<template>
    <header>
        <div class="header-top container">
            <div class="row align-items-center align-items-lg-start">
                <div class="local-store">
                    <a href="javascript:;" class="show-local-store"><i class="fa fa-map-marker" aria-hidden="true"></i> Hệ thống 15 cửa hàng WT</a>
                </div>
                <a href="/" class="logo"><img src="images/logo.png" alt=""></a>
                <div class="header-top-link">
                    <a href="#" class="top-link-item"><i class="fa fa-user" aria-hidden="true"></i></a>
                    <a href="#" class="top-link-item"><i class="fa fa-shopping-bag" aria-hidden="true"></i><span class="cart-counter">0</span></a>
                    <div class="language">
                        <a href="#" class="language-item language-vn active"></a>
                        <a href="#" class="language-item language-en"></a>
                    </div>
                    <a href="tel:02437569675" class="hotline w-100">Hotline: <span>024 37569675</span></a>
                </div>
                <div class="menu-bar d-block d-lg-none">
                    <a href="javascript:;" class="js-show-meni-mobile"><i class="fa fa-bars" aria-hidden="true"></i></a>
                </div>
                <div class="header-top-link header-top-link_mobile">
                    <a href="#" class="top-link-item"><i class="fa fa-user" aria-hidden="true"></i></a>
                    <a href="#" class="top-link-item js-show-search"><i class="fa fa-search" aria-hidden="true"></i></a>
                    <a href="#" class="top-link-item"><i class="fa fa-shopping-bag" aria-hidden="true"></i><span class="cart-counter">0</span></a>
                </div>
            </div>
        </div>
        <div class="menu-main-fixed">
            <div class="header-main container">
                <nav class="menu-wrap">
                    <div class="border-bottom d-flex d-lg-none justify-content-between align-items-center pr-3">
                        <a href="javascript:;" class="d-inline-block d-lg-none btn-menu-show text-gray px-3 py-3 js-hide-menu"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                        <div class="language-mobile">
                            <a href="#" class="language-item language-vn active"></a>
                            <a href="#" class="language-item language-en"></a>
                        </div>
                    </div>
                    <ul class="menu">
                        <li class="home menu-item"><a href="/"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                        <li class="menu-item"><a href="#">Bộ sưu tập</a></li>
                        <li class="menu-item has-child">
                            <a href="javascript:;">sản phẩm</a>
                            <div class="child-main-menu">
                                <ul class="child-main-list">
                                    <li>
                                        <strong>Nam <i class="fa fa-angle-right" aria-hidden="true"></i></strong>
                                        <ul>
                                            <li><a href="#">New</a></li>
                                            <li><a href="#">Túi</a></li>
                                            <li><a href="#">Ví</a></li>
                                            <li><a href="#">Dây lưng</a></li>
                                            <li><a href="#">Sẩn phẩm cao cấp</a></li>
                                            <li><a href="#" class="menu-red">Special Price</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Nữ <i class="fa fa-angle-right" aria-hidden="true"></i></strong>
                                        <ul>
                                            <li><a href="#">New</a></li>
                                            <li><a href="#">Túi</a></li>
                                            <li><a href="#">Ví</a></li>
                                            <li><a href="#">Dây lưng</a></li>
                                            <li><a href="#">Sẩn phẩm cao cấp</a></li>
                                            <li><a href="#" class="menu-red">Special Price</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Phụ kiện <i class="fa fa-angle-right" aria-hidden="true"></i></strong>
                                        <ul>
                                            <li><a href="#">New</a></li>
                                            <li><a href="#">Túi</a></li>
                                            <li><a href="#">Ví</a></li>
                                            <li><a href="#">Dây lưng</a></li>
                                            <li><a href="#">Sẩn phẩm cao cấp</a></li>
                                            <li><a href="#" class="menu-red">Special Price</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item"><a href="#">tin tức</a></li>
                        <li class="menu-item"><a href="#" class="menu-red">sale</a></li>
                        <li class="menu-item"><a href="#">liên hệ</a></li>
                        <li class="menu-item"><a href="#">câu chuyện wt</a></li>
                    </ul>
                </nav>
                <div class="form-search">
                    <form action="">
                        <input type="text" placeholder="Bạn tìm gì?">
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="header-bot">
            <div class="container">
                <p>Miễn phí vận chuyển TẤT CẢ CÁC ĐƠN HÀNG trên Toàn quốc <a href="#">Chi tiết</a></p>
            </div>
        </div>
    </header>
</template>