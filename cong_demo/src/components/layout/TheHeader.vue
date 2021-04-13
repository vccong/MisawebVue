<template>
  <div>
      <div class="header">
        <div class="header-left">
            <div class="header-logo"></div>
            <div class="header-branch">
                <div class="header-branch-title">CÔNG TNHH SÀI GÒN BAY</div>
                <a class="header-branch-item"></a>
            </div>
            <div></div>
            <div></div>
        </div>
        <div class="header-right">
            
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
}

.header-left .header-branch .header-branch-title{
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
    max-width: 800px;
    text-overflow: ellipsis;
    transition: all .2s ease;
    font-size: 14px;
    color: #111;
}
</style>