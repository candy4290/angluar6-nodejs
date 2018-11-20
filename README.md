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
