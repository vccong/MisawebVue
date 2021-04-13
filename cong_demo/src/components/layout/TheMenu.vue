<template>
  <div>
      <div class="navbar">
        <div class="logo-site">
            <div class="logo-box">
                <a href="" class="toggle-icon"></a>
                <div class="amis-logo">
                    <a href="">
                        <img src="https://actappg1.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg" alt="">
                    </a>
                </div>               
            </div>
        </div>
        <div class="navbar-content">
            <div class="nav-item-large">
                <router-link class="nav-item nav-item-employee" >
                <div class="nav-item-icon nav-item-1"></div>
                <div class="nav-item-text">Tổng quan</div>
                </router-link>
            </div>
            <div class="nav-item-large">
                <router-link class="nav-item">
                <div class="nav-item-icon nav-item-2"></div>
                <div class="nav-item-text">Mua hàng</div>
                </router-link>
            </div>
            <div class="nav-item-large">
                <router-link class="nav-item">
                <div class="nav-item-icon nav-item-3"></div>
                <div class="nav-item-text">Bán hàng</div>
            </router-link>
            </div>
            <div class="nav-item-large">
                <router-link class="nav-item" to="/danh-muc/khach-hang">
                <div class="nav-item-icon nav-item-4"></div>
                <div class="nav-item-text">Nhân viên</div>
                </router-link>
            </div>
            <div class="nav-item-large">
                <router-link class="nav-item">
                <div class="nav-item-icon nav-item-5"></div>
                <div class="nav-item-text">Kho</div>
                </router-link>
            </div>
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
    width: 178px;
    background-color: #393a3d;
    border-right: 1px solid #d4d7dc;
    height: 100vh;
    float: left;
    color: #ffffff;
}

.navbar .logo-box {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}



/* logo page */

.navbar .logo-box .toggle-icon {
    width: 24px;
    height: 24px;
    background: url('../../assets/img/Sprites.svg') no-repeat -424px -86px;
    margin-right: 10px;
}

.navbar .logo-box .amis-logo {
    width: 96px;
    height: 32px;
    display: flex;
    align-items: center;
    margin-top: 5px;
}

.navbar .logo-box .amis-logo img{
    height: 32px;
}

.navbar .navbar-content {
    width: 100%;
    height: calc(100vh - 62px);
    padding-top: 14px;
}

.navbar .navbar-content .nav-item {
    line-height: 42px;
    height: 42px;
    border-left: 6px solid transparent;
    padding-left: 8px;
    color: #fff;
    position: relative;
    display: flex;
    cursor: pointer;
}

.nav-item .nav-item-icon {
    width: 24px;
    height: 24px;
    /* margin: auto 0; */
    align-self: center;
    margin-right: 8px;
}

.nav-item-large:hover {
    background-color: #616164;
    color: #f1f1f1;
    cursor: pointer;
}

.nav-item-large:focus {
    background-color: #616164;
    cursor: pointer;
}

.nav-item-1 {
    background: url('../../assets/img/Sprites.svg') no-repeat -30px -1630px;

}

.nav-item-2 {
    background: url('../../assets/img/Sprites.svg') no-repeat -161px -1628px;

}

.nav-item-3 {
    background: url('../../assets/img/Sprites.svg') no-repeat -204px -1628px;

}

.nav-item-4 {
    background: url('../../assets/img/Sprites.svg') no-repeat -117px -1662px;

}

.nav-item-5 {
    background: url('../../assets/img/Sprites.svg') no-repeat -291px -1628px;

}
</style>