## 显示地创建注入器
比如在组件A中：
this.injector = ReflectiveInjector.resolveAndCreate([LoggerService]);       ----相当于注册提供商
this.injector.get(LoggerService);                                           ----相当于在组件的构造器中注入LoggerService
此时A中就获取到了LoggerService的实例。

## 带依赖的类提供商
比如：组件的构造器中注入服务A，而服务A依赖于服务B，那么A、B都需要加入providers数组。
## 备选类提供商
请求A时返回B
若一个组件中注入A，则返回的是B
若该组件中注入B，返回的也是B
但是，这个B不是单例的。也就是说B在这里初始化了两次
如果希望这里是单例的，使用别名类提供商。

## 别名类提供商
与备选类提供商的唯一区别是，B是单例的

## 值提供商
const silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: () => {}
};
providers: [{ provide: LoggerService, useValue: silentLogger}]
请求LoggerService时，返回silentLogger常量值

## 工厂提供商
例子：HeroService根据用户权限决定是否隐藏秘密英雄。用户权限需要UserService，但是HeroService中不可以注入UserService。
let heroServiceFactory = (logger: Logger, userService: UserService) => {
  return new HeroService(logger, userService.user.isAuthorized);
};
export let heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  };
useFactory字段告诉 Angular：这个提供商是一个工厂方法，它的实现是heroServiceFactory。
deps属性是提供商令牌数组。 Logger和UserService类作为它们自身类提供商的令牌。 注入器解析这些令牌，把相应的服务注入到工厂函数中相应的参数中去。

## 非类依赖
解决方案是为非类依赖定义和使用InjectionToken作为提供商令牌。
ts文件：
export interface AppConfig {
    apiEndpoint: string;
    title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};
export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
app.module.ts文件中：
providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG}]
组件中：
constructor(@Inject(APP_CONFIG) config) {
    this.title = config.title;
    console.log(config);
}

<!-- 六个参数装饰器 -->
## @Inject()
Inject 是参数装饰器，用来在类的构造函数中描述非 Type 类型的参数对象。
Angular 2 中常用的非 Type 类型 Token：字符串、OpaqueToken对象、InjectionToken对象等。
## @Optional()
当Angular找不到依赖时，@Optional装饰器会告诉Angular继续执行。Angular把此注入参数设置为null(而不用默认的抛出错误的行为)。
## @Host()
@Host装饰器将把往上搜索的行为截止在宿主组件
宿主组件通常是申请这个依赖的组件。但当这个组件被投影(projected)进一个父组件后，这个父组件就变成了宿主。
<!-- 运用场景：a组件注入了AService, AService并没有在模块中或A组件中注入。
    a的父组件b， 则会在B中找是否在B中provides数组中，以此类推 -->
## @Self()
Specifies that an Injector should retrieve a dependency only from itself.
## @SkipSelf()
Specifies that the dependency resolution should start from the parent injector.
## @Attribute()
????
<!-- 八个属性装饰器 -->
## @ViewChild
@ViewChild(MyCom) 可以获取到页面中的MyCom类型的组件
@ViewChild('myCom') 可以获取到被标记为#myCom的组件
@ViewChild会在ngAfterViewInit()回调函数之前执行。
返回遇到的第一个满足的
## @ViewChildren
返回所有满足的（一个QueryList）

## <ng-content></ng-content>
用ng-content标签，将父组件模板中包含的menu标签内容加到指定位置。select属性支持css选择器，如:"#id",".class","[name=value]"等

## @ContentChild @ContentChildren
ContentChild用来获取<ng-content></ng-content>中的元素
在ngAfterContentInit 生命周期钩子中才能成功获取通过 ContentChild 查询的元素

@ViewChildren和@ContentChildren之间的区别在于，@ViewChildren用于Shadow DOM，而@ContentC
hildren用于Light DOM

## @HostListener
为宿主元素添加事件监听。（通常用在指令上）

## @HostBinding
HostBinding 是属性装饰器，用来动态设置宿主元素的属性值。

## @Input() @Output()
输入属性、输出属性

## 切换主题
app.scss中：：
@import "app-base";
@import "loading/2";

@mixin theme(
    $name,
    $body-background-color
){
 .#{$name} {
         background: $body-background-color;
         .ui-datatable-data.ui-datatable-hoverable-rows .ui-datatable-emptymessage, .ui-datatable-data.ui-datatable-hoverable-rows .ui-datatable-emptymessage>span {
            overflow: hidden;
            text-align: center;
            color: $body-background-color;
        }
 }
}

@include theme(
    yellow,
    $theme-day-body-background-color
);
@include theme(
    red,
    $theme-day-body-background-color1
)
_app-base.scss中：
$theme-day-body-background-color:yellow
$theme-day-body-background-color1:red

## 报错解决方案
1.在项目a中要使用项目b中的模块，在项目b根目录下使用npm link将项目b添加到全局中，在项目a下使用npm link b.此时可以在a中引入b中的模块了。问题：Unexpected value '' imported by the module ''. Please add a @NgModule annotation when using nmp link
解决方案：将全局中的b项目的node_modules文件夹删除

## Rxjs操作符
concat: 按照顺序，前一个observable完成了再订阅下一个observable并发出值

## npm版本号
x.y.z(大版本.次要版本.小版本)
～1.2.2 （表示安装1.2.x的最新版本，不低于1.2.2，但不安装1.3.x,也就是说安装时不改变大版本号和次要版本号）
^1.2.2（表示安装1.x.x的最新版本，不低于1.2.2，但不安装2.x.x，也就是说安装时不改变大版本号，如果大版本号是0则，与～的规则一致）

## package.json
dependencies、devDependencies 的区别：dependencies 表示我们要在生产环境下使用该依赖，devDependencies 则表示我们仅在开发环境使用该依赖。
--save-prod 将依赖的名称、版本要求写入 dependencies
--save-dev 将依赖的名称、版本要求写入 devDependencies

git tag
