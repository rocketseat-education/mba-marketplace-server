'use strict';var a33_0x8ad60b=a33_0x5550;(function(_0x421c9d,_0xd7d20a){var _0x2b21ab=a33_0x5550,_0x5fa529=_0x421c9d();while(!![]){try{var _0x363d98=parseInt(_0x2b21ab(0x9f))/0x1*(parseInt(_0x2b21ab(0xa4))/0x2)+parseInt(_0x2b21ab(0x91))/0x3*(parseInt(_0x2b21ab(0x9c))/0x4)+parseInt(_0x2b21ab(0xa1))/0x5*(parseInt(_0x2b21ab(0x8c))/0x6)+-parseInt(_0x2b21ab(0x98))/0x7+-parseInt(_0x2b21ab(0x94))/0x8+parseInt(_0x2b21ab(0x9e))/0x9+-parseInt(_0x2b21ab(0x9b))/0xa;if(_0x363d98===_0xd7d20a)break;else _0x5fa529['push'](_0x5fa529['shift']());}catch(_0x26a9b1){_0x5fa529['push'](_0x5fa529['shift']());}}}(a33_0x4a33,0x32889));var __decorate=this&&this[a33_0x8ad60b(0x99)]||function(_0xbdc743,_0x318df6,_0x198cc4,_0x11cf45){var _0x236fc1=a33_0x8ad60b,_0x7a62db=arguments['length'],_0x1fd7e3=_0x7a62db<0x3?_0x318df6:_0x11cf45===null?_0x11cf45=Object[_0x236fc1(0x96)](_0x318df6,_0x198cc4):_0x11cf45,_0x2d2a31;if(typeof Reflect===_0x236fc1(0xa0)&&typeof Reflect[_0x236fc1(0xa2)]==='function')_0x1fd7e3=Reflect[_0x236fc1(0xa2)](_0xbdc743,_0x318df6,_0x198cc4,_0x11cf45);else{for(var _0x1e242b=_0xbdc743[_0x236fc1(0x9a)]-0x1;_0x1e242b>=0x0;_0x1e242b--)if(_0x2d2a31=_0xbdc743[_0x1e242b])_0x1fd7e3=(_0x7a62db<0x3?_0x2d2a31(_0x1fd7e3):_0x7a62db>0x3?_0x2d2a31(_0x318df6,_0x198cc4,_0x1fd7e3):_0x2d2a31(_0x318df6,_0x198cc4))||_0x1fd7e3;}return _0x7a62db>0x3&&_0x1fd7e3&&Object[_0x236fc1(0x9d)](_0x318df6,_0x198cc4,_0x1fd7e3),_0x1fd7e3;},__metadata=this&&this[a33_0x8ad60b(0x8f)]||function(_0x460396,_0x2684c9){var _0x142c2f=a33_0x8ad60b;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x142c2f(0x95))return Reflect['metadata'](_0x460396,_0x2684c9);};Object[a33_0x8ad60b(0x9d)](exports,a33_0x8ad60b(0xa5),{'value':!![]}),exports[a33_0x8ad60b(0x92)]=void 0x0;function a33_0x4a33(){var _0x3939d5=['__esModule','productsRepository','12nqSgph','Injectable','ProductsRepository','__metadata','design:paramtypes','114537nKMSKY','ListAllProductsUseCase','right','1859584MSkJyY','function','getOwnPropertyDescriptor','page','972328BRTJHd','__decorate','length','350210bxpHbh','36HwStrs','defineProperty','1082538mhdBYz','411VVRZpJ','object','33560jTUOOT','decorate','execute','662VikXXh'];a33_0x4a33=function(){return _0x3939d5;};return a33_0x4a33();}function a33_0x5550(_0x378003,_0x197395){var _0x4a330d=a33_0x4a33();return a33_0x5550=function(_0x5550dd,_0x4855e8){_0x5550dd=_0x5550dd-0x8b;var _0x2a8abc=_0x4a330d[_0x5550dd];return _0x2a8abc;},a33_0x5550(_0x378003,_0x197395);}const common_1=require('@nestjs/common'),either_1=require('../../../../core/logic/either'),products_repository_1=require('../repositories/products.repository');let ListAllProductsUseCase=class ListAllProductsUseCase{constructor(_0x582bbf){var _0x2b71e4=a33_0x8ad60b;this[_0x2b71e4(0x8b)]=_0x582bbf;}async[a33_0x8ad60b(0xa3)](_0x254d5a){var _0x302b34=a33_0x8ad60b;const _0x580ed3=await this[_0x302b34(0x8b)]['findMany']({'page':_0x254d5a[_0x302b34(0x97)],'search':_0x254d5a['search'],'status':_0x254d5a['status']});return(0x0,either_1[_0x302b34(0x93)])({'products':_0x580ed3});}};exports[a33_0x8ad60b(0x92)]=ListAllProductsUseCase,exports[a33_0x8ad60b(0x92)]=ListAllProductsUseCase=__decorate([(0x0,common_1[a33_0x8ad60b(0x8d)])(),__metadata(a33_0x8ad60b(0x90),[products_repository_1[a33_0x8ad60b(0x8e)]])],ListAllProductsUseCase);