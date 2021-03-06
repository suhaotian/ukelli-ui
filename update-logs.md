# update logs

## 2.4.33

- 把 Avatar 中的依赖抽离出来

依赖 Croppie js [地址](http://foliotek.github.io/Croppie/)

可以设置加载的路径

```js
import {Avatar} from 'ukelli-ui';
Avatar.setCroppieUrl(loadUrl);
```

-----------

## 2.4.31

- 支持国际化

分为外部 KeyMapper 和内部 UkeKeyMapper 两种情况，可以通过 setUkeLang 设置语言，默认提供 「中文」 和 「英语」 两种语言，也可以通过 setUkeLangConfig 设置更多的语言

```js
import { setUkeLang, setUkeLangConfig } from 'ukelli-ui';

setUkeLangConfig({
  'zh-HK': {
    '无': '無'
  }
});
setUkeLang('zh-HK');
```

切换语言时，也需要设置外部

-----------

## 2.4.22

- Modal 新增可拖动模式

-----------

## 2.4.20

- Ranger 支持手势滑动

-----------

## 2.4.8

- DropdownMenu 支持 number 的 value

-----------

## 2.4.0

- 提供一个基础的 class state manager，用于管理通用异步的组件中的 state ，抽离于 ActionBasic ， ActionBasic 可以为更专注于业务处理

使用方式

```
import {StateManager} from 'ukelli-ui/other/state-manager';

1. 继承 StateManager
2. 重写其中的流程 hook 

class ActionBasic extends StateManager {
  showResDesc() {
    // do anything
  } // 用于
  checkResIsSuccess(resData) {
    return boolean
  } // 检查业务回调是否成功
  defaultStateAfterPost(resData, sendOptions) {
    return {}
  } // 触发在请求后，setState 前
  wrapDataFilter(sendData) {
    return {}
  } // 发送请求前的 data 对象的 hook
  request(orionReqObj) {
    return async function
  } // 业务数据发送接口, 需要返回异步函数
}
```

-----------

## 2.3.0

- 优化 FormFilter 和 FormGenerator 的实现
- 新增 select-n 的表单类型，用于渲染原生的 select 组件，提供移动端使用
- 重做了 select 的实现方式与样式
- 重做 Radio 组件的样式与结构
- 优化 Modal 的参数传递
- 优化 button 的样式，以及提供的 mixin 方法
- 重做 ranger 的样式与交互，新增 input verify 辅助
- 增强 input verify 的功能，

-----------

## 2.2.4

- 优化 Notification 的样式, 新增可以控制的 action btn 的 text

-----------

## 2.2.*

- 不再使用 $GH ，而是更严谨的 import 对应的方法
- 优化 Notify 全局方法

-----------

## 2.1.*

1. 废除 citySelector，改为联动组件
2. formGenarator 新增一个可以自定义控件的接口
3. var.scss 提供一些通用的样式配置 @mixin scss 配置，需要在外部引入
4. 重做 IconInput 组件，名字不再是 IconInput，而是统一为 Input
5. form 的配置 text 多了一个 highlight: true 的选项
6. 调整 formLayout showDesc 的时机，更友好的提示
7. formGenarator 新增两个参数 showInputTitle: bool， isMobile: bool，可控制显示的模版

-----------

## 2.0.*

1. 重做的 dropdown menu
2. 分离 core 和 other 文件

-----------

## 1.8.*

1. 新增 notification 通知组件

-----------

## 1.7.*

1. FormHelper 改名为 FormGenerator
2. ConditionHelper 改名为 ConditionGenerator
