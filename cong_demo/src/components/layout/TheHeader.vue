<template>
  <div>
      <div class="header">
        <div class="header-left">
            <div class="header-logo"></div>
            <div class="header-branch">
                <div class="header-branch-title">CÔNG TNHH SÀI GÒN BAY</div>
                <a class="header-branch-item">
                    <div></div>
                </a>
            </div>
            <div class="toltip-content">
                <div class="toltip-icon"></div>
                <div class="toltip-title">test_hieu_nang_db</div>
            </div>
        </div>
        <div class="header-right">
            <div class="header-search">
                <input type="text" name="" class="right-search" placeholder="Nhập từ khóa tìm kiếm">
                <div class="right-icon"></div>
            </div>   
            <button class="right-item-1 b-click">
                <div class="item-1-icon"></div>
            </button> 
            <button class="right-item-2 b-click">
                <div class="item-2-icon"></div>
            </button>
            <button class="right-item-3 b-click">
                <div class="item-3-icon"></div>
            </button>
            <button class="right-item-4 b-click">
                <div class="item-4-icon"></div>
            </button>
            <button class="right-item-5 b-click">
                <div class="item-5-icon"></div>   
            </button>
            <button class="right-item-6">
                <div class="right-item-img"></div>
                <div>Vương Chi Công</div>
                <div class="right-item-icon"></div>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    width: calc(100% - 178px);
    height: 48px;
    border-bottom: 1px solid #d4d7dc;
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;   
    top: 0;
    align-items: center;
}

.header-left{
    display: flex;
}

.header-left .header-logo{
    background: url('../../assets/img/Sprites.svg')  no-repeat -843px -30px;
    width: 24px;
    height: 24px;
    margin: 0 10px;
    cursor: pointer;
}

.header-left .header-branch{
    margin: auto;
    display: flex;
    justify-content: center;
}

.header-branch .header-branch-title{
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
    max-width: 800px;
    text-overflow: ellipsis;
    transition: all .2s ease;
    font-size: 14px;
    color: #111;
    cursor: pointer;
}

.header-branch .header-branch-item{
    height: 21px;
    width: 34px;
    align-items: center;
    cursor: pointer;
}
.header-branch .header-branch-item div{
    width: 14px;
    height: 14px;
    background: url('../../assets/img/Sprites.svg') no-repeat -80px -360px;
    transform: rotate(90deg);
    margin: 2px 10px;
}

.header-left .toltip-content{
    border: 1px solid #EBEDF0;
    margin: 0 10px 0 15px;
    padding: 0 12px;
    border-radius: 40px;
    height: 30px;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
}

.toltip-content .toltip-icon{
    width: 8px;
    height: 8px;
    background-color: #4ea344;
    border-radius: 50%;
    border: 1px solid #fff;
}

.toltip-content .toltip-title{
    margin-left: 7px;
}

.header .header-right{
    display: flex;
    align-items: center;
    justify-items: center;
}

.header-right .header-search{
    margin-right: 20px;
}

.header-right .header-search .right-search{
    width: 220px;
    height: 32px;
    border: 1px solid #EBEDF0;
    border-radius: 3px;
    outline: none;
}

.header-right .header-search .right-icon{
    background: url('../../assets/img/Sprites.svg') no-repeat -992px -360px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 15px;
    right: 450px;
}

.header-right .b-click{
    height: 48px;
    width: 44px;
    background: #ffffff;
    cursor: pointer;
    padding: 0;
    border: none;
    outline: none;
}

.header-right .b-click .item-1-icon{
    background: url('../../assets/img/Sprites.svg') no-repeat -568px -30px;
    height: 24px;
    width: 24px;
    margin: 0 10px;
    
}

.header-right .b-click .item-2-icon{
    background: url('../../assets/img/Sprites.svg') no-repeat -675px -30px;
    height: 24px;
    width: 24px;
    margin: 0 10px;
}

.header-right .b-click .item-3-icon{
    background: url('../../assets/img/Sprites.svg') no-repeat -899px -30px;
    height: 24px;
    width: 24px;
    margin: 0 10px;
}

.header-right .b-click .item-4-icon{
    background: url('../../assets/img/Sprites.svg') no-repeat -731px -30px;
    height: 24px;
    width: 24px;
    margin: 0 10px;
}

.header-right .b-click .item-5-icon{
    background: url('../../assets/img/Sprites.svg') no-repeat -788px -30px;
    height: 24px;
    width: 24px;
    margin: 0 10px;
}

.header-right .right-item-6{
    padding: 0 16px;
    display: flex;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    align-items: center;
    outline: none;
}


.header-right .right-item-6 .right-item-img
{
    background: url('../../assets/img/Sprites.svg')  no-repeat -352px -894px;
    height: 32px;
    width: 32px;
}
.header-right .right-item-icon{
    width: 14px;
    height: 14px;
    background: url('../../assets/img/Sprites.svg') no-repeat -1076px -32px;
    margin: 2px 10px;
}

</style>