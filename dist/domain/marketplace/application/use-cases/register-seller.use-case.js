'use strict';const a38_0x8f3643=a38_0xf95c;function a38_0x5be1(){const _0x2984bd=['findByEmail','./errors/resource-not-found.error','avatarId','16494OKQCIq','../cryptography/hash-generator','Seller','4790988zoiHHS','1105840jyERCX','attachmentsRepository','execute','hashGenerator','create','object','left','defineProperty','PhoneAlreadyExistsError','HashGenerator','34938JjStXh','620Sxnoaq','right','getOwnPropertyDescriptor','findById','3253620ZdoUpF','design:paramtypes','phone','sellersRepository','avatar','217rJyrEx','./errors/email-already-exists.error','__esModule','315189NYZidn','function','SellersRepository','AttachmentsRepository','length','all','RegisterSellerUseCase','../repositories/attachments.repository','findByPhone','metadata','4EbMiZP','../../enterprise/entities/user/seller','hash','decorate','6ETJfNX','174438NFNRIl','__metadata'];a38_0x5be1=function(){return _0x2984bd;};return a38_0x5be1();}(function(_0x168147,_0x4ec4f2){const _0x3e7aca=a38_0xf95c,_0xe1f21f=_0x168147();while(!![]){try{const _0x33d1b4=-parseInt(_0x3e7aca(0xc3))/0x1*(-parseInt(_0x3e7aca(0xa8))/0x2)+parseInt(_0x3e7aca(0xb5))/0x3+-parseInt(_0x3e7aca(0xbf))/0x4*(-parseInt(_0x3e7aca(0xad))/0x5)+parseInt(_0x3e7aca(0x9a))/0x6*(parseInt(_0x3e7aca(0xb2))/0x7)+-parseInt(_0x3e7aca(0x9e))/0x8+parseInt(_0x3e7aca(0x9d))/0x9+parseInt(_0x3e7aca(0xa9))/0xa*(-parseInt(_0x3e7aca(0x95))/0xb);if(_0x33d1b4===_0x4ec4f2)break;else _0xe1f21f['push'](_0xe1f21f['shift']());}catch(_0x31907b){_0xe1f21f['push'](_0xe1f21f['shift']());}}}(a38_0x5be1,0x57176));var __decorate=this&&this['__decorate']||function(_0x24375a,_0x2e44cd,_0x3a5bfe,_0x2335a8){const _0x447155=a38_0xf95c;var _0x5aaa4b=arguments['length'],_0x41ad71=_0x5aaa4b<0x3?_0x2e44cd:_0x2335a8===null?_0x2335a8=Object[_0x447155(0xab)](_0x2e44cd,_0x3a5bfe):_0x2335a8,_0x317694;if(typeof Reflect===_0x447155(0xa3)&&typeof Reflect[_0x447155(0xc2)]===_0x447155(0xb6))_0x41ad71=Reflect['decorate'](_0x24375a,_0x2e44cd,_0x3a5bfe,_0x2335a8);else{for(var _0x3952bc=_0x24375a[_0x447155(0xb9)]-0x1;_0x3952bc>=0x0;_0x3952bc--)if(_0x317694=_0x24375a[_0x3952bc])_0x41ad71=(_0x5aaa4b<0x3?_0x317694(_0x41ad71):_0x5aaa4b>0x3?_0x317694(_0x2e44cd,_0x3a5bfe,_0x41ad71):_0x317694(_0x2e44cd,_0x3a5bfe))||_0x41ad71;}return _0x5aaa4b>0x3&&_0x41ad71&&Object[_0x447155(0xa5)](_0x2e44cd,_0x3a5bfe,_0x41ad71),_0x41ad71;},__metadata=this&&this[a38_0x8f3643(0x96)]||function(_0x12716a,_0xfe191f){const _0x2cc066=a38_0x8f3643;if(typeof Reflect===_0x2cc066(0xa3)&&typeof Reflect[_0x2cc066(0xbe)]===_0x2cc066(0xb6))return Reflect['metadata'](_0x12716a,_0xfe191f);};Object['defineProperty'](exports,a38_0x8f3643(0xb4),{'value':!![]}),exports[a38_0x8f3643(0xbb)]=void 0x0;const common_1=require('@nestjs/common'),either_1=require('../../../../core/logic/either'),hash_generator_1=require(a38_0x8f3643(0x9b)),attachments_repository_1=require(a38_0x8f3643(0xbc)),sellers_repository_1=require('../repositories/sellers.repository'),email_already_exists_error_1=require(a38_0x8f3643(0xb3)),phone_already_exists_error_1=require('./errors/phone-already-exists.error'),resource_not_found_error_1=require(a38_0x8f3643(0x98)),seller_1=require(a38_0x8f3643(0xc0));function a38_0xf95c(_0x421af0,_0x5de032){const _0x5be13f=a38_0x5be1();return a38_0xf95c=function(_0xf95c9c,_0x229d24){_0xf95c9c=_0xf95c9c-0x95;let _0x4c64de=_0x5be13f[_0xf95c9c];return _0x4c64de;},a38_0xf95c(_0x421af0,_0x5de032);}let RegisterSellerUseCase=class RegisterSellerUseCase{constructor(_0x201f68,_0x32b06e,_0xaebb39){const _0x4c8f23=a38_0x8f3643;this[_0x4c8f23(0xb0)]=_0x201f68,this[_0x4c8f23(0x9f)]=_0x32b06e,this[_0x4c8f23(0xa1)]=_0xaebb39;}async[a38_0x8f3643(0xa0)](_0x1f8c58){const _0x1e3dea=a38_0x8f3643,_0x1591a4=_0x1f8c58['email']['toLowerCase'](),[_0x24de16,_0x425442]=await Promise[_0x1e3dea(0xba)]([this['sellersRepository'][_0x1e3dea(0x97)](_0x1591a4),this[_0x1e3dea(0xb0)][_0x1e3dea(0xbd)](_0x1f8c58[_0x1e3dea(0xaf)])]);if(_0x24de16)return(0x0,either_1[_0x1e3dea(0xa4)])(new email_already_exists_error_1['EmailAlreadyExistsError'](_0x1591a4));if(_0x425442)return(0x0,either_1[_0x1e3dea(0xa4)])(new phone_already_exists_error_1[(_0x1e3dea(0xa6))](_0x1f8c58[_0x1e3dea(0xaf)]));const _0x2ca47b=await this['hashGenerator'][_0x1e3dea(0xc1)](_0x1f8c58['password']),_0x4d310d=seller_1[_0x1e3dea(0x9c)][_0x1e3dea(0xa2)]({'email':_0x1591a4,'name':_0x1f8c58['name'],'phone':_0x1f8c58[_0x1e3dea(0xaf)],'password':_0x2ca47b});if(_0x1f8c58['avatarId']){const _0x337a29=await this[_0x1e3dea(0x9f)][_0x1e3dea(0xac)](_0x1f8c58[_0x1e3dea(0x99)]);if(!_0x337a29)return(0x0,either_1[_0x1e3dea(0xa4)])(new resource_not_found_error_1['ResourceNotFoundError']('Attachment','ID',_0x1f8c58[_0x1e3dea(0x99)]));_0x4d310d[_0x1e3dea(0xb1)]=_0x337a29;}return await this[_0x1e3dea(0xb0)]['create'](_0x4d310d),(0x0,either_1[_0x1e3dea(0xaa)])({'seller':_0x4d310d});}};exports[a38_0x8f3643(0xbb)]=RegisterSellerUseCase,exports[a38_0x8f3643(0xbb)]=RegisterSellerUseCase=__decorate([(0x0,common_1['Injectable'])(),__metadata(a38_0x8f3643(0xae),[sellers_repository_1[a38_0x8f3643(0xb7)],attachments_repository_1[a38_0x8f3643(0xb8)],hash_generator_1[a38_0x8f3643(0xa7)]])],RegisterSellerUseCase);