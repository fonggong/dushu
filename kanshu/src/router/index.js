import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import BookAdmin from '@/components/BookAdmin'
import index from '@/components/index'

import login from '../components/userAdmin/login'
import register from '../components/userAdmin/register'

import search from '../components/search/search'

import guoxue from '../components/pages/guoxue'
import bidu from '../components/pages/bidu'
import yingxiang from '../components/pages/yingxiang'

// books
import guoxuerumen from '../components/books/guoxuerumen'
import showBook1 from '../components/books/showBook1'
import showBook2 from '../components/books/showBook2'
import showBook3 from '../components/books/showBook3'
import showBook4 from '../components/books/showBook4'
import showBook5 from '../components/books/showBook5'
import showBook6 from '../components/books/showBook6'

// news
import news1 from '../components/news/news1'
import news2 from '../components/news/news2'
import news3 from '../components/news/news3'
import news4 from '../components/news/news4'

// ouers
import help from '../components/ouers/help'
import video from '../components/ouers/video'
import about from '../components/ouers/about'
import ouerBook from '../components/ouers/ouerBook'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: index,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: home
    }, {
      path: 'search',
      name: 'search',
      component: search
    }, {
      path: 'bookAdmin',
      name: 'BookAdmin',
      component: BookAdmin
    }, {
      path: 'login',
      name: 'login',
      component: login
    }, {
      path: 'register',
      name: 'register',
      component: register
    }]
  }, {
    path: '/guoxue',
    name: 'guoxue',
    component: guoxue
  }, {
    path: '/yingxiang',
    name: 'yingxiang',
    component: yingxiang
  }, {
    path: '/bidu',
    name: 'bidu',
    component: bidu
  }, {
    path: '/guoxuerumen',
    name: 'guoxuerumen',
    component: guoxuerumen
  }, {
    path: '/news1',
    component: news1
  }, {
    path: '/news2',
    component: news2
  }, {
    path: '/news3',
    component: news3
  }, {
    path: '/news4',
    component: news4
  },{
    path: '/showBook1',
    component: showBook1
  },{
    path: '/showBook2',
    component: showBook2
  },{
    path: '/showBook3',
    component: showBook3
  },{
    path: '/showBook4',
    component: showBook4
  },{
    path: '/showBook5',
    component: showBook5
  },{
    path: '/showBook6',
    component: showBook6
  },{
    path: '/about',
    component: about
  },{
    path: '/help',
    component: help
  },{
    path: '/ouerBook',
    component: ouerBook
  },{
    path: '/video',
    component: video
  }

  ]
})
