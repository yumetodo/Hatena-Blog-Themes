# Hatena-Blog-Themes

| Service     | CI Status                                                                                                                                                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Greenkeeper | [![Greenkeeperbadge](https://badges.greenkeeper.io/yumetodo/Hatena-Blog-Themes.svg)](https://greenkeeper.io/)                                                         |
| lint/build  | [![RunStatus](https://api.shippable.com/projects/5893e78ef2e87f0f00914896/badge?branch=yumetodo/master)](https://app.shippable.com/projects/5893e78ef2e87f0f00914896) |

はてなブログで使えるテーマです。

![img](./boilerplate/img/MIYA160131430534-768.png)

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

