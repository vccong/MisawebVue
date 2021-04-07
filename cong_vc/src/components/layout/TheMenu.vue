<template>
  <div class="navbar">
        <div class="logo-site">
            <div class="logo-box">
                <div class="toggle-icon"></div>
                <div class="amis-logo"></div>
            </div>
        </div>
        <div class="navbar-content">
            <router-link class="nav-item nav-item-employee" to="/danh-muc/nhan-vien">
                <div class="nav-item-icon nav-item-1"></div>
                <div class="nav-item-text">Tổng quan</div>
            </router-link>
            <div class="nav-item">
                <div class="nav-item-icon nav-item-2"></div>
                <div class="nav-item-text">Báo cáo</div>
            </div>
            <div class="nav-item">
                <div class="nav-item-icon nav-item-3"></div>
                <div class="nav-item-text">Mua hàng</div>
            </div>
            <router-link class="nav-item" to="/danh-muc/khach-hang">
                <div class="nav-item-icon nav-item-4"></div>
                <div class="nav-item-text">Danh mục khách hàng</div>
            </router-link>
            <div class="nav-item">
                <div class="nav-item-icon nav-item-5"></div>
                <div class="nav-item-text">Thiết lập hệ thống</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    width: 220px;
    background-color: #ffffff;
    border-right: 1px solid #E5E5E5;
    height: 100vh;
    float: left;
}

.navbar .logo-box {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.navbar .logo-box {
    padding-left: 24px;
}


/* logo page */

.navbar .logo-box .toggle-icon {
    width: 30px;
    height: 30px;
    background-image: url('../../assets/img/toggle.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.navbar .logo-box .amis-logo {
    width: 100%;
    height: 30px;
    margin-left: 10px;
    background-image: url('../../assets/img/cukcuk-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.navbar .navbar-content {
    width: 100%;
}

.navbar .navbar-content .nav-item {
    display: flex;
    padding-left: 24px;
    height: 44px;
    line-height: 44px;
    color: black;
    text-decoration: none;
}

.navbar .navbar-content .nav-item:hover {
    background-color: #e5e5e5;
    color: #000000;
    cursor: pointer;
}

.navbar .navbar-content .nav-item:focus-within {
    background-color: #019160;
}
.navbar .navbar-content .nav-item:focus {
    background-color: #019160;
}

.nav-item .nav-item-icon {
    width: 20px;
    height: 20px;
    /* margin: auto 0; */
    align-self: center;
    margin-right: 8px;
}

.nav-item-1 {
    background-image: url(../../assets/icon/dashboard.png);
    background-size: contain;
}

.nav-item-2 {
    background-image: url(../../assets/icon/report.png);
    background-size: contain;
}

.nav-item-3 {
    background-image: url(../../assets/icon/dashboard.png);
    background-size: contain;
}

.nav-item-4 {
    background-image: url(../../assets/icon/dic-employee.png);
    background-size: contain;
}

.nav-item-5 {
    background-image: url(../../assets/icon/setting.png);
    background-size: contain;
}
</style>