# Electron Netease Cloud Music

**UNOFFICAL** client for music.163.com

[![build status](https://api.travis-ci.org/Rocket1184/electron-netease-cloud-music.svg?branch=dev)](https://travis-ci.org/Rocket1184/electron-netease-cloud-music/builds)
[![dependencies staus](https://david-dm.org/rocket1184/electron-netease-cloud-music/dev/status.svg)](https://david-dm.org/rocket1184/electron-netease-cloud-music/dev)
[![devDependencies staus](https://david-dm.org/rocket1184/electron-netease-cloud-music/dev/dev-status.svg)](https://david-dm.org/rocket1184/electron-netease-cloud-music/dev?type=dev)

## Features
 - [x] 用户登录（手机号/邮箱/用户名）
 - [x] 每日签到（可同时签到 PC 端和移动端）
 - [x] 播放用户收藏/创建的歌单以及每日歌曲推荐
 - [x] ~~高仿~~ 音乐播放界面，滚动歌词
 - [ ] 浏览/发布歌曲评论
 - [ ] 收藏歌单
 - [ ] 收藏音乐到歌单/喜欢某音乐
 - [ ] 各种搜索

## ScreenShots

![音乐播放界面](https://images2015.cnblogs.com/blog/877509/201705/877509-20170501001930615-1255918997.png)

## Build Setup

``` bash
# install dev dependencies
yarn install

# install app dependencies
cd app
yarn install

# serve with hot reload at localhost:24353
npm run dev

# pack js/vue in app/src into bundle
npm run pack

# pack electron app
npm run build
```
