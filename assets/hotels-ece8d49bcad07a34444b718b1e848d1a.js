"use strict"
define("hotels/app",["exports","hotels/resolver","ember-load-initializers","hotels/config/environment"],function(e,t,a,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:t.default});(0,a.default)(n,l.default.modulePrefix)
var o=n
e.default=o}),define("hotels/helpers/app-version",["exports","hotels/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function l(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.default.APP.version,o=l.versionOnly||l.hideSha,i=l.shaOnly||l.hideVersion,r=null
return o&&(l.showExtended&&(r=n.match(a.versionExtendedRegExp)),r||(r=n.match(a.versionRegExp))),i&&(r=n.match(a.shaRegExp)),r?r[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=l,e.default=void 0
var n=Ember.Helper.helper(l)
e.default=n}),define("hotels/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("hotels/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("hotels/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","hotels/config/environment"],function(e,t,a){var l,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(l=a.default.APP.name,n=a.default.APP.version)
var o={name:"App Version",initialize:(0,t.default)(l,n)}
e.default=o}),define("hotels/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("hotels/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l={name:"ember-data",initialize:t.default}
e.default=l}),define("hotels/initializers/export-application-global",["exports","hotels/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var l,n=t.default.exportApplicationGlobal
l="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),a[l]||(a[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[l]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var l={name:"export-application-global",initialize:a}
e.default=l}),define("hotels/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("hotels/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("hotels/router",["exports","hotels/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("all"),this.route("Hotels",function(){this.route("all"),this.route("place",{path:"/Hotels/place/:place"})})})
var l=a
e.default=l}),define("hotels/routes/hotels/all",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return new Promise(function(e){Ember.$.getJSON("/data/all.json").then(function(t){return e(t)})})}})
e.default=t}),define("hotels/routes/hotels/place",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(e){return Ember.$.getJSON("/data/".concat(e.place,".json"))}})
e.default=t}),define("hotels/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({beforeModel:function(){this.transitionTo("Hotels.all")}})
e.default=t}),define("hotels/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("hotels/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"bFs/70+L",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","app-hotels"],[9],[0,"\\n    "],[7,"div"],[11,"class","app-header"],[9],[0,"\\n        "],[7,"h2"],[9],[7,"a"],[11,"href","/"],[9],[0,"Hotels.com"],[10],[10],[0,"\\n        "],[7,"h4"],[9],[0,"Your one stop destination for the Restaurants in South India"],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","app-content"],[9],[0,"\\n        "],[1,[21,"outlet"],false],[0,"\\n    "],[10],[0,"\\n"],[10],[0,"\\n\\n"]],"hasEval":false}',meta:{moduleName:"hotels/templates/application.hbs"}})
e.default=t}),define("hotels/templates/hotels/all",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"42LhZ352",block:'{"symbols":["row"],"statements":[[7,"h4"],[9],[0,"List of All Hotels"],[10],[0,"\\n"],[7,"div"],[11,"class","row"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"    "],[7,"div"],[11,"class","col-sm-3"],[9],[0,"\\n        "],[7,"div"],[11,"class","card"],[11,"style","width: 18rem;"],[9],[0,"\\n            "],[7,"div"],[11,"class","card-img-top"],[12,"style",[28,["background-image: url(/images",[22,1,["imageurl"]],")"]]],[12,"alt",[28,[[22,1,["name"]]]]],[9],[10],[0,"\\n            "],[7,"div"],[11,"class","card-body"],[9],[0,"\\n                "],[7,"h5"],[11,"class","card-title"],[9],[1,[22,1,["name"]],false],[10],[0,"\\n                "],[7,"p"],[11,"class","card-text"],[9],[0,"Rated "],[7,"b"],[9],[1,[22,1,["rating"]],false],[0,"/5"],[10],[0," by the trusted customers"],[10],[0,"\\n                "],[4,"link-to",["Hotels.place",[22,1,["place"]]],null,{"statements":[[7,"span"],[11,"class","card-link"],[9],[0,"More Hotels in "],[1,[22,1,["place"]],false],[10]],"parameters":[]},null],[0,"\\n            "],[10],[0,"\\n        "],[10],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n\\n\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"hotels/templates/hotels/all.hbs"}})
e.default=t}),define("hotels/templates/hotels/place",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"JI9zyTaQ",block:'{"symbols":["hotel"],"statements":[[7,"h5"],[9],[0,"Hotels in "],[1,[23,["model","0","place"]],false],[10],[0,"\\n"],[7,"div"],[11,"class","row"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"    "],[7,"div"],[11,"class","col-sm-3"],[9],[0,"\\n        "],[7,"div"],[11,"class","card"],[11,"style","width: 18rem;"],[9],[0,"\\n            "],[7,"div"],[11,"class","card-img-top"],[12,"style",[28,["background-image: url(/images",[22,1,["imageurl"]],")"]]],[12,"alt",[28,[[22,1,["name"]]]]],[9],[0,"\\n            "],[10],[0,"\\n            "],[7,"div"],[11,"class","card-body"],[9],[0,"\\n                "],[7,"h5"],[11,"class","card-title"],[9],[1,[22,1,["name"]],false],[10],[0,"\\n                "],[7,"p"],[11,"class","card-text"],[9],[0,"Rated "],[7,"b"],[9],[1,[22,1,["rating"]],false],[0,"/5"],[10],[0," by the trusted customers"],[10],[0,"\\n            "],[10],[0,"\\n        "],[10],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"hotels/templates/hotels/place.hbs"}})
e.default=t}),define("hotels/config/environment",[],function(){try{var e="hotels/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(l){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("hotels/app").default.create({name:"hotels",version:"0.0.0+9e0339ef"})
