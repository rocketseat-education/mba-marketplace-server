'use strict';const a98_0x5ab613=a98_0x4eb1;(function(_0x5104b8,_0x4cd14f){const _0x207f5f=a98_0x4eb1,_0x2fd794=_0x5104b8();while(!![]){try{const _0x5aa038=parseInt(_0x207f5f(0x151))/0x1*(parseInt(_0x207f5f(0x14d))/0x2)+-parseInt(_0x207f5f(0x143))/0x3*(parseInt(_0x207f5f(0x142))/0x4)+-parseInt(_0x207f5f(0x155))/0x5*(-parseInt(_0x207f5f(0x152))/0x6)+-parseInt(_0x207f5f(0x154))/0x7+-parseInt(_0x207f5f(0x150))/0x8*(-parseInt(_0x207f5f(0x15b))/0x9)+-parseInt(_0x207f5f(0x146))/0xa*(parseInt(_0x207f5f(0x153))/0xb)+-parseInt(_0x207f5f(0x149))/0xc;if(_0x5aa038===_0x4cd14f)break;else _0x2fd794['push'](_0x2fd794['shift']());}catch(_0x5b7e39){_0x2fd794['push'](_0x2fd794['shift']());}}}(a98_0x405e,0x8646b));function a98_0x405e(){const _0x3ac78b=['10EdIjAL','./category.presenter','map','description','AttachmentPresenter','CategoryPresenter','9dCZUCu','owner','476owIFkB','7698yLvJdn','getItems','toString','420CyhObL','__esModule','toHTTP','1614336xcIjxz','category','./user.presenter','title','988166TlObYL','status','priceInCents','2628568tRuEcm','2lLJmIx','2813538wOkvaM','255233PVcQXs','2031260tsluoE'];a98_0x405e=function(){return _0x3ac78b;};return a98_0x405e();}function a98_0x4eb1(_0x58a279,_0x4f081c){const _0x405e6a=a98_0x405e();return a98_0x4eb1=function(_0x4eb16f,_0x15b077){_0x4eb16f=_0x4eb16f-0x142;let _0x168fdf=_0x405e6a[_0x4eb16f];return _0x168fdf;},a98_0x4eb1(_0x58a279,_0x4f081c);}Object['defineProperty'](exports,a98_0x5ab613(0x147),{'value':!![]}),exports['ProductPresenter']=void 0x0;const attachment_presenter_1=require('./attachment.presenter'),category_presenter_1=require(a98_0x5ab613(0x156)),user_presenter_1=require(a98_0x5ab613(0x14b));class ProductPresenter{static[a98_0x5ab613(0x148)](_0x24c6cc,_0x2118ba){const _0x1084e0=a98_0x5ab613;return{'id':_0x2118ba['id'][_0x1084e0(0x145)](),'title':_0x2118ba[_0x1084e0(0x14c)],'description':_0x2118ba[_0x1084e0(0x158)],'priceInCents':_0x2118ba[_0x1084e0(0x14f)],'status':_0x2118ba[_0x1084e0(0x14e)][_0x1084e0(0x145)](),'owner':user_presenter_1['UserPresenter']['toHTTP'](_0x24c6cc,_0x2118ba[_0x1084e0(0x15c)]),'category':category_presenter_1[_0x1084e0(0x15a)]['toHTTP'](_0x2118ba[_0x1084e0(0x14a)]),'attachments':_0x2118ba['attachments'][_0x1084e0(0x144)]()[_0x1084e0(0x157)](_0x2a9c53=>attachment_presenter_1[_0x1084e0(0x159)][_0x1084e0(0x148)](_0x24c6cc,_0x2a9c53))};}}exports['ProductPresenter']=ProductPresenter;