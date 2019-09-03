<template>
    <div class="cart-step-1">
        <ul class="table-title">
            <li class="cart-col-1 col-1 d-none d-lg-block">
                <b>STT</b>
            </li>
            <li class="cart-col-2 col-8 col-lg-5">
                <b>Tên mặt hàng</b>
            </li>
            <li class="cart-col-3 col-2 d-none d-lg-block">
                <b>Đơn giá</b>
            </li>
            <li class="cart-col-4 col-2 d-none d-lg-block">
                <b>Số lượng</b>
            </li>
            <li class="cart-col-5 col-4 col-lg-2">
                <b>Thành tiền</b>
            </li>
        </ul>
        <ul class="cart-item">
            <li class="cart-col-1 col-1 d-none d-lg-block">
                <span>1</span>
            </li>
            <li class="cart-col-2 col-8 col-lg-5 p-cart-info">
                <img src="images/item-demo.png" alt="">
                <p>
                    <a href="#" class="p-name">City Skin Overnight Detox Moisturizer</a>
                    <a href="javascript:;" class="p-del-cart"><i class="fa fa-trash" aria-hidden="true"></i>Xóa</a>
                </p>
                <div class="p-cart-info-price d-block d-lg-none">
                    
                    <p><b>Giá: </b><span class="d-inline-block">15000đ</span></p>
                    <p>
                        <b>Số lượng: </b>
                        <input type="number" value="1" min="1">
                    </p>
                </div>
            </li>
            <li class="cart-col-3 col-2 d-none d-lg-block p-cart-price">
                <span>15000đ</span>
            </li>
            <li class="cart-col-4 col-2 p-cart-quantity d-none d-lg-block">
                <input type="number" value="1" min="1">
            </li>
            <li class="cart-col-5 col-4 col-lg-2 p-cart-total">
                <b>30000đ</b>
            </li>
        </ul>
        <ul class="cart-item">
            <li class="cart-col-1 col-1 d-none d-lg-block">
                <span>1</span>
            </li>
            <li class="cart-col-2 col-8 col-lg-5 p-cart-info">
                <img src="images/item-demo.png" alt="">
                <p>
                    <a href="#" class="p-name">City Skin Overnight Detox Moisturizer</a>
                    <a href="javascript:;" class="p-del-cart"><i class="fa fa-trash" aria-hidden="true"></i>Xóa</a>
                </p>
                <div class="p-cart-info-price d-block d-lg-none">
                    <span>15000đ</span>
                    <input type="number" value="1" min="1">
                </div>
            </li>
            <li class="cart-col-3 col-2 d-none d-lg-block p-cart-price">
                <span>15000đ</span>
            </li>
            <li class="cart-col-4 col-2 p-cart-quantity d-none d-lg-block">
                <input type="number" value="1" min="1">
            </li>
            <li class="cart-col-5 col-4 col-lg-2 p-cart-total">
                <b>30000đ</b>
            </li>
        </ul>
        <ul class="total-cart row flex-row-reverse">
            <li class="col-6 col-lg-2 text-right"><b>120.000đ</b></li>
            <li class="col-6 col-lg-2"><b>Tổng tiền:</b></li>
        </ul>
        <div class="text-right">
            <a href="#" class="btn-order">THANH TOÁN</a>
        </div>
    </div>
</template>
