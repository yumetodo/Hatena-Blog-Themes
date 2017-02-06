# Hatena-Blog-Themes

| Service     | CI Status                                                                                                                                                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Greenkeeper | [![Greenkeeperbadge](https://badges.greenkeeper.io/yumetodo/Hatena-Blog-Themes.svg)](https://greenkeeper.io/)                                                         |
| lint/build/deploy  | [![RunStatus](https://api.shippable.com/projects/5893e78ef2e87f0f00914896/badge?branch=yumetodo/master)](https://app.shippable.com/projects/5893e78ef2e87f0f00914896) |

はてなブログで使えるテーマです。

![img](./boilerplate/img/MIYA160131430534-768.png)

## Use this theme

### JavaScript

ヘッダのタイトル下の部分に

```html
<script src="https://yumetodo.github.io/Hatena-Blog-Themes/bin/header_adjuster.min.js"></script>
```

のように記述してください。

![apply_javascript_on_head_under_title](./img/apply_javascript_on_head_under_title.png)

### CSS

デザインCSSの部分に

```css
/*
Responsive: yes
*/
@import "https://yumetodo.github.io/Hatena-Blog-Themes/bin/style.min.css"
```

のように記載してください。

このテーマは後述の通りレスポンシブデザインに対応しています。``Responsive: yes``はモバイル向けのView Pointを自動で有効にするために必要です。  
[はてなブログテーマ制作の手引き - はてなブログ ヘルプ#responsive](http://help.hatenablog.com/entry/theme/custom-theme#responsive)

![apply_css](./img/apply_css.png)

## レスポンシブデザイン

このテーマはレスポンシブデザインに対応しています。

スマートフォン→詳細設定のレスポンシブデザインを有効にしてください。

![apply_respnsive](./img/apply_respnsive.png)

## イメージ画像

![theme_windows10_firefox51](./img/theme_windows10_firefox51.png)
![theme_ipod_touch_5th_chrome](./img/theme_ipod_touch_5th_chrome.png)

## Minify JavaScript/LESS(CSS)

### 必要なもの

Java runtimeが必要です。  
https://java.com/ja/download/

JavaにPATHが通っている必要があります。

```
$ java -version
java version "1.8.0_121"
Java(TM) SE Runtime Environment (build 1.8.0_121-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.121-b13, mixed mode)
```

のように表示されればOKです。

### Minify

JavaScriptのMinifyにはGoogle Closure Compiler(Java)を利用しています。  
``npm install``で``closure-compiler-install.js``が実行され自動的に導入されます。

LESSのCompileおよびMinifyには``lessc``とadd-onの``clean-css``を利用しています。

```
$ npm install
$ npm run build
```
## License

[License.md](./License.md)をごらんください。
