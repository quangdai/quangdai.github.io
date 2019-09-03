<template>
    <div class="product-description">
        <h2 class="name-product">Giày da bò Nam</h2>
        <div class="code">
            <strong>Mã</strong>: 4102
        </div>
        <div class="price">
            <span class="price-discount">2.250.000 đ</span>
            <span class="price-cost">3.250.000 đ</span>
        </div>
        <!-- <div class="desc-product-detail">
            <ul class="list-unstyled">
                <li>Chất liệu: da bò nguyên vân tự nhiên – lớp lót trong bằng da lợn</li>
                <li>Màu sắc: Nâu</li>
                <li>Đế cao su công nghệ mới. (cao 2.5 cm)</li>
                <li>Kích thước: Size 38 đến 42</li>
                <li>Phong cách thoải mái, đơn giản với điểm nhấn là chi tiết dây đính khoá.</li>
                <li>Sản xuất và thiết kế độc quyền bởi WT-Việt Nam</li>
                <li>Bảo hành da (nổ vỡ) phủ xi,keo đế không thời hạn</li>
                <li>Đổi sản phẩm mới nguyên tem mác,hóa đơn trong 5 ngày</li>
            </ul>
        </div> -->
        <p class="desc-title color">Màu sắc</p>
        <ul class="choose-color list-unstyled list-inline-item">
            <li> <label class="">
                    <input type="checkbox">
                    <span class="checkmark bg-color-1"></span>
                </label></li>
            <li> <label class="">
                    <input type="checkbox">
                    <span class="checkmark bg-color-2"></span>
                </label></li>
            <li> <label class="">
                    <input type="checkbox">
                    <span class="checkmark bg-color-3"></span>
                </label></li>
            <li> <label class="">
                    <input type="checkbox">
                    <span class="checkmark bg-color-4"></span>
                </label></li>
        </ul>
        <p class="desc-title size">
            Kích thước
            <a href="javascript:;" class="guide-calculator-size">Hướng dẫn tính size</a>
        </p>
        <ul class="choose-size list-inline">
            <li class="list-inline-item"> <label> <input type="radio"  name="radio"> <span> 39 </span></label> </li>
            <li class="list-inline-item"> <label> <input type="radio"  name="radio"> <span> 40 </span></label> </li>
            <li class="list-inline-item"> <label> <input type="radio"  name="radio"> <span> 41</span></label> </li>
            <li class="list-inline-item"> <label> <input type="radio" name="radio"> <span> 42 </span></label> </li>
            <li class="list-inline-item"> <label> <input type="radio"  name="radio"> <span> 43</span></label> </li>
        </ul>

        <div class="d-flex mb-3">
            <div class="sumary">
                <div class="qty">
                    <button class="icon minus">-</button>
                    <input type="number" class="count" name="qty" value="0" >
                    <button class="icon plus">+</button>
                </div>
            </div>
            <button class="btn btn-block buy-now">Thêm vào giỏ hàng</button>
        </div>
        <div class="store">
            <div class="amount-store">
                <img src="images/icon-shop.png" alt=""> có tại <strong>64</strong> cửa hàng
            </div>
            <div class="view-lists">
                <a href=""> Xem danh sách</a>
            </div>
        </div>
        <div class="product-tabs">
            <button class="accordion"><span class="desc-title">Mô tả</span></button>
            <div class="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button class="accordion"><span class="desc-title">Chính sách vận chuyển & đổi trả</span></button>
            <div class="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button class="accordion"><span class="desc-title">Hướng dẫn bảo quản</span></button>
            <div class="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
</template>