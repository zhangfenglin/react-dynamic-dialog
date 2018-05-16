# react dynamic dialog

## 安装

> npm i --save react-dynamic-dialog

## 使用

```js
import * as reactDynamicDialog from 'react-dynamic-dialog'

const test = () => <div>reactDynamicDialog</div>

reactDynamicDialog.open(test, {}, {shouldCloseOnOverlayClick: true})
```

## Prop Types

<table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width: 100px;">名称</th>
        <th style="width: 50px;">数据类型</th>
        <th style="width: 50px;">默认值</th>
        <th>描述信息</th>
    </tr>
    </thead>
     <tbody>
        <tr>
          <td>shouldCloseOnOverlayClick</td>
          <td>bool</td>
          <td>false</td>
          <td>是否点击蒙板关闭窗口</td>
        </tr>
        <tr>
          <td>onRequestClose</td>
          <td>function</td>
          <td></td>
          <td>关闭方法回调函数</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>主窗体style属性</td>
        </tr>
         <tr>
          <td>overlayStyle</td>
          <td>Object</td>
          <td></td>
          <td>蒙板style属性</td>
        </tr>
        <tr>
          <td>className</td>
          <td>string</td>
          <td></td>
          <td>主窗体样式类名</td>
        </tr>
        <tr>
          <td>overlayClassName</td>
          <td>string</td>
          <td></td>
          <td>蒙板样式类名</td>
        </tr>
    </tbody>

</table>
