'use strict';const a24_0x58fe94=a24_0x178f;(function(_0x436543,_0x27475d){const _0x39b927=a24_0x178f,_0x368d92=_0x436543();while(!![]){try{const _0x5eacc1=parseInt(_0x39b927(0x6b))/0x1*(-parseInt(_0x39b927(0x69))/0x2)+parseInt(_0x39b927(0x7a))/0x3+parseInt(_0x39b927(0x81))/0x4*(-parseInt(_0x39b927(0x76))/0x5)+parseInt(_0x39b927(0x64))/0x6+-parseInt(_0x39b927(0x83))/0x7+-parseInt(_0x39b927(0x66))/0x8*(-parseInt(_0x39b927(0x78))/0x9)+parseInt(_0x39b927(0x7c))/0xa*(parseInt(_0x39b927(0x6f))/0xb);if(_0x5eacc1===_0x27475d)break;else _0x368d92['push'](_0x368d92['shift']());}catch(_0x179bba){_0x368d92['push'](_0x368d92['shift']());}}}(a24_0xf997,0xc9a65));function a24_0xf997(){const _0x1a9cab=['ResourceNotFoundError','execute','6530CXmOiL','object','36558dKIzQQ','from','4449891FiwAkG','Injectable','10eklsvm','./errors/resource-not-found.error','../repositories/views.repository','defineProperty','metadata','3676MFcUJs','__metadata','9855265AaVKDg','../repositories/sellers.repository','findById','@nestjs/common','left','../../../../core/logic/either','5161146Ztxbug','length','2792Nelity','sellersRepository','__esModule','2OnFsgr','sellerId','995059ugGFjU','viewsRepository','CountSellerViewsPerDayUseCase','right','7347989phYsdf','decorate','countPerDay','SellersRepository','ViewsRepository'];a24_0xf997=function(){return _0x1a9cab;};return a24_0xf997();}var __decorate=this&&this['__decorate']||function(_0x179673,_0x291b97,_0x4516da,_0x5dfa6b){const _0x13d545=a24_0x178f;var _0x502998=arguments[_0x13d545(0x65)],_0x4a7155=_0x502998<0x3?_0x291b97:_0x5dfa6b===null?_0x5dfa6b=Object['getOwnPropertyDescriptor'](_0x291b97,_0x4516da):_0x5dfa6b,_0xd95e28;if(typeof Reflect===_0x13d545(0x77)&&typeof Reflect[_0x13d545(0x70)]==='function')_0x4a7155=Reflect['decorate'](_0x179673,_0x291b97,_0x4516da,_0x5dfa6b);else{for(var _0x4614a1=_0x179673[_0x13d545(0x65)]-0x1;_0x4614a1>=0x0;_0x4614a1--)if(_0xd95e28=_0x179673[_0x4614a1])_0x4a7155=(_0x502998<0x3?_0xd95e28(_0x4a7155):_0x502998>0x3?_0xd95e28(_0x291b97,_0x4516da,_0x4a7155):_0xd95e28(_0x291b97,_0x4516da))||_0x4a7155;}return _0x502998>0x3&&_0x4a7155&&Object[_0x13d545(0x7f)](_0x291b97,_0x4516da,_0x4a7155),_0x4a7155;},__metadata=this&&this[a24_0x58fe94(0x82)]||function(_0xed5205,_0x1075c9){const _0x433f59=a24_0x58fe94;if(typeof Reflect==='object'&&typeof Reflect[_0x433f59(0x80)]==='function')return Reflect[_0x433f59(0x80)](_0xed5205,_0x1075c9);};function a24_0x178f(_0x529671,_0x2bdf4a){const _0xf99721=a24_0xf997();return a24_0x178f=function(_0x178fca,_0x14460c){_0x178fca=_0x178fca-0x64;let _0x1ed270=_0xf99721[_0x178fca];return _0x1ed270;},a24_0x178f(_0x529671,_0x2bdf4a);}Object['defineProperty'](exports,a24_0x58fe94(0x68),{'value':!![]}),exports[a24_0x58fe94(0x6d)]=void 0x0;const common_1=require(a24_0x58fe94(0x86)),either_1=require(a24_0x58fe94(0x88)),sellers_repository_1=require(a24_0x58fe94(0x84)),views_repository_1=require(a24_0x58fe94(0x7e)),resource_not_found_error_1=require(a24_0x58fe94(0x7d));let CountSellerViewsPerDayUseCase=class CountSellerViewsPerDayUseCase{constructor(_0x4d2ddb,_0x20c8d5){const _0x134246=a24_0x58fe94;this[_0x134246(0x67)]=_0x4d2ddb,this['viewsRepository']=_0x20c8d5;}async[a24_0x58fe94(0x75)](_0x1ace0e){const _0x568422=a24_0x58fe94,_0x4137f8=await this[_0x568422(0x67)][_0x568422(0x85)](_0x1ace0e['sellerId']);if(!_0x4137f8)return(0x0,either_1[_0x568422(0x87)])(new resource_not_found_error_1[(_0x568422(0x74))]('Seller','ID',_0x1ace0e[_0x568422(0x6a)]));const _0xfbc46a=await this[_0x568422(0x6c)][_0x568422(0x71)]({'sellerId':_0x1ace0e[_0x568422(0x6a)],'from':_0x1ace0e[_0x568422(0x79)]});return(0x0,either_1[_0x568422(0x6e)])({'viewsPerDay':_0xfbc46a});}};exports[a24_0x58fe94(0x6d)]=CountSellerViewsPerDayUseCase,exports[a24_0x58fe94(0x6d)]=CountSellerViewsPerDayUseCase=__decorate([(0x0,common_1[a24_0x58fe94(0x7b)])(),__metadata('design:paramtypes',[sellers_repository_1[a24_0x58fe94(0x72)],views_repository_1[a24_0x58fe94(0x73)]])],CountSellerViewsPerDayUseCase);