/*
左侧导航
 */

<template>
  <!-- <el-aside width="200px" style="background-color: #20222a">
    <el-menu :default-openeds="['1', '10']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>后台管理员</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="goUserList()">用户列表</el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
          <el-menu-item index="1-2">操作日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">用户列表</el-menu-item>
          <el-menu-item index="2-2">vip定义</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>基本设置</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">商家设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">基础商品列表</el-menu-item>
          <el-menu-item index="1-2">规格商品列表</el-menu-item>
          <el-menu-item index="1-2">分类</el-menu-item>
          <el-menu-item index="1-2">标签</el-menu-item>
          <el-menu-item index="1-2">设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>定价管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">定价表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-message"></i>促销管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">优惠券</el-menu-item>
          <el-menu-item index="1-2">套装</el-menu-item>
          <el-menu-item index="1-2">秒杀</el-menu-item>
          <el-menu-item index="1-1">买赠</el-menu-item>
          <el-menu-item index="1-2">优惠购</el-menu-item>
          <el-menu-item index="1-2">砍价</el-menu-item>
          <el-menu-item index="1-2">拼团</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-message"></i>订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">订单列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title"><i class="el-icon-message"></i>物流管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">运费管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title"><i class="el-icon-message"></i>文章广告</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">资讯管理</el-menu-item>
          <el-menu-item index="1-2">广告管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title"><i class="el-icon-message"></i>评价管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">评价列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="11">
        <template slot="title"><i class="el-icon-message"></i>消息中心</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">系统通知</el-menu-item>
          <el-menu-item index="1-2">在线咨询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>-->
  <div class="left_nav">
    <el-menu
      default-active="2"
      :collapse="collapsed"
      collapse-transition
      router
      unique-opened
      class="el-menu-vertical-demo"
      background-color="#334157"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="logobox">
        <img class="logoimg" src="https://www.cododev.com/images/logo.png" alt>
      </div>
      <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
        <template slot="title">
          <i class="iconfont" :class="menu.icon"></i>
          <span>{{menu.menuname}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="chmenu in menu.menus" :index="'/'+chmenu.url" :key="chmenu.menuid">
            <i class="iconfont" :class="chmenu.icon"></i>
            <span>{{chmenu.menuname}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { menu } from "../api/userMG";
export default {
  name: "leftnav",
  data() {
    return {
      collapsed: false,
      allmenu: []
    };
  },
  // 创建完毕状态(里面是操作)
  created() {
    // 获取图形验证码
    let res = {
      success: true,
      data: [
        {
          menuid: 1,
          icon: "li-icon-xiangmuguanli",
          menuname: "后台管理员",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 2,
              icon: "icon-cat-skuQuery",
              menuname: "用户列表",
              hasThird: "N",
              url: "admin/userlist",
              menus: null
            },
            {
              menuid: 3,
              icon: "icon-cat-skuQuery",
              menuname: "角色列表",
              hasThird: "N",
              url: "admin/CharacterList",
              menus: null
            },
            {
              menuid: 3,
              icon: "icon-cat-skuQuery",
              menuname: "操作日志",
              hasThird: "N",
              url: "admin/log",
              menus: null
            }
          ]
        },
        {
          menuid: 33,
          icon: "li-icon-dingdanguanli",
          menuname: "用户管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 34,
              icon: "icon-order-manage",
              menuname: "用户列表",
              hasThird: "N",
              url: "pay/Order",
              menus: null
            },
            {
              menuid: 34,
              icon: "icon-order-manage",
              menuname: "vip定义",
              hasThird: "N",
              url: "pay/Order",
              menus: null
            }
          ]
        },
        {
          menuid: 71,
          icon: "li-icon-xitongguanli",
          menuname: "基本设置",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 72,
              icon: "icon-cus-manage",
              menuname: "商家设置",
              hasThird: "N",
              url: "system/user",
              menus: null
            }
          ]
        },
        {
          menuid: 128,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "商品管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 129,
              icon: "icon-provider-manage",
              menuname: "支付配置信息",
              hasThird: "N",
              url: "machine/MachineConfig",
              menus: null
            },
            {
              menuid: 175,
              icon: "icon-provider-manage",
              menuname: "支付配置",
              hasThird: "N",
              url: "pay/Config",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "定价管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "促销管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "订单管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "物流管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "文章广告",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "文章广告",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "评价管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "消息中心",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            }
          ]
        }
      ],
      msg: "success"
    };
    this.allmenu = res.data;

    // menu(localStorage.getItem('logintoken'))
    //   .then(res => {
    //     console.log(JSON.stringify(res))
    //     if (res.success) {
    //       this.allmenu = res.data
    //     } else {
    //       this.$message.error(res.msg)
    //       return false
    //     }
    //   })
    //   .catch(err => {
    //     this.$message.error('菜单加载失败，请稍后再试！')
    //   })
    // 监听
    this.$root.Bus.$on("toggle", value => {
      this.collapsed = !value;
    });
  }
};
</script>
<style>
.left_nav{
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
  text-align: left;
}
.el-menu-item-group__title {
  padding: 0px;
}
.el-menu-bg {
  background-color: #1f2d3d !important;
}
.el-menu {
  border: none;
}
.logobox {
  height: 40px;
  line-height: 40px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
}
.logoimg {
  height: 40px;
}
</style>

