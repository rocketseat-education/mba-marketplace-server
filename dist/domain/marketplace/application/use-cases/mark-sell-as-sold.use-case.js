'use strict';const a37_0x4c58ae=a37_0x58fc;(function(_0x34fd6e,_0x4f32ef){const _0x1c67c2=a37_0x58fc,_0x5188b9=_0x34fd6e();while(!![]){try{const _0x22f1e7=parseInt(_0x1c67c2(0x1e8))/0x1+-parseInt(_0x1c67c2(0x1d3))/0x2+parseInt(_0x1c67c2(0x1d6))/0x3+-parseInt(_0x1c67c2(0x1f6))/0x4+-parseInt(_0x1c67c2(0x1e5))/0x5*(parseInt(_0x1c67c2(0x1eb))/0x6)+parseInt(_0x1c67c2(0x1e2))/0x7*(-parseInt(_0x1c67c2(0x1f7))/0x8)+parseInt(_0x1c67c2(0x1ef))/0x9;if(_0x22f1e7===_0x4f32ef)break;else _0x5188b9['push'](_0x5188b9['shift']());}catch(_0x45721b){_0x5188b9['push'](_0x5188b9['shift']());}}}(a37_0x2bd9,0xc8108));var __decorate=this&&this[a37_0x4c58ae(0x1dd)]||function(_0x52c0a6,_0x587ada,_0x2292e7,_0x53e065){const _0x402231=a37_0x4c58ae;var _0x1af972=arguments[_0x402231(0x1ed)],_0x3fc55f=_0x1af972<0x3?_0x587ada:_0x53e065===null?_0x53e065=Object[_0x402231(0x1dc)](_0x587ada,_0x2292e7):_0x53e065,_0xbed156;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x402231(0x1e0))_0x3fc55f=Reflect['decorate'](_0x52c0a6,_0x587ada,_0x2292e7,_0x53e065);else{for(var _0x12b23c=_0x52c0a6['length']-0x1;_0x12b23c>=0x0;_0x12b23c--)if(_0xbed156=_0x52c0a6[_0x12b23c])_0x3fc55f=(_0x1af972<0x3?_0xbed156(_0x3fc55f):_0x1af972>0x3?_0xbed156(_0x587ada,_0x2292e7,_0x3fc55f):_0xbed156(_0x587ada,_0x2292e7))||_0x3fc55f;}return _0x1af972>0x3&&_0x3fc55f&&Object[_0x402231(0x1f5)](_0x587ada,_0x2292e7,_0x3fc55f),_0x3fc55f;},__metadata=this&&this[a37_0x4c58ae(0x1df)]||function(_0x197c56,_0xdc25e2){const _0x365410=a37_0x4c58ae;if(typeof Reflect===_0x365410(0x1d9)&&typeof Reflect[_0x365410(0x1f3)]===_0x365410(0x1e0))return Reflect['metadata'](_0x197c56,_0xdc25e2);};function a37_0x2bd9(){const _0x5ae1e4=['11928Crnrmv','../repositories/sellers.repository','length','Product','22299399DBvetD','productsRepository','status','../../../../core/logic/either','metadata','../../enterprise/entities/product','defineProperty','1914340WXIvWx','3174888wZGeds','owner','SellersRepository','SOLD','findById','../repositories/products.repository','save','all','@nestjs/common','ProductsRepository','2147324QLrwko','right','__esModule','3007896uxByMM','./errors/resource-not-found.error','sellersRepository','object','Status','MarkSellAsSoldUseCase','getOwnPropertyDescriptor','__decorate','productId','__metadata','function','execute','21fPjHDG','You\x20are\x20not\x20the\x20owner\x20of\x20this\x20product.','ResourceNotFoundError','1345odAvwp','equals','NotAllowedError','616723ClQqkx','left','Injectable'];a37_0x2bd9=function(){return _0x5ae1e4;};return a37_0x2bd9();}function a37_0x58fc(_0x2295c9,_0x18afd7){const _0x2bd9d2=a37_0x2bd9();return a37_0x58fc=function(_0x58fcb1,_0x165d82){_0x58fcb1=_0x58fcb1-0x1d1;let _0x2d8dcc=_0x2bd9d2[_0x58fcb1];return _0x2d8dcc;},a37_0x58fc(_0x2295c9,_0x18afd7);}Object[a37_0x4c58ae(0x1f5)](exports,a37_0x4c58ae(0x1d5),{'value':!![]}),exports['MarkSellAsSoldUseCase']=void 0x0;const common_1=require(a37_0x4c58ae(0x1d1)),not_allowed_error_1=require('../../../../core/errors/common/not-allowed.error'),either_1=require(a37_0x4c58ae(0x1f2)),products_repository_1=require(a37_0x4c58ae(0x1fc)),sellers_repository_1=require(a37_0x4c58ae(0x1ec)),resource_not_found_error_1=require(a37_0x4c58ae(0x1d7)),product_1=require(a37_0x4c58ae(0x1f4));let MarkSellAsSoldUseCase=class MarkSellAsSoldUseCase{constructor(_0x283583,_0x47dabb){const _0x460aa6=a37_0x4c58ae;this[_0x460aa6(0x1d8)]=_0x283583,this[_0x460aa6(0x1f0)]=_0x47dabb;}async[a37_0x4c58ae(0x1e1)](_0x542ae2){const _0x30f62b=a37_0x4c58ae,[_0x384fdb,_0x43c317]=await Promise[_0x30f62b(0x1fe)]([this[_0x30f62b(0x1d8)][_0x30f62b(0x1fb)](_0x542ae2['ownerId']),this['productsRepository'][_0x30f62b(0x1fb)](_0x542ae2[_0x30f62b(0x1de)])]);if(!_0x384fdb)return(0x0,either_1['left'])(new resource_not_found_error_1[(_0x30f62b(0x1e4))]('Seller','ID',_0x542ae2['ownerId']));if(!_0x43c317)return(0x0,either_1[_0x30f62b(0x1e9)])(new resource_not_found_error_1[(_0x30f62b(0x1e4))](_0x30f62b(0x1ee),'ID',_0x542ae2['productId']));if(!_0x43c317[_0x30f62b(0x1f8)]['id'][_0x30f62b(0x1e6)](_0x384fdb['id']))return(0x0,either_1[_0x30f62b(0x1e9)])(new not_allowed_error_1['NotAllowedError'](_0x30f62b(0x1e3)));if(_0x43c317[_0x30f62b(0x1f1)]===product_1[_0x30f62b(0x1ee)]['Status'][_0x30f62b(0x1fa)])return(0x0,either_1[_0x30f62b(0x1e9)])(new not_allowed_error_1[(_0x30f62b(0x1e7))]('This\x20product\x20is\x20already\x20sold.'));if(_0x43c317[_0x30f62b(0x1f1)]===product_1[_0x30f62b(0x1ee)][_0x30f62b(0x1da)]['CANCELLED'])return(0x0,either_1[_0x30f62b(0x1e9)])(new not_allowed_error_1[(_0x30f62b(0x1e7))]('You\x20cannot\x20sell\x20a\x20cancelled\x20product.'));return _0x43c317['status']=product_1[_0x30f62b(0x1ee)][_0x30f62b(0x1da)][_0x30f62b(0x1fa)],await this[_0x30f62b(0x1f0)][_0x30f62b(0x1fd)](_0x43c317),(0x0,either_1[_0x30f62b(0x1d4)])({'product':_0x43c317});}};exports[a37_0x4c58ae(0x1db)]=MarkSellAsSoldUseCase,exports[a37_0x4c58ae(0x1db)]=MarkSellAsSoldUseCase=__decorate([(0x0,common_1[a37_0x4c58ae(0x1ea)])(),__metadata('design:paramtypes',[sellers_repository_1[a37_0x4c58ae(0x1f9)],products_repository_1[a37_0x4c58ae(0x1d2)]])],MarkSellAsSoldUseCase);