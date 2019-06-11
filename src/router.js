import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue';
import userlist from './views/admin/UserList.vue'
import index from './views/index.vue';
import log from './views/admin/log.vue';
import CharacterList from './views/admin/CharacterList.vue';
import Ad from './views/article/Ad.vue'
import News from './views/article/News.vue'
import Merchant from './views/basic/Merchant.vue'
import EvalList from './views/evaluation/EvalList.vue'
import Category from './views/goods/Category.vue'
import fenlei from './views/goods/fenlei.vue'
import GoodsListGG from './views/goods/GoodsListGG.vue'
import GoodsListJC from './views/goods/GoodsListJC.vue'
import Label from './views/goods/Label.vue'
import Consultation from './views/message/Consultation.vue'
import Notice from './views/message/Notice.vue'
import OrderList from './views/order/OrderList.vue'
import Price from './views/price/Price.vue'
import Assemble from './views/promotion/Assemble.vue'
import Bargain from './views/promotion/Bargain.vue'
import Coupon from './views/promotion/Coupon.vue'
import Give from './views/promotion/Give.vue'
import PreShop from './views/promotion/PreShop.vue'
import Spike from './views/promotion/Spike.vue'
import Suit from './views/promotion/Suit.vue'
import User from './views/user/User.vue'
import UserVip from './views/user/UserVip.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    }, {
      path: '/login',
      name: '登录',
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/index',
      name: '首页',
      component: index,
      iconCls: 'el-icon-tickets',
      children: [
        {
          path: '/admin/userlist',
          name: '用户列表',
          component: userlist,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin/log',
          name: '日志',
          component: log,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin/CharacterList',
          name: '角色列表',
          component: CharacterList,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/article/Ad',
          name: '广告列表',
          component: Ad,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/article/News',
          name: '资讯列表',
          component: News,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/basic/Merchant',
          name: '基本设置-商家设置',
          component: Merchant,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/evaluation/EvalList',
          name: '评价管理',
          component: EvalList,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/goods/Category',
          name: '商品分类',
          component: Category,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/goods/fenlei',
          name: '用户列表',
          component: fenlei,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/goods/GoodsListGG',
          name: '规格商品列表',
          component: GoodsListGG,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/goods/GoodsListJC',
          name: '基础商品列表',
          component: GoodsListJC,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/goods/Label',
          name: '标签列表',
          component: Label,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/message/Consultation',
          name: '在线咨询',
          component: Consultation,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/message/Notice',
          name: '消息通知',
          component: Notice,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/order/OrderList',
          name: '订单列表',
          component: OrderList,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/price/Price',
          name: '定价表',
          component: Price,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/Assemble',
          name: '拼团',
          component: Assemble,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/Bargain',
          name: '砍价',
          component: Bargain,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/Coupon',
          name: '优惠券',
          component: Coupon,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/Give',
          name: '买赠',
          component: Give,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/PreShop',
          name: '优惠购',
          component: PreShop,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/Spike',
          name: '秒杀',
          component: Spike,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/promotion/Suit',
          name: '套装',
          component: Suit,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/user/User',
          name: '用户列表',
          component: User,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/user/UserVip',
          name: '用户vip',
          component: UserVip,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
