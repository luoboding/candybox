# candybox
this is  core module, make sure you have installed nodejs

### dependencies
  - npm install 装载所有依赖
  - npm install -g knex 安装migration依赖
  - npm install -g supervisor 自动重启模块
  - knex migrate:latest --env dev 执行数据库migration
  - knex seed:run --env=dev 初始化数据库表数据

### run
  - npm run dev 开发
  - npm run prod 产品
