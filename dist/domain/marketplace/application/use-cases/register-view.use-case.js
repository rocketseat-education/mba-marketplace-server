'use strict';function a39_0x55a2(){const _0x22379c=['../repositories/viewers.repository','__decorate','@nestjs/common','__metadata','viewsRepository','productsRepository','execute','right','getOwnPropertyDescriptor','1028rNNjBU','create','3010756vQruSh','productId','5228000BGwKom','806830lKxlVS','defineProperty','View','../../../../core/logic/either','length','RegisterViewUseCase','ViewersRepository','NotAllowedError','6YYsHXI','29814336sIdCGV','__esModule','6243jYatnR','../repositories/views.repository','Viewer','left','equals','decorate','findById','ProductsRepository','viewersRepository','function','1212550dYuYgI','../../../../core/errors/common/not-allowed.error','viewerId','object','isViewed','Injectable','3819040VuIGno','../repositories/products.repository','metadata'];a39_0x55a2=function(){return _0x22379c;};return a39_0x55a2();}const a39_0x12d8d1=a39_0x3d46;(function(_0x592459,_0x5b4c53){const _0x325592=a39_0x3d46,_0x2b576d=_0x592459();while(!![]){try{const _0x165529=-parseInt(_0x325592(0x128))/0x1+parseInt(_0x325592(0x13d))/0x2+-parseInt(_0x325592(0x133))/0x3*(parseInt(_0x325592(0x123))/0x4)+-parseInt(_0x325592(0x143))/0x5+parseInt(_0x325592(0x130))/0x6*(-parseInt(_0x325592(0x125))/0x7)+-parseInt(_0x325592(0x127))/0x8+parseInt(_0x325592(0x131))/0x9;if(_0x165529===_0x5b4c53)break;else _0x2b576d['push'](_0x2b576d['shift']());}catch(_0x4aee3b){_0x2b576d['push'](_0x2b576d['shift']());}}}(a39_0x55a2,0xb233c));function a39_0x3d46(_0x1a4bf6,_0x5e4c35){const _0x55a248=a39_0x55a2();return a39_0x3d46=function(_0x3d46d1,_0x5a0cef){_0x3d46d1=_0x3d46d1-0x11f;let _0x9a5178=_0x55a248[_0x3d46d1];return _0x9a5178;},a39_0x3d46(_0x1a4bf6,_0x5e4c35);}var __decorate=this&&this[a39_0x12d8d1(0x147)]||function(_0x321c84,_0x45ed53,_0x2049b5,_0x376ef9){const _0x5896fe=a39_0x12d8d1;var _0x6cc5af=arguments['length'],_0x23529a=_0x6cc5af<0x3?_0x45ed53:_0x376ef9===null?_0x376ef9=Object[_0x5896fe(0x122)](_0x45ed53,_0x2049b5):_0x376ef9,_0x542336;if(typeof Reflect===_0x5896fe(0x140)&&typeof Reflect['decorate']===_0x5896fe(0x13c))_0x23529a=Reflect[_0x5896fe(0x138)](_0x321c84,_0x45ed53,_0x2049b5,_0x376ef9);else{for(var _0x28046f=_0x321c84[_0x5896fe(0x12c)]-0x1;_0x28046f>=0x0;_0x28046f--)if(_0x542336=_0x321c84[_0x28046f])_0x23529a=(_0x6cc5af<0x3?_0x542336(_0x23529a):_0x6cc5af>0x3?_0x542336(_0x45ed53,_0x2049b5,_0x23529a):_0x542336(_0x45ed53,_0x2049b5))||_0x23529a;}return _0x6cc5af>0x3&&_0x23529a&&Object[_0x5896fe(0x129)](_0x45ed53,_0x2049b5,_0x23529a),_0x23529a;},__metadata=this&&this[a39_0x12d8d1(0x149)]||function(_0x23d0a1,_0x4b6be8){const _0x5105bc=a39_0x12d8d1;if(typeof Reflect===_0x5105bc(0x140)&&typeof Reflect[_0x5105bc(0x145)]==='function')return Reflect[_0x5105bc(0x145)](_0x23d0a1,_0x4b6be8);};Object[a39_0x12d8d1(0x129)](exports,a39_0x12d8d1(0x132),{'value':!![]}),exports[a39_0x12d8d1(0x12d)]=void 0x0;const common_1=require(a39_0x12d8d1(0x148)),not_allowed_error_1=require(a39_0x12d8d1(0x13e)),either_1=require(a39_0x12d8d1(0x12b)),products_repository_1=require(a39_0x12d8d1(0x144)),viewers_repository_1=require(a39_0x12d8d1(0x146)),views_repository_1=require(a39_0x12d8d1(0x134)),resource_not_found_error_1=require('./errors/resource-not-found.error'),view_1=require('../../enterprise/entities/view');let RegisterViewUseCase=class RegisterViewUseCase{constructor(_0x322982,_0x4ca4c1,_0x18f5bb){const _0x2ad29b=a39_0x12d8d1;this[_0x2ad29b(0x11f)]=_0x322982,this[_0x2ad29b(0x13b)]=_0x4ca4c1,this[_0x2ad29b(0x14a)]=_0x18f5bb;}async[a39_0x12d8d1(0x120)](_0x4d084f){const _0x3a9d1d=a39_0x12d8d1,[_0x5c202a,_0x4c298a]=await Promise['all']([this['productsRepository']['findById'](_0x4d084f[_0x3a9d1d(0x126)]),this[_0x3a9d1d(0x13b)][_0x3a9d1d(0x139)](_0x4d084f[_0x3a9d1d(0x13f)])]);if(!_0x5c202a)return(0x0,either_1['left'])(new resource_not_found_error_1['ResourceNotFoundError']('Product','ID',_0x4d084f[_0x3a9d1d(0x126)]));if(!_0x4c298a)return(0x0,either_1[_0x3a9d1d(0x136)])(new resource_not_found_error_1['ResourceNotFoundError'](_0x3a9d1d(0x135),'ID',_0x4d084f[_0x3a9d1d(0x13f)]));if(_0x5c202a['owner'][_0x3a9d1d(0x137)](_0x4c298a))return(0x0,either_1[_0x3a9d1d(0x136)])(new not_allowed_error_1[(_0x3a9d1d(0x12f))]('Views\x20cannot\x20be\x20registered\x20by\x20the\x20product\x20owner'));const _0x6a8922=view_1[_0x3a9d1d(0x12a)][_0x3a9d1d(0x124)]({'product':_0x5c202a,'viewer':_0x4c298a}),_0xfa3af7=await this[_0x3a9d1d(0x14a)][_0x3a9d1d(0x141)](_0x6a8922);if(_0xfa3af7)return(0x0,either_1['right'])({'view':_0x6a8922});else await this['viewsRepository'][_0x3a9d1d(0x124)](_0x6a8922);return(0x0,either_1[_0x3a9d1d(0x121)])({'view':_0x6a8922});}};exports['RegisterViewUseCase']=RegisterViewUseCase,exports[a39_0x12d8d1(0x12d)]=RegisterViewUseCase=__decorate([(0x0,common_1[a39_0x12d8d1(0x142)])(),__metadata('design:paramtypes',[products_repository_1[a39_0x12d8d1(0x13a)],viewers_repository_1[a39_0x12d8d1(0x12e)],views_repository_1['ViewsRepository']])],RegisterViewUseCase);