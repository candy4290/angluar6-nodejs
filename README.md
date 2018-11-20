# Angular6+前台 nodejs后台 mysql数据库
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## projects/cxx-serve目录是基于 nodejs + express + mysql 搭建的服务器，项目结构如下，启动方法：进入到该目录下运行npm start;
├── app.js -- 应用配置
├── bin
│   └── www -- 项目运行脚本
├── conf
│   └── mysqlConf.js -- mysql配置文件
├── dao
│   ├── photoDAO.js -- 封装和数据库的交互
│   └── photoSqlMap.js -- 照片墙的SQL语句封装
├── model
│   └── result.js -- 返回结果对象封装
├── package.json -- 依赖模块
├── project-datamodel
│   └── user.sql -- 数据库脚本
├── public -- 前端静态页面
│   ├── images -- 静态文件夹
└── routes
    └── photo.js -- 照片墙的路由及业务逻辑


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
