// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__18190 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__18190.cljs$core$IFn$_invoke$arity$1 ? fexpr__18190.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__18190.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18191){
var vec__18192 = p__18191;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__18195 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__18195)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__18195)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__18195)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__18195)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__18195)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18195)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18195)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__18196){
var map__18197 = p__18196;
var map__18197__$1 = (((((!((map__18197 == null))))?(((((map__18197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18197):map__18197);
var request = map__18197__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18197__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18197__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18197__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__18199 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__18199,default_headers);

cljs_http.core.apply_response_type_BANG_(G__18199,response_type);

G__18199.setTimeoutInterval(timeout);

G__18199.setWithCredentials(send_credentials);

return G__18199;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__18200){
var map__18201 = p__18200;
var map__18201__$1 = (((((!((map__18201 == null))))?(((((map__18201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18201):map__18201);
var request = map__18201__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__18203 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__18203) : cljs_http.core.error_kw.call(null,G__18203));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_18227 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__18204_18228 = xhr;
G__18204_18228.setProgressEventsEnabled(true);

G__18204_18228.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18227,cljs.core.cst$kw$upload));

G__18204_18228.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18227,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16178__auto___18229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_18215){
var state_val_18216 = (state_18215[(1)]);
if((state_val_18216 === (1))){
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18215__$1,(2),cancel);
} else {
if((state_val_18216 === (2))){
var inst_18206 = (state_18215[(2)]);
var inst_18207 = xhr.isComplete();
var inst_18208 = cljs.core.not(inst_18207);
var state_18215__$1 = (function (){var statearr_18217 = state_18215;
(statearr_18217[(7)] = inst_18206);

return statearr_18217;
})();
if(inst_18208){
var statearr_18218_18230 = state_18215__$1;
(statearr_18218_18230[(1)] = (3));

} else {
var statearr_18219_18231 = state_18215__$1;
(statearr_18219_18231[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18216 === (3))){
var inst_18210 = xhr.abort();
var state_18215__$1 = state_18215;
var statearr_18220_18232 = state_18215__$1;
(statearr_18220_18232[(2)] = inst_18210);

(statearr_18220_18232[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18216 === (4))){
var state_18215__$1 = state_18215;
var statearr_18221_18233 = state_18215__$1;
(statearr_18221_18233[(2)] = null);

(statearr_18221_18233[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18216 === (5))){
var inst_18213 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18215__$1,inst_18213);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__16104__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16104__auto____0 = (function (){
var statearr_18222 = [null,null,null,null,null,null,null,null];
(statearr_18222[(0)] = cljs_http$core$xhr_$_state_machine__16104__auto__);

(statearr_18222[(1)] = (1));

return statearr_18222;
});
var cljs_http$core$xhr_$_state_machine__16104__auto____1 = (function (state_18215){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_18215);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e18223){var ex__16107__auto__ = e18223;
var statearr_18224_18234 = state_18215;
(statearr_18224_18234[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_18215[(4)]))){
var statearr_18225_18235 = state_18215;
(statearr_18225_18235[(1)] = cljs.core.first((state_18215[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__18236 = state_18215;
state_18215 = G__18236;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16104__auto__ = function(state_18215){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16104__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16104__auto____1.call(this,state_18215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16104__auto____0;
cljs_http$core$xhr_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16104__auto____1;
return cljs_http$core$xhr_$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_18226 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_18226[(6)] = c__16178__auto___18229);

return statearr_18226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__18237){
var map__18238 = p__18237;
var map__18238__$1 = (((((!((map__18238 == null))))?(((((map__18238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18238):map__18238);
var request = map__18238__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18238__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_18252 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_18252], null));

if(cljs.core.truth_(cancel)){
var c__16178__auto___18253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_18244){
var state_val_18245 = (state_18244[(1)]);
if((state_val_18245 === (1))){
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18244__$1,(2),cancel);
} else {
if((state_val_18245 === (2))){
var inst_18241 = (state_18244[(2)]);
var inst_18242 = jsonp.cancel(req_18252);
var state_18244__$1 = (function (){var statearr_18246 = state_18244;
(statearr_18246[(7)] = inst_18241);

return statearr_18246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18244__$1,inst_18242);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__16104__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16104__auto____0 = (function (){
var statearr_18247 = [null,null,null,null,null,null,null,null];
(statearr_18247[(0)] = cljs_http$core$jsonp_$_state_machine__16104__auto__);

(statearr_18247[(1)] = (1));

return statearr_18247;
});
var cljs_http$core$jsonp_$_state_machine__16104__auto____1 = (function (state_18244){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_18244);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e18248){var ex__16107__auto__ = e18248;
var statearr_18249_18254 = state_18244;
(statearr_18249_18254[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_18244[(4)]))){
var statearr_18250_18255 = state_18244;
(statearr_18250_18255[(1)] = cljs.core.first((state_18244[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__18256 = state_18244;
state_18244 = G__18256;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16104__auto__ = function(state_18244){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16104__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16104__auto____1.call(this,state_18244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16104__auto____0;
cljs_http$core$jsonp_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16104__auto____1;
return cljs_http$core$jsonp_$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_18251 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_18251[(6)] = c__16178__auto___18253);

return statearr_18251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18257){
var map__18258 = p__18257;
var map__18258__$1 = (((((!((map__18258 == null))))?(((((map__18258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18258):map__18258);
var request = map__18258__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18258__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
