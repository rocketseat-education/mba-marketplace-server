'use strict';const a23_0x5f5925=a23_0x2433;(function(_0x2baa8b,_0x2b44af){const _0x44f36e=a23_0x2433,_0x52e1c1=_0x2baa8b();while(!![]){try{const _0x41dc8f=-parseInt(_0x44f36e(0x133))/0x1*(-parseInt(_0x44f36e(0x123))/0x2)+parseInt(_0x44f36e(0x13d))/0x3+parseInt(_0x44f36e(0x131))/0x4*(-parseInt(_0x44f36e(0x12f))/0x5)+parseInt(_0x44f36e(0x12d))/0x6*(-parseInt(_0x44f36e(0x12a))/0x7)+parseInt(_0x44f36e(0x135))/0x8+parseInt(_0x44f36e(0x12e))/0x9*(parseInt(_0x44f36e(0x142))/0xa)+-parseInt(_0x44f36e(0x13f))/0xb*(parseInt(_0x44f36e(0x138))/0xc);if(_0x41dc8f===_0x2b44af)break;else _0x52e1c1['push'](_0x52e1c1['shift']());}catch(_0x47acc5){_0x52e1c1['push'](_0x52e1c1['shift']());}}}(a23_0x50bd,0xdb30d));function a23_0x2433(_0x3e7ebf,_0x21430e){const _0x50bdb1=a23_0x50bd();return a23_0x2433=function(_0x24334e,_0x39cb77){_0x24334e=_0x24334e-0x11f;let _0x13686e=_0x50bdb1[_0x24334e];return _0x13686e;},a23_0x2433(_0x3e7ebf,_0x21430e);}function a23_0x50bd(){const _0x30153d=['ResourceNotFoundError','7gUvjQz','SellersRepository','defineProperty','1774170whxcQG','27fPNWNk','13745iksXDM','execute','604glMTEb','right','150947GPWgSn','count','10585872nnNXIe','__metadata','../../../../core/logic/either','12sFoSso','object','CountSellerTotalProductsUseCase','length','from','4039926iwXZhf','Injectable','33098351auomQf','function','__esModule','5485900VszFvp','decorate','metadata','@nestjs/common','getOwnPropertyDescriptor','productsRepository','../repositories/products.repository','__decorate','4AGCLUK','Seller','sellersRepository','sellerId','./errors/resource-not-found.error','../repositories/sellers.repository'];a23_0x50bd=function(){return _0x30153d;};return a23_0x50bd();}var __decorate=this&&this[a23_0x5f5925(0x122)]||function(_0x27a136,_0x2c4acd,_0x43d164,_0x1e3a6f){const _0x37c2df=a23_0x5f5925;var _0x4804fe=arguments[_0x37c2df(0x13b)],_0x7bfc2e=_0x4804fe<0x3?_0x2c4acd:_0x1e3a6f===null?_0x1e3a6f=Object[_0x37c2df(0x11f)](_0x2c4acd,_0x43d164):_0x1e3a6f,_0x33f11e;if(typeof Reflect===_0x37c2df(0x139)&&typeof Reflect[_0x37c2df(0x143)]===_0x37c2df(0x140))_0x7bfc2e=Reflect[_0x37c2df(0x143)](_0x27a136,_0x2c4acd,_0x43d164,_0x1e3a6f);else{for(var _0x1e9ac6=_0x27a136['length']-0x1;_0x1e9ac6>=0x0;_0x1e9ac6--)if(_0x33f11e=_0x27a136[_0x1e9ac6])_0x7bfc2e=(_0x4804fe<0x3?_0x33f11e(_0x7bfc2e):_0x4804fe>0x3?_0x33f11e(_0x2c4acd,_0x43d164,_0x7bfc2e):_0x33f11e(_0x2c4acd,_0x43d164))||_0x7bfc2e;}return _0x4804fe>0x3&&_0x7bfc2e&&Object['defineProperty'](_0x2c4acd,_0x43d164,_0x7bfc2e),_0x7bfc2e;},__metadata=this&&this[a23_0x5f5925(0x136)]||function(_0x40d6f8,_0x426bfc){const _0x384832=a23_0x5f5925;if(typeof Reflect===_0x384832(0x139)&&typeof Reflect[_0x384832(0x144)]==='function')return Reflect['metadata'](_0x40d6f8,_0x426bfc);};Object[a23_0x5f5925(0x12c)](exports,a23_0x5f5925(0x141),{'value':!![]}),exports[a23_0x5f5925(0x13a)]=void 0x0;const common_1=require(a23_0x5f5925(0x145)),either_1=require(a23_0x5f5925(0x137)),products_repository_1=require(a23_0x5f5925(0x121)),sellers_repository_1=require(a23_0x5f5925(0x128)),resource_not_found_error_1=require(a23_0x5f5925(0x127));let CountSellerTotalProductsUseCase=class CountSellerTotalProductsUseCase{constructor(_0x2e26fd,_0x3be96a){const _0x4859cf=a23_0x5f5925;this[_0x4859cf(0x125)]=_0x2e26fd,this[_0x4859cf(0x120)]=_0x3be96a;}async[a23_0x5f5925(0x130)](_0xcbfc3b){const _0xfd9ad4=a23_0x5f5925,_0xeee3db=await this[_0xfd9ad4(0x125)]['findById'](_0xcbfc3b[_0xfd9ad4(0x126)]);if(!_0xeee3db)return(0x0,either_1['left'])(new resource_not_found_error_1[(_0xfd9ad4(0x129))](_0xfd9ad4(0x124),'ID',_0xcbfc3b[_0xfd9ad4(0x126)]));const _0x1bd570=await this['productsRepository'][_0xfd9ad4(0x134)]({'sellerId':_0xcbfc3b[_0xfd9ad4(0x126)],'from':_0xcbfc3b[_0xfd9ad4(0x13c)]});return(0x0,either_1[_0xfd9ad4(0x132)])({'amount':_0x1bd570});}};exports['CountSellerTotalProductsUseCase']=CountSellerTotalProductsUseCase,exports[a23_0x5f5925(0x13a)]=CountSellerTotalProductsUseCase=__decorate([(0x0,common_1[a23_0x5f5925(0x13e)])(),__metadata('design:paramtypes',[sellers_repository_1[a23_0x5f5925(0x12b)],products_repository_1['ProductsRepository']])],CountSellerTotalProductsUseCase);