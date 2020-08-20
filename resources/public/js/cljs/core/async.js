// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16238 = arguments.length;
switch (G__16238) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16239 = (function (f,blockable,meta16240){
this.f = f;
this.blockable = blockable;
this.meta16240 = meta16240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16241,meta16240__$1){
var self__ = this;
var _16241__$1 = this;
return (new cljs.core.async.t_cljs$core$async16239(self__.f,self__.blockable,meta16240__$1));
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16241){
var self__ = this;
var _16241__$1 = this;
return self__.meta16240;
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16240], null);
}));

(cljs.core.async.t_cljs$core$async16239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16239");

(cljs.core.async.t_cljs$core$async16239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16239.
 */
cljs.core.async.__GT_t_cljs$core$async16239 = (function cljs$core$async$__GT_t_cljs$core$async16239(f__$1,blockable__$1,meta16240){
return (new cljs.core.async.t_cljs$core$async16239(f__$1,blockable__$1,meta16240));
});

}

return (new cljs.core.async.t_cljs$core$async16239(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16245 = arguments.length;
switch (G__16245) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16248 = arguments.length;
switch (G__16248) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16251 = arguments.length;
switch (G__16251) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16253 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16253) : fn1.call(null,val_16253));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16253) : fn1.call(null,val_16253));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16255 = arguments.length;
switch (G__16255) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___16257 = n;
var x_16258 = (0);
while(true){
if((x_16258 < n__4613__auto___16257)){
(a[x_16258] = x_16258);

var G__16259 = (x_16258 + (1));
x_16258 = G__16259;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16260 = (function (flag,meta16261){
this.flag = flag;
this.meta16261 = meta16261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16262,meta16261__$1){
var self__ = this;
var _16262__$1 = this;
return (new cljs.core.async.t_cljs$core$async16260(self__.flag,meta16261__$1));
}));

(cljs.core.async.t_cljs$core$async16260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16262){
var self__ = this;
var _16262__$1 = this;
return self__.meta16261;
}));

(cljs.core.async.t_cljs$core$async16260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16261], null);
}));

(cljs.core.async.t_cljs$core$async16260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16260");

(cljs.core.async.t_cljs$core$async16260.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16260.
 */
cljs.core.async.__GT_t_cljs$core$async16260 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16260(flag__$1,meta16261){
return (new cljs.core.async.t_cljs$core$async16260(flag__$1,meta16261));
});

}

return (new cljs.core.async.t_cljs$core$async16260(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16263 = (function (flag,cb,meta16264){
this.flag = flag;
this.cb = cb;
this.meta16264 = meta16264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16265,meta16264__$1){
var self__ = this;
var _16265__$1 = this;
return (new cljs.core.async.t_cljs$core$async16263(self__.flag,self__.cb,meta16264__$1));
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16265){
var self__ = this;
var _16265__$1 = this;
return self__.meta16264;
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16264], null);
}));

(cljs.core.async.t_cljs$core$async16263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16263");

(cljs.core.async.t_cljs$core$async16263.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16263.
 */
cljs.core.async.__GT_t_cljs$core$async16263 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16263(flag__$1,cb__$1,meta16264){
return (new cljs.core.async.t_cljs$core$async16263(flag__$1,cb__$1,meta16264));
});

}

return (new cljs.core.async.t_cljs$core$async16263(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16266_SHARP_){
var G__16268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16266_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16268) : fret.call(null,G__16268));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16267_SHARP_){
var G__16269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16267_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16269) : fret.call(null,G__16269));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16270 = (i + (1));
i = G__16270;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16276 = arguments.length;
var i__4737__auto___16277 = (0);
while(true){
if((i__4737__auto___16277 < len__4736__auto___16276)){
args__4742__auto__.push((arguments[i__4737__auto___16277]));

var G__16278 = (i__4737__auto___16277 + (1));
i__4737__auto___16277 = G__16278;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16273){
var map__16274 = p__16273;
var map__16274__$1 = (((((!((map__16274 == null))))?(((((map__16274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16274):map__16274);
var opts = map__16274__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16271){
var G__16272 = cljs.core.first(seq16271);
var seq16271__$1 = cljs.core.next(seq16271);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16272,seq16271__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16280 = arguments.length;
switch (G__16280) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16178__auto___16327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16304){
var state_val_16305 = (state_16304[(1)]);
if((state_val_16305 === (7))){
var inst_16300 = (state_16304[(2)]);
var state_16304__$1 = state_16304;
var statearr_16306_16328 = state_16304__$1;
(statearr_16306_16328[(2)] = inst_16300);

(statearr_16306_16328[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (1))){
var state_16304__$1 = state_16304;
var statearr_16307_16329 = state_16304__$1;
(statearr_16307_16329[(2)] = null);

(statearr_16307_16329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (4))){
var inst_16283 = (state_16304[(7)]);
var inst_16283__$1 = (state_16304[(2)]);
var inst_16284 = (inst_16283__$1 == null);
var state_16304__$1 = (function (){var statearr_16308 = state_16304;
(statearr_16308[(7)] = inst_16283__$1);

return statearr_16308;
})();
if(cljs.core.truth_(inst_16284)){
var statearr_16309_16330 = state_16304__$1;
(statearr_16309_16330[(1)] = (5));

} else {
var statearr_16310_16331 = state_16304__$1;
(statearr_16310_16331[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (13))){
var state_16304__$1 = state_16304;
var statearr_16311_16332 = state_16304__$1;
(statearr_16311_16332[(2)] = null);

(statearr_16311_16332[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (6))){
var inst_16283 = (state_16304[(7)]);
var state_16304__$1 = state_16304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16304__$1,(11),to,inst_16283);
} else {
if((state_val_16305 === (3))){
var inst_16302 = (state_16304[(2)]);
var state_16304__$1 = state_16304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16304__$1,inst_16302);
} else {
if((state_val_16305 === (12))){
var state_16304__$1 = state_16304;
var statearr_16312_16333 = state_16304__$1;
(statearr_16312_16333[(2)] = null);

(statearr_16312_16333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (2))){
var state_16304__$1 = state_16304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16304__$1,(4),from);
} else {
if((state_val_16305 === (11))){
var inst_16293 = (state_16304[(2)]);
var state_16304__$1 = state_16304;
if(cljs.core.truth_(inst_16293)){
var statearr_16313_16334 = state_16304__$1;
(statearr_16313_16334[(1)] = (12));

} else {
var statearr_16314_16335 = state_16304__$1;
(statearr_16314_16335[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (9))){
var state_16304__$1 = state_16304;
var statearr_16315_16336 = state_16304__$1;
(statearr_16315_16336[(2)] = null);

(statearr_16315_16336[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (5))){
var state_16304__$1 = state_16304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16316_16337 = state_16304__$1;
(statearr_16316_16337[(1)] = (8));

} else {
var statearr_16317_16338 = state_16304__$1;
(statearr_16317_16338[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (14))){
var inst_16298 = (state_16304[(2)]);
var state_16304__$1 = state_16304;
var statearr_16318_16339 = state_16304__$1;
(statearr_16318_16339[(2)] = inst_16298);

(statearr_16318_16339[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (10))){
var inst_16290 = (state_16304[(2)]);
var state_16304__$1 = state_16304;
var statearr_16319_16340 = state_16304__$1;
(statearr_16319_16340[(2)] = inst_16290);

(statearr_16319_16340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16305 === (8))){
var inst_16287 = cljs.core.async.close_BANG_(to);
var state_16304__$1 = state_16304;
var statearr_16320_16341 = state_16304__$1;
(statearr_16320_16341[(2)] = inst_16287);

(statearr_16320_16341[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_16321 = [null,null,null,null,null,null,null,null];
(statearr_16321[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_16321[(1)] = (1));

return statearr_16321;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_16304){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16304);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16322){var ex__16107__auto__ = e16322;
var statearr_16323_16342 = state_16304;
(statearr_16323_16342[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16304[(4)]))){
var statearr_16324_16343 = state_16304;
(statearr_16324_16343[(1)] = cljs.core.first((state_16304[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16344 = state_16304;
state_16304 = G__16344;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_16304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_16304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16325 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16325[(6)] = c__16178__auto___16327);

return statearr_16325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__16345){
var vec__16346 = p__16345;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(1),null);
var job = vec__16346;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16178__auto___16522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16353){
var state_val_16354 = (state_16353[(1)]);
if((state_val_16354 === (1))){
var state_16353__$1 = state_16353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16353__$1,(2),res,v);
} else {
if((state_val_16354 === (2))){
var inst_16350 = (state_16353[(2)]);
var inst_16351 = cljs.core.async.close_BANG_(res);
var state_16353__$1 = (function (){var statearr_16355 = state_16353;
(statearr_16355[(7)] = inst_16350);

return statearr_16355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16353__$1,inst_16351);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0 = (function (){
var statearr_16356 = [null,null,null,null,null,null,null,null];
(statearr_16356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__);

(statearr_16356[(1)] = (1));

return statearr_16356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1 = (function (state_16353){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16353);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16357){var ex__16107__auto__ = e16357;
var statearr_16358_16523 = state_16353;
(statearr_16358_16523[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16353[(4)]))){
var statearr_16359_16524 = state_16353;
(statearr_16359_16524[(1)] = cljs.core.first((state_16353[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16525 = state_16353;
state_16353 = G__16525;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = function(state_16353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1.call(this,state_16353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16360 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16360[(6)] = c__16178__auto___16522);

return statearr_16360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16361){
var vec__16362 = p__16361;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(1),null);
var job = vec__16362;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___16526 = n;
var __16527 = (0);
while(true){
if((__16527 < n__4613__auto___16526)){
var G__16365_16528 = type;
var G__16365_16529__$1 = (((G__16365_16528 instanceof cljs.core.Keyword))?G__16365_16528.fqn:null);
switch (G__16365_16529__$1) {
case "compute":
var c__16178__auto___16531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16527,c__16178__auto___16531,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async){
return (function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = ((function (__16527,c__16178__auto___16531,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async){
return (function (state_16378){
var state_val_16379 = (state_16378[(1)]);
if((state_val_16379 === (1))){
var state_16378__$1 = state_16378;
var statearr_16380_16532 = state_16378__$1;
(statearr_16380_16532[(2)] = null);

(statearr_16380_16532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16379 === (2))){
var state_16378__$1 = state_16378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16378__$1,(4),jobs);
} else {
if((state_val_16379 === (3))){
var inst_16376 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16378__$1,inst_16376);
} else {
if((state_val_16379 === (4))){
var inst_16368 = (state_16378[(2)]);
var inst_16369 = process(inst_16368);
var state_16378__$1 = state_16378;
if(cljs.core.truth_(inst_16369)){
var statearr_16381_16533 = state_16378__$1;
(statearr_16381_16533[(1)] = (5));

} else {
var statearr_16382_16534 = state_16378__$1;
(statearr_16382_16534[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16379 === (5))){
var state_16378__$1 = state_16378;
var statearr_16383_16535 = state_16378__$1;
(statearr_16383_16535[(2)] = null);

(statearr_16383_16535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16379 === (6))){
var state_16378__$1 = state_16378;
var statearr_16384_16536 = state_16378__$1;
(statearr_16384_16536[(2)] = null);

(statearr_16384_16536[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16379 === (7))){
var inst_16374 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
var statearr_16385_16537 = state_16378__$1;
(statearr_16385_16537[(2)] = inst_16374);

(statearr_16385_16537[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16527,c__16178__auto___16531,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async))
;
return ((function (__16527,switch__16103__auto__,c__16178__auto___16531,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0 = (function (){
var statearr_16386 = [null,null,null,null,null,null,null];
(statearr_16386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__);

(statearr_16386[(1)] = (1));

return statearr_16386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1 = (function (state_16378){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16378);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16387){var ex__16107__auto__ = e16387;
var statearr_16388_16538 = state_16378;
(statearr_16388_16538[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16378[(4)]))){
var statearr_16389_16539 = state_16378;
(statearr_16389_16539[(1)] = cljs.core.first((state_16378[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16540 = state_16378;
state_16378 = G__16540;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = function(state_16378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1.call(this,state_16378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__;
})()
;})(__16527,switch__16103__auto__,c__16178__auto___16531,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async))
})();
var state__16180__auto__ = (function (){var statearr_16390 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16390[(6)] = c__16178__auto___16531);

return statearr_16390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
});})(__16527,c__16178__auto___16531,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async))
);


break;
case "async":
var c__16178__auto___16541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16527,c__16178__auto___16541,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async){
return (function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = ((function (__16527,c__16178__auto___16541,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async){
return (function (state_16403){
var state_val_16404 = (state_16403[(1)]);
if((state_val_16404 === (1))){
var state_16403__$1 = state_16403;
var statearr_16405_16542 = state_16403__$1;
(statearr_16405_16542[(2)] = null);

(statearr_16405_16542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16404 === (2))){
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16403__$1,(4),jobs);
} else {
if((state_val_16404 === (3))){
var inst_16401 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16403__$1,inst_16401);
} else {
if((state_val_16404 === (4))){
var inst_16393 = (state_16403[(2)]);
var inst_16394 = async(inst_16393);
var state_16403__$1 = state_16403;
if(cljs.core.truth_(inst_16394)){
var statearr_16406_16543 = state_16403__$1;
(statearr_16406_16543[(1)] = (5));

} else {
var statearr_16407_16544 = state_16403__$1;
(statearr_16407_16544[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16404 === (5))){
var state_16403__$1 = state_16403;
var statearr_16408_16545 = state_16403__$1;
(statearr_16408_16545[(2)] = null);

(statearr_16408_16545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16404 === (6))){
var state_16403__$1 = state_16403;
var statearr_16409_16546 = state_16403__$1;
(statearr_16409_16546[(2)] = null);

(statearr_16409_16546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16404 === (7))){
var inst_16399 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16410_16547 = state_16403__$1;
(statearr_16410_16547[(2)] = inst_16399);

(statearr_16410_16547[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16527,c__16178__auto___16541,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async))
;
return ((function (__16527,switch__16103__auto__,c__16178__auto___16541,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0 = (function (){
var statearr_16411 = [null,null,null,null,null,null,null];
(statearr_16411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__);

(statearr_16411[(1)] = (1));

return statearr_16411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1 = (function (state_16403){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16403);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16412){var ex__16107__auto__ = e16412;
var statearr_16413_16548 = state_16403;
(statearr_16413_16548[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16403[(4)]))){
var statearr_16414_16549 = state_16403;
(statearr_16414_16549[(1)] = cljs.core.first((state_16403[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16550 = state_16403;
state_16403 = G__16550;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = function(state_16403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1.call(this,state_16403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__;
})()
;})(__16527,switch__16103__auto__,c__16178__auto___16541,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async))
})();
var state__16180__auto__ = (function (){var statearr_16415 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16415[(6)] = c__16178__auto___16541);

return statearr_16415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
});})(__16527,c__16178__auto___16541,G__16365_16528,G__16365_16529__$1,n__4613__auto___16526,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16365_16529__$1)].join('')));

}

var G__16551 = (__16527 + (1));
__16527 = G__16551;
continue;
} else {
}
break;
}

var c__16178__auto___16552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16437){
var state_val_16438 = (state_16437[(1)]);
if((state_val_16438 === (7))){
var inst_16433 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16439_16553 = state_16437__$1;
(statearr_16439_16553[(2)] = inst_16433);

(statearr_16439_16553[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16438 === (1))){
var state_16437__$1 = state_16437;
var statearr_16440_16554 = state_16437__$1;
(statearr_16440_16554[(2)] = null);

(statearr_16440_16554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16438 === (4))){
var inst_16418 = (state_16437[(7)]);
var inst_16418__$1 = (state_16437[(2)]);
var inst_16419 = (inst_16418__$1 == null);
var state_16437__$1 = (function (){var statearr_16441 = state_16437;
(statearr_16441[(7)] = inst_16418__$1);

return statearr_16441;
})();
if(cljs.core.truth_(inst_16419)){
var statearr_16442_16555 = state_16437__$1;
(statearr_16442_16555[(1)] = (5));

} else {
var statearr_16443_16556 = state_16437__$1;
(statearr_16443_16556[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16438 === (6))){
var inst_16418 = (state_16437[(7)]);
var inst_16423 = (state_16437[(8)]);
var inst_16423__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16425 = [inst_16418,inst_16423__$1];
var inst_16426 = (new cljs.core.PersistentVector(null,2,(5),inst_16424,inst_16425,null));
var state_16437__$1 = (function (){var statearr_16444 = state_16437;
(statearr_16444[(8)] = inst_16423__$1);

return statearr_16444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16437__$1,(8),jobs,inst_16426);
} else {
if((state_val_16438 === (3))){
var inst_16435 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16437__$1,inst_16435);
} else {
if((state_val_16438 === (2))){
var state_16437__$1 = state_16437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16437__$1,(4),from);
} else {
if((state_val_16438 === (9))){
var inst_16430 = (state_16437[(2)]);
var state_16437__$1 = (function (){var statearr_16445 = state_16437;
(statearr_16445[(9)] = inst_16430);

return statearr_16445;
})();
var statearr_16446_16557 = state_16437__$1;
(statearr_16446_16557[(2)] = null);

(statearr_16446_16557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16438 === (5))){
var inst_16421 = cljs.core.async.close_BANG_(jobs);
var state_16437__$1 = state_16437;
var statearr_16447_16558 = state_16437__$1;
(statearr_16447_16558[(2)] = inst_16421);

(statearr_16447_16558[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16438 === (8))){
var inst_16423 = (state_16437[(8)]);
var inst_16428 = (state_16437[(2)]);
var state_16437__$1 = (function (){var statearr_16448 = state_16437;
(statearr_16448[(10)] = inst_16428);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16437__$1,(9),results,inst_16423);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0 = (function (){
var statearr_16449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__);

(statearr_16449[(1)] = (1));

return statearr_16449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1 = (function (state_16437){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16437);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16450){var ex__16107__auto__ = e16450;
var statearr_16451_16559 = state_16437;
(statearr_16451_16559[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16437[(4)]))){
var statearr_16452_16560 = state_16437;
(statearr_16452_16560[(1)] = cljs.core.first((state_16437[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16561 = state_16437;
state_16437 = G__16561;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = function(state_16437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1.call(this,state_16437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16453 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16453[(6)] = c__16178__auto___16552);

return statearr_16453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


var c__16178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16491){
var state_val_16492 = (state_16491[(1)]);
if((state_val_16492 === (7))){
var inst_16487 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16493_16562 = state_16491__$1;
(statearr_16493_16562[(2)] = inst_16487);

(statearr_16493_16562[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (20))){
var state_16491__$1 = state_16491;
var statearr_16494_16563 = state_16491__$1;
(statearr_16494_16563[(2)] = null);

(statearr_16494_16563[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (1))){
var state_16491__$1 = state_16491;
var statearr_16495_16564 = state_16491__$1;
(statearr_16495_16564[(2)] = null);

(statearr_16495_16564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (4))){
var inst_16456 = (state_16491[(7)]);
var inst_16456__$1 = (state_16491[(2)]);
var inst_16457 = (inst_16456__$1 == null);
var state_16491__$1 = (function (){var statearr_16496 = state_16491;
(statearr_16496[(7)] = inst_16456__$1);

return statearr_16496;
})();
if(cljs.core.truth_(inst_16457)){
var statearr_16497_16565 = state_16491__$1;
(statearr_16497_16565[(1)] = (5));

} else {
var statearr_16498_16566 = state_16491__$1;
(statearr_16498_16566[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (15))){
var inst_16469 = (state_16491[(8)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16491__$1,(18),to,inst_16469);
} else {
if((state_val_16492 === (21))){
var inst_16482 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16499_16567 = state_16491__$1;
(statearr_16499_16567[(2)] = inst_16482);

(statearr_16499_16567[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (13))){
var inst_16484 = (state_16491[(2)]);
var state_16491__$1 = (function (){var statearr_16500 = state_16491;
(statearr_16500[(9)] = inst_16484);

return statearr_16500;
})();
var statearr_16501_16568 = state_16491__$1;
(statearr_16501_16568[(2)] = null);

(statearr_16501_16568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (6))){
var inst_16456 = (state_16491[(7)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16491__$1,(11),inst_16456);
} else {
if((state_val_16492 === (17))){
var inst_16477 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
if(cljs.core.truth_(inst_16477)){
var statearr_16502_16569 = state_16491__$1;
(statearr_16502_16569[(1)] = (19));

} else {
var statearr_16503_16570 = state_16491__$1;
(statearr_16503_16570[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (3))){
var inst_16489 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16491__$1,inst_16489);
} else {
if((state_val_16492 === (12))){
var inst_16466 = (state_16491[(10)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16491__$1,(14),inst_16466);
} else {
if((state_val_16492 === (2))){
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16491__$1,(4),results);
} else {
if((state_val_16492 === (19))){
var state_16491__$1 = state_16491;
var statearr_16504_16571 = state_16491__$1;
(statearr_16504_16571[(2)] = null);

(statearr_16504_16571[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (11))){
var inst_16466 = (state_16491[(2)]);
var state_16491__$1 = (function (){var statearr_16505 = state_16491;
(statearr_16505[(10)] = inst_16466);

return statearr_16505;
})();
var statearr_16506_16572 = state_16491__$1;
(statearr_16506_16572[(2)] = null);

(statearr_16506_16572[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (9))){
var state_16491__$1 = state_16491;
var statearr_16507_16573 = state_16491__$1;
(statearr_16507_16573[(2)] = null);

(statearr_16507_16573[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (5))){
var state_16491__$1 = state_16491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16508_16574 = state_16491__$1;
(statearr_16508_16574[(1)] = (8));

} else {
var statearr_16509_16575 = state_16491__$1;
(statearr_16509_16575[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (14))){
var inst_16469 = (state_16491[(8)]);
var inst_16469__$1 = (state_16491[(2)]);
var inst_16470 = (inst_16469__$1 == null);
var inst_16471 = cljs.core.not(inst_16470);
var state_16491__$1 = (function (){var statearr_16510 = state_16491;
(statearr_16510[(8)] = inst_16469__$1);

return statearr_16510;
})();
if(inst_16471){
var statearr_16511_16576 = state_16491__$1;
(statearr_16511_16576[(1)] = (15));

} else {
var statearr_16512_16577 = state_16491__$1;
(statearr_16512_16577[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (16))){
var state_16491__$1 = state_16491;
var statearr_16513_16578 = state_16491__$1;
(statearr_16513_16578[(2)] = false);

(statearr_16513_16578[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (10))){
var inst_16463 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16514_16579 = state_16491__$1;
(statearr_16514_16579[(2)] = inst_16463);

(statearr_16514_16579[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (18))){
var inst_16474 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16515_16580 = state_16491__$1;
(statearr_16515_16580[(2)] = inst_16474);

(statearr_16515_16580[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (8))){
var inst_16460 = cljs.core.async.close_BANG_(to);
var state_16491__$1 = state_16491;
var statearr_16516_16581 = state_16491__$1;
(statearr_16516_16581[(2)] = inst_16460);

(statearr_16516_16581[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0 = (function (){
var statearr_16517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__);

(statearr_16517[(1)] = (1));

return statearr_16517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1 = (function (state_16491){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16491);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16518){var ex__16107__auto__ = e16518;
var statearr_16519_16582 = state_16491;
(statearr_16519_16582[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16491[(4)]))){
var statearr_16520_16583 = state_16491;
(statearr_16520_16583[(1)] = cljs.core.first((state_16491[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16584 = state_16491;
state_16491 = G__16584;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__ = function(state_16491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1.call(this,state_16491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16521 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16521[(6)] = c__16178__auto__);

return statearr_16521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

return c__16178__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16586 = arguments.length;
switch (G__16586) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16589 = arguments.length;
switch (G__16589) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16592 = arguments.length;
switch (G__16592) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16178__auto___16642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16618){
var state_val_16619 = (state_16618[(1)]);
if((state_val_16619 === (7))){
var inst_16614 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16620_16643 = state_16618__$1;
(statearr_16620_16643[(2)] = inst_16614);

(statearr_16620_16643[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (1))){
var state_16618__$1 = state_16618;
var statearr_16621_16644 = state_16618__$1;
(statearr_16621_16644[(2)] = null);

(statearr_16621_16644[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (4))){
var inst_16595 = (state_16618[(7)]);
var inst_16595__$1 = (state_16618[(2)]);
var inst_16596 = (inst_16595__$1 == null);
var state_16618__$1 = (function (){var statearr_16622 = state_16618;
(statearr_16622[(7)] = inst_16595__$1);

return statearr_16622;
})();
if(cljs.core.truth_(inst_16596)){
var statearr_16623_16645 = state_16618__$1;
(statearr_16623_16645[(1)] = (5));

} else {
var statearr_16624_16646 = state_16618__$1;
(statearr_16624_16646[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (13))){
var state_16618__$1 = state_16618;
var statearr_16625_16647 = state_16618__$1;
(statearr_16625_16647[(2)] = null);

(statearr_16625_16647[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (6))){
var inst_16595 = (state_16618[(7)]);
var inst_16601 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16595) : p.call(null,inst_16595));
var state_16618__$1 = state_16618;
if(cljs.core.truth_(inst_16601)){
var statearr_16626_16648 = state_16618__$1;
(statearr_16626_16648[(1)] = (9));

} else {
var statearr_16627_16649 = state_16618__$1;
(statearr_16627_16649[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (3))){
var inst_16616 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16618__$1,inst_16616);
} else {
if((state_val_16619 === (12))){
var state_16618__$1 = state_16618;
var statearr_16628_16650 = state_16618__$1;
(statearr_16628_16650[(2)] = null);

(statearr_16628_16650[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (2))){
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16618__$1,(4),ch);
} else {
if((state_val_16619 === (11))){
var inst_16595 = (state_16618[(7)]);
var inst_16605 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16618__$1,(8),inst_16605,inst_16595);
} else {
if((state_val_16619 === (9))){
var state_16618__$1 = state_16618;
var statearr_16629_16651 = state_16618__$1;
(statearr_16629_16651[(2)] = tc);

(statearr_16629_16651[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (5))){
var inst_16598 = cljs.core.async.close_BANG_(tc);
var inst_16599 = cljs.core.async.close_BANG_(fc);
var state_16618__$1 = (function (){var statearr_16630 = state_16618;
(statearr_16630[(8)] = inst_16598);

return statearr_16630;
})();
var statearr_16631_16652 = state_16618__$1;
(statearr_16631_16652[(2)] = inst_16599);

(statearr_16631_16652[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (14))){
var inst_16612 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16632_16653 = state_16618__$1;
(statearr_16632_16653[(2)] = inst_16612);

(statearr_16632_16653[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (10))){
var state_16618__$1 = state_16618;
var statearr_16633_16654 = state_16618__$1;
(statearr_16633_16654[(2)] = fc);

(statearr_16633_16654[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16619 === (8))){
var inst_16607 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
if(cljs.core.truth_(inst_16607)){
var statearr_16634_16655 = state_16618__$1;
(statearr_16634_16655[(1)] = (12));

} else {
var statearr_16635_16656 = state_16618__$1;
(statearr_16635_16656[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_16636 = [null,null,null,null,null,null,null,null,null];
(statearr_16636[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_16636[(1)] = (1));

return statearr_16636;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_16618){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16618);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16637){var ex__16107__auto__ = e16637;
var statearr_16638_16657 = state_16618;
(statearr_16638_16657[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16618[(4)]))){
var statearr_16639_16658 = state_16618;
(statearr_16639_16658[(1)] = cljs.core.first((state_16618[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16659 = state_16618;
state_16618 = G__16659;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_16618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_16618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16640 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16640[(6)] = c__16178__auto___16642);

return statearr_16640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16681){
var state_val_16682 = (state_16681[(1)]);
if((state_val_16682 === (7))){
var inst_16677 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16683_16702 = state_16681__$1;
(statearr_16683_16702[(2)] = inst_16677);

(statearr_16683_16702[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (1))){
var inst_16660 = init;
var inst_16661 = inst_16660;
var state_16681__$1 = (function (){var statearr_16684 = state_16681;
(statearr_16684[(7)] = inst_16661);

return statearr_16684;
})();
var statearr_16685_16703 = state_16681__$1;
(statearr_16685_16703[(2)] = null);

(statearr_16685_16703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (4))){
var inst_16664 = (state_16681[(8)]);
var inst_16664__$1 = (state_16681[(2)]);
var inst_16665 = (inst_16664__$1 == null);
var state_16681__$1 = (function (){var statearr_16686 = state_16681;
(statearr_16686[(8)] = inst_16664__$1);

return statearr_16686;
})();
if(cljs.core.truth_(inst_16665)){
var statearr_16687_16704 = state_16681__$1;
(statearr_16687_16704[(1)] = (5));

} else {
var statearr_16688_16705 = state_16681__$1;
(statearr_16688_16705[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (6))){
var inst_16661 = (state_16681[(7)]);
var inst_16668 = (state_16681[(9)]);
var inst_16664 = (state_16681[(8)]);
var inst_16668__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16661,inst_16664) : f.call(null,inst_16661,inst_16664));
var inst_16669 = cljs.core.reduced_QMARK_(inst_16668__$1);
var state_16681__$1 = (function (){var statearr_16689 = state_16681;
(statearr_16689[(9)] = inst_16668__$1);

return statearr_16689;
})();
if(inst_16669){
var statearr_16690_16706 = state_16681__$1;
(statearr_16690_16706[(1)] = (8));

} else {
var statearr_16691_16707 = state_16681__$1;
(statearr_16691_16707[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (3))){
var inst_16679 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16681__$1,inst_16679);
} else {
if((state_val_16682 === (2))){
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16681__$1,(4),ch);
} else {
if((state_val_16682 === (9))){
var inst_16668 = (state_16681[(9)]);
var inst_16661 = inst_16668;
var state_16681__$1 = (function (){var statearr_16692 = state_16681;
(statearr_16692[(7)] = inst_16661);

return statearr_16692;
})();
var statearr_16693_16708 = state_16681__$1;
(statearr_16693_16708[(2)] = null);

(statearr_16693_16708[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (5))){
var inst_16661 = (state_16681[(7)]);
var state_16681__$1 = state_16681;
var statearr_16694_16709 = state_16681__$1;
(statearr_16694_16709[(2)] = inst_16661);

(statearr_16694_16709[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (10))){
var inst_16675 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16695_16710 = state_16681__$1;
(statearr_16695_16710[(2)] = inst_16675);

(statearr_16695_16710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16682 === (8))){
var inst_16668 = (state_16681[(9)]);
var inst_16671 = cljs.core.deref(inst_16668);
var state_16681__$1 = state_16681;
var statearr_16696_16711 = state_16681__$1;
(statearr_16696_16711[(2)] = inst_16671);

(statearr_16696_16711[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16104__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16104__auto____0 = (function (){
var statearr_16697 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16697[(0)] = cljs$core$async$reduce_$_state_machine__16104__auto__);

(statearr_16697[(1)] = (1));

return statearr_16697;
});
var cljs$core$async$reduce_$_state_machine__16104__auto____1 = (function (state_16681){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16681);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16698){var ex__16107__auto__ = e16698;
var statearr_16699_16712 = state_16681;
(statearr_16699_16712[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16681[(4)]))){
var statearr_16700_16713 = state_16681;
(statearr_16700_16713[(1)] = cljs.core.first((state_16681[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16714 = state_16681;
state_16681 = G__16714;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16104__auto__ = function(state_16681){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16104__auto____1.call(this,state_16681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16104__auto____0;
cljs$core$async$reduce_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16104__auto____1;
return cljs$core$async$reduce_$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16701 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16701[(6)] = c__16178__auto__);

return statearr_16701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

return c__16178__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16720){
var state_val_16721 = (state_16720[(1)]);
if((state_val_16721 === (1))){
var inst_16715 = cljs.core.async.reduce(f__$1,init,ch);
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16720__$1,(2),inst_16715);
} else {
if((state_val_16721 === (2))){
var inst_16717 = (state_16720[(2)]);
var inst_16718 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16717) : f__$1.call(null,inst_16717));
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16720__$1,inst_16718);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16104__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16104__auto____0 = (function (){
var statearr_16722 = [null,null,null,null,null,null,null];
(statearr_16722[(0)] = cljs$core$async$transduce_$_state_machine__16104__auto__);

(statearr_16722[(1)] = (1));

return statearr_16722;
});
var cljs$core$async$transduce_$_state_machine__16104__auto____1 = (function (state_16720){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16720);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16723){var ex__16107__auto__ = e16723;
var statearr_16724_16727 = state_16720;
(statearr_16724_16727[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16720[(4)]))){
var statearr_16725_16728 = state_16720;
(statearr_16725_16728[(1)] = cljs.core.first((state_16720[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16729 = state_16720;
state_16720 = G__16729;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16104__auto__ = function(state_16720){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16104__auto____1.call(this,state_16720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16104__auto____0;
cljs$core$async$transduce_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16104__auto____1;
return cljs$core$async$transduce_$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16726 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16726[(6)] = c__16178__auto__);

return statearr_16726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

return c__16178__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16731 = arguments.length;
switch (G__16731) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16756){
var state_val_16757 = (state_16756[(1)]);
if((state_val_16757 === (7))){
var inst_16738 = (state_16756[(2)]);
var state_16756__$1 = state_16756;
var statearr_16758_16780 = state_16756__$1;
(statearr_16758_16780[(2)] = inst_16738);

(statearr_16758_16780[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (1))){
var inst_16732 = cljs.core.seq(coll);
var inst_16733 = inst_16732;
var state_16756__$1 = (function (){var statearr_16759 = state_16756;
(statearr_16759[(7)] = inst_16733);

return statearr_16759;
})();
var statearr_16760_16781 = state_16756__$1;
(statearr_16760_16781[(2)] = null);

(statearr_16760_16781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (4))){
var inst_16733 = (state_16756[(7)]);
var inst_16736 = cljs.core.first(inst_16733);
var state_16756__$1 = state_16756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16756__$1,(7),ch,inst_16736);
} else {
if((state_val_16757 === (13))){
var inst_16750 = (state_16756[(2)]);
var state_16756__$1 = state_16756;
var statearr_16761_16782 = state_16756__$1;
(statearr_16761_16782[(2)] = inst_16750);

(statearr_16761_16782[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (6))){
var inst_16741 = (state_16756[(2)]);
var state_16756__$1 = state_16756;
if(cljs.core.truth_(inst_16741)){
var statearr_16762_16783 = state_16756__$1;
(statearr_16762_16783[(1)] = (8));

} else {
var statearr_16763_16784 = state_16756__$1;
(statearr_16763_16784[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (3))){
var inst_16754 = (state_16756[(2)]);
var state_16756__$1 = state_16756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16756__$1,inst_16754);
} else {
if((state_val_16757 === (12))){
var state_16756__$1 = state_16756;
var statearr_16764_16785 = state_16756__$1;
(statearr_16764_16785[(2)] = null);

(statearr_16764_16785[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (2))){
var inst_16733 = (state_16756[(7)]);
var state_16756__$1 = state_16756;
if(cljs.core.truth_(inst_16733)){
var statearr_16765_16786 = state_16756__$1;
(statearr_16765_16786[(1)] = (4));

} else {
var statearr_16766_16787 = state_16756__$1;
(statearr_16766_16787[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (11))){
var inst_16747 = cljs.core.async.close_BANG_(ch);
var state_16756__$1 = state_16756;
var statearr_16767_16788 = state_16756__$1;
(statearr_16767_16788[(2)] = inst_16747);

(statearr_16767_16788[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (9))){
var state_16756__$1 = state_16756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16768_16789 = state_16756__$1;
(statearr_16768_16789[(1)] = (11));

} else {
var statearr_16769_16790 = state_16756__$1;
(statearr_16769_16790[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (5))){
var inst_16733 = (state_16756[(7)]);
var state_16756__$1 = state_16756;
var statearr_16770_16791 = state_16756__$1;
(statearr_16770_16791[(2)] = inst_16733);

(statearr_16770_16791[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (10))){
var inst_16752 = (state_16756[(2)]);
var state_16756__$1 = state_16756;
var statearr_16771_16792 = state_16756__$1;
(statearr_16771_16792[(2)] = inst_16752);

(statearr_16771_16792[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16757 === (8))){
var inst_16733 = (state_16756[(7)]);
var inst_16743 = cljs.core.next(inst_16733);
var inst_16733__$1 = inst_16743;
var state_16756__$1 = (function (){var statearr_16772 = state_16756;
(statearr_16772[(7)] = inst_16733__$1);

return statearr_16772;
})();
var statearr_16773_16793 = state_16756__$1;
(statearr_16773_16793[(2)] = null);

(statearr_16773_16793[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_16774 = [null,null,null,null,null,null,null,null];
(statearr_16774[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_16774[(1)] = (1));

return statearr_16774;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_16756){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16756);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e16775){var ex__16107__auto__ = e16775;
var statearr_16776_16794 = state_16756;
(statearr_16776_16794[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16756[(4)]))){
var statearr_16777_16795 = state_16756;
(statearr_16777_16795[(1)] = cljs.core.first((state_16756[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__16796 = state_16756;
state_16756 = G__16796;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_16756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_16756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_16778 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_16778[(6)] = c__16178__auto__);

return statearr_16778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

return c__16178__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16798 = arguments.length;
switch (G__16798) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16800 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16800(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16801 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16801(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16802 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16802(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16803 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16803(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16804 = (function (ch,cs,meta16805){
this.ch = ch;
this.cs = cs;
this.meta16805 = meta16805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16806,meta16805__$1){
var self__ = this;
var _16806__$1 = this;
return (new cljs.core.async.t_cljs$core$async16804(self__.ch,self__.cs,meta16805__$1));
}));

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16806){
var self__ = this;
var _16806__$1 = this;
return self__.meta16805;
}));

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16804.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16805], null);
}));

(cljs.core.async.t_cljs$core$async16804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16804");

(cljs.core.async.t_cljs$core$async16804.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16804.
 */
cljs.core.async.__GT_t_cljs$core$async16804 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16804(ch__$1,cs__$1,meta16805){
return (new cljs.core.async.t_cljs$core$async16804(ch__$1,cs__$1,meta16805));
});

}

return (new cljs.core.async.t_cljs$core$async16804(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16178__auto___17023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_16939){
var state_val_16940 = (state_16939[(1)]);
if((state_val_16940 === (7))){
var inst_16935 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16941_17024 = state_16939__$1;
(statearr_16941_17024[(2)] = inst_16935);

(statearr_16941_17024[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (20))){
var inst_16840 = (state_16939[(7)]);
var inst_16852 = cljs.core.first(inst_16840);
var inst_16853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16852,(0),null);
var inst_16854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16852,(1),null);
var state_16939__$1 = (function (){var statearr_16942 = state_16939;
(statearr_16942[(8)] = inst_16853);

return statearr_16942;
})();
if(cljs.core.truth_(inst_16854)){
var statearr_16943_17025 = state_16939__$1;
(statearr_16943_17025[(1)] = (22));

} else {
var statearr_16944_17026 = state_16939__$1;
(statearr_16944_17026[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (27))){
var inst_16889 = (state_16939[(9)]);
var inst_16809 = (state_16939[(10)]);
var inst_16884 = (state_16939[(11)]);
var inst_16882 = (state_16939[(12)]);
var inst_16889__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16882,inst_16884);
var inst_16890 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16889__$1,inst_16809,done);
var state_16939__$1 = (function (){var statearr_16945 = state_16939;
(statearr_16945[(9)] = inst_16889__$1);

return statearr_16945;
})();
if(cljs.core.truth_(inst_16890)){
var statearr_16946_17027 = state_16939__$1;
(statearr_16946_17027[(1)] = (30));

} else {
var statearr_16947_17028 = state_16939__$1;
(statearr_16947_17028[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (1))){
var state_16939__$1 = state_16939;
var statearr_16948_17029 = state_16939__$1;
(statearr_16948_17029[(2)] = null);

(statearr_16948_17029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (24))){
var inst_16840 = (state_16939[(7)]);
var inst_16859 = (state_16939[(2)]);
var inst_16860 = cljs.core.next(inst_16840);
var inst_16818 = inst_16860;
var inst_16819 = null;
var inst_16820 = (0);
var inst_16821 = (0);
var state_16939__$1 = (function (){var statearr_16949 = state_16939;
(statearr_16949[(13)] = inst_16859);

(statearr_16949[(14)] = inst_16821);

(statearr_16949[(15)] = inst_16818);

(statearr_16949[(16)] = inst_16819);

(statearr_16949[(17)] = inst_16820);

return statearr_16949;
})();
var statearr_16950_17030 = state_16939__$1;
(statearr_16950_17030[(2)] = null);

(statearr_16950_17030[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (39))){
var state_16939__$1 = state_16939;
var statearr_16954_17031 = state_16939__$1;
(statearr_16954_17031[(2)] = null);

(statearr_16954_17031[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (4))){
var inst_16809 = (state_16939[(10)]);
var inst_16809__$1 = (state_16939[(2)]);
var inst_16810 = (inst_16809__$1 == null);
var state_16939__$1 = (function (){var statearr_16955 = state_16939;
(statearr_16955[(10)] = inst_16809__$1);

return statearr_16955;
})();
if(cljs.core.truth_(inst_16810)){
var statearr_16956_17032 = state_16939__$1;
(statearr_16956_17032[(1)] = (5));

} else {
var statearr_16957_17033 = state_16939__$1;
(statearr_16957_17033[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (15))){
var inst_16821 = (state_16939[(14)]);
var inst_16818 = (state_16939[(15)]);
var inst_16819 = (state_16939[(16)]);
var inst_16820 = (state_16939[(17)]);
var inst_16836 = (state_16939[(2)]);
var inst_16837 = (inst_16821 + (1));
var tmp16951 = inst_16818;
var tmp16952 = inst_16819;
var tmp16953 = inst_16820;
var inst_16818__$1 = tmp16951;
var inst_16819__$1 = tmp16952;
var inst_16820__$1 = tmp16953;
var inst_16821__$1 = inst_16837;
var state_16939__$1 = (function (){var statearr_16958 = state_16939;
(statearr_16958[(14)] = inst_16821__$1);

(statearr_16958[(15)] = inst_16818__$1);

(statearr_16958[(16)] = inst_16819__$1);

(statearr_16958[(18)] = inst_16836);

(statearr_16958[(17)] = inst_16820__$1);

return statearr_16958;
})();
var statearr_16959_17034 = state_16939__$1;
(statearr_16959_17034[(2)] = null);

(statearr_16959_17034[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (21))){
var inst_16863 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16963_17035 = state_16939__$1;
(statearr_16963_17035[(2)] = inst_16863);

(statearr_16963_17035[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (31))){
var inst_16889 = (state_16939[(9)]);
var inst_16893 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16889);
var state_16939__$1 = state_16939;
var statearr_16964_17036 = state_16939__$1;
(statearr_16964_17036[(2)] = inst_16893);

(statearr_16964_17036[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (32))){
var inst_16884 = (state_16939[(11)]);
var inst_16883 = (state_16939[(19)]);
var inst_16881 = (state_16939[(20)]);
var inst_16882 = (state_16939[(12)]);
var inst_16895 = (state_16939[(2)]);
var inst_16896 = (inst_16884 + (1));
var tmp16960 = inst_16883;
var tmp16961 = inst_16881;
var tmp16962 = inst_16882;
var inst_16881__$1 = tmp16961;
var inst_16882__$1 = tmp16962;
var inst_16883__$1 = tmp16960;
var inst_16884__$1 = inst_16896;
var state_16939__$1 = (function (){var statearr_16965 = state_16939;
(statearr_16965[(11)] = inst_16884__$1);

(statearr_16965[(19)] = inst_16883__$1);

(statearr_16965[(20)] = inst_16881__$1);

(statearr_16965[(21)] = inst_16895);

(statearr_16965[(12)] = inst_16882__$1);

return statearr_16965;
})();
var statearr_16966_17037 = state_16939__$1;
(statearr_16966_17037[(2)] = null);

(statearr_16966_17037[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (40))){
var inst_16908 = (state_16939[(22)]);
var inst_16912 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16908);
var state_16939__$1 = state_16939;
var statearr_16967_17038 = state_16939__$1;
(statearr_16967_17038[(2)] = inst_16912);

(statearr_16967_17038[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (33))){
var inst_16899 = (state_16939[(23)]);
var inst_16901 = cljs.core.chunked_seq_QMARK_(inst_16899);
var state_16939__$1 = state_16939;
if(inst_16901){
var statearr_16968_17039 = state_16939__$1;
(statearr_16968_17039[(1)] = (36));

} else {
var statearr_16969_17040 = state_16939__$1;
(statearr_16969_17040[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (13))){
var inst_16830 = (state_16939[(24)]);
var inst_16833 = cljs.core.async.close_BANG_(inst_16830);
var state_16939__$1 = state_16939;
var statearr_16970_17041 = state_16939__$1;
(statearr_16970_17041[(2)] = inst_16833);

(statearr_16970_17041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (22))){
var inst_16853 = (state_16939[(8)]);
var inst_16856 = cljs.core.async.close_BANG_(inst_16853);
var state_16939__$1 = state_16939;
var statearr_16971_17042 = state_16939__$1;
(statearr_16971_17042[(2)] = inst_16856);

(statearr_16971_17042[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (36))){
var inst_16899 = (state_16939[(23)]);
var inst_16903 = cljs.core.chunk_first(inst_16899);
var inst_16904 = cljs.core.chunk_rest(inst_16899);
var inst_16905 = cljs.core.count(inst_16903);
var inst_16881 = inst_16904;
var inst_16882 = inst_16903;
var inst_16883 = inst_16905;
var inst_16884 = (0);
var state_16939__$1 = (function (){var statearr_16972 = state_16939;
(statearr_16972[(11)] = inst_16884);

(statearr_16972[(19)] = inst_16883);

(statearr_16972[(20)] = inst_16881);

(statearr_16972[(12)] = inst_16882);

return statearr_16972;
})();
var statearr_16973_17043 = state_16939__$1;
(statearr_16973_17043[(2)] = null);

(statearr_16973_17043[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (41))){
var inst_16899 = (state_16939[(23)]);
var inst_16914 = (state_16939[(2)]);
var inst_16915 = cljs.core.next(inst_16899);
var inst_16881 = inst_16915;
var inst_16882 = null;
var inst_16883 = (0);
var inst_16884 = (0);
var state_16939__$1 = (function (){var statearr_16974 = state_16939;
(statearr_16974[(11)] = inst_16884);

(statearr_16974[(19)] = inst_16883);

(statearr_16974[(20)] = inst_16881);

(statearr_16974[(25)] = inst_16914);

(statearr_16974[(12)] = inst_16882);

return statearr_16974;
})();
var statearr_16975_17044 = state_16939__$1;
(statearr_16975_17044[(2)] = null);

(statearr_16975_17044[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (43))){
var state_16939__$1 = state_16939;
var statearr_16976_17045 = state_16939__$1;
(statearr_16976_17045[(2)] = null);

(statearr_16976_17045[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (29))){
var inst_16923 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16977_17046 = state_16939__$1;
(statearr_16977_17046[(2)] = inst_16923);

(statearr_16977_17046[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (44))){
var inst_16932 = (state_16939[(2)]);
var state_16939__$1 = (function (){var statearr_16978 = state_16939;
(statearr_16978[(26)] = inst_16932);

return statearr_16978;
})();
var statearr_16979_17047 = state_16939__$1;
(statearr_16979_17047[(2)] = null);

(statearr_16979_17047[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (6))){
var inst_16873 = (state_16939[(27)]);
var inst_16872 = cljs.core.deref(cs);
var inst_16873__$1 = cljs.core.keys(inst_16872);
var inst_16874 = cljs.core.count(inst_16873__$1);
var inst_16875 = cljs.core.reset_BANG_(dctr,inst_16874);
var inst_16880 = cljs.core.seq(inst_16873__$1);
var inst_16881 = inst_16880;
var inst_16882 = null;
var inst_16883 = (0);
var inst_16884 = (0);
var state_16939__$1 = (function (){var statearr_16980 = state_16939;
(statearr_16980[(11)] = inst_16884);

(statearr_16980[(27)] = inst_16873__$1);

(statearr_16980[(28)] = inst_16875);

(statearr_16980[(19)] = inst_16883);

(statearr_16980[(20)] = inst_16881);

(statearr_16980[(12)] = inst_16882);

return statearr_16980;
})();
var statearr_16981_17048 = state_16939__$1;
(statearr_16981_17048[(2)] = null);

(statearr_16981_17048[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (28))){
var inst_16881 = (state_16939[(20)]);
var inst_16899 = (state_16939[(23)]);
var inst_16899__$1 = cljs.core.seq(inst_16881);
var state_16939__$1 = (function (){var statearr_16982 = state_16939;
(statearr_16982[(23)] = inst_16899__$1);

return statearr_16982;
})();
if(inst_16899__$1){
var statearr_16983_17049 = state_16939__$1;
(statearr_16983_17049[(1)] = (33));

} else {
var statearr_16984_17050 = state_16939__$1;
(statearr_16984_17050[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (25))){
var inst_16884 = (state_16939[(11)]);
var inst_16883 = (state_16939[(19)]);
var inst_16886 = (inst_16884 < inst_16883);
var inst_16887 = inst_16886;
var state_16939__$1 = state_16939;
if(cljs.core.truth_(inst_16887)){
var statearr_16985_17051 = state_16939__$1;
(statearr_16985_17051[(1)] = (27));

} else {
var statearr_16986_17052 = state_16939__$1;
(statearr_16986_17052[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (34))){
var state_16939__$1 = state_16939;
var statearr_16987_17053 = state_16939__$1;
(statearr_16987_17053[(2)] = null);

(statearr_16987_17053[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (17))){
var state_16939__$1 = state_16939;
var statearr_16988_17054 = state_16939__$1;
(statearr_16988_17054[(2)] = null);

(statearr_16988_17054[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (3))){
var inst_16937 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16939__$1,inst_16937);
} else {
if((state_val_16940 === (12))){
var inst_16868 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16989_17055 = state_16939__$1;
(statearr_16989_17055[(2)] = inst_16868);

(statearr_16989_17055[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (2))){
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16939__$1,(4),ch);
} else {
if((state_val_16940 === (23))){
var state_16939__$1 = state_16939;
var statearr_16990_17056 = state_16939__$1;
(statearr_16990_17056[(2)] = null);

(statearr_16990_17056[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (35))){
var inst_16921 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16991_17057 = state_16939__$1;
(statearr_16991_17057[(2)] = inst_16921);

(statearr_16991_17057[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (19))){
var inst_16840 = (state_16939[(7)]);
var inst_16844 = cljs.core.chunk_first(inst_16840);
var inst_16845 = cljs.core.chunk_rest(inst_16840);
var inst_16846 = cljs.core.count(inst_16844);
var inst_16818 = inst_16845;
var inst_16819 = inst_16844;
var inst_16820 = inst_16846;
var inst_16821 = (0);
var state_16939__$1 = (function (){var statearr_16992 = state_16939;
(statearr_16992[(14)] = inst_16821);

(statearr_16992[(15)] = inst_16818);

(statearr_16992[(16)] = inst_16819);

(statearr_16992[(17)] = inst_16820);

return statearr_16992;
})();
var statearr_16993_17058 = state_16939__$1;
(statearr_16993_17058[(2)] = null);

(statearr_16993_17058[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (11))){
var inst_16840 = (state_16939[(7)]);
var inst_16818 = (state_16939[(15)]);
var inst_16840__$1 = cljs.core.seq(inst_16818);
var state_16939__$1 = (function (){var statearr_16994 = state_16939;
(statearr_16994[(7)] = inst_16840__$1);

return statearr_16994;
})();
if(inst_16840__$1){
var statearr_16995_17059 = state_16939__$1;
(statearr_16995_17059[(1)] = (16));

} else {
var statearr_16996_17060 = state_16939__$1;
(statearr_16996_17060[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (9))){
var inst_16870 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16997_17061 = state_16939__$1;
(statearr_16997_17061[(2)] = inst_16870);

(statearr_16997_17061[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (5))){
var inst_16816 = cljs.core.deref(cs);
var inst_16817 = cljs.core.seq(inst_16816);
var inst_16818 = inst_16817;
var inst_16819 = null;
var inst_16820 = (0);
var inst_16821 = (0);
var state_16939__$1 = (function (){var statearr_16998 = state_16939;
(statearr_16998[(14)] = inst_16821);

(statearr_16998[(15)] = inst_16818);

(statearr_16998[(16)] = inst_16819);

(statearr_16998[(17)] = inst_16820);

return statearr_16998;
})();
var statearr_16999_17062 = state_16939__$1;
(statearr_16999_17062[(2)] = null);

(statearr_16999_17062[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (14))){
var state_16939__$1 = state_16939;
var statearr_17000_17063 = state_16939__$1;
(statearr_17000_17063[(2)] = null);

(statearr_17000_17063[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (45))){
var inst_16929 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_17001_17064 = state_16939__$1;
(statearr_17001_17064[(2)] = inst_16929);

(statearr_17001_17064[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (26))){
var inst_16873 = (state_16939[(27)]);
var inst_16925 = (state_16939[(2)]);
var inst_16926 = cljs.core.seq(inst_16873);
var state_16939__$1 = (function (){var statearr_17002 = state_16939;
(statearr_17002[(29)] = inst_16925);

return statearr_17002;
})();
if(inst_16926){
var statearr_17003_17065 = state_16939__$1;
(statearr_17003_17065[(1)] = (42));

} else {
var statearr_17004_17066 = state_16939__$1;
(statearr_17004_17066[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (16))){
var inst_16840 = (state_16939[(7)]);
var inst_16842 = cljs.core.chunked_seq_QMARK_(inst_16840);
var state_16939__$1 = state_16939;
if(inst_16842){
var statearr_17005_17067 = state_16939__$1;
(statearr_17005_17067[(1)] = (19));

} else {
var statearr_17006_17068 = state_16939__$1;
(statearr_17006_17068[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (38))){
var inst_16918 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_17007_17069 = state_16939__$1;
(statearr_17007_17069[(2)] = inst_16918);

(statearr_17007_17069[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (30))){
var state_16939__$1 = state_16939;
var statearr_17008_17070 = state_16939__$1;
(statearr_17008_17070[(2)] = null);

(statearr_17008_17070[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (10))){
var inst_16821 = (state_16939[(14)]);
var inst_16819 = (state_16939[(16)]);
var inst_16829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16819,inst_16821);
var inst_16830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16829,(0),null);
var inst_16831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16829,(1),null);
var state_16939__$1 = (function (){var statearr_17009 = state_16939;
(statearr_17009[(24)] = inst_16830);

return statearr_17009;
})();
if(cljs.core.truth_(inst_16831)){
var statearr_17010_17071 = state_16939__$1;
(statearr_17010_17071[(1)] = (13));

} else {
var statearr_17011_17072 = state_16939__$1;
(statearr_17011_17072[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (18))){
var inst_16866 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_17012_17073 = state_16939__$1;
(statearr_17012_17073[(2)] = inst_16866);

(statearr_17012_17073[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (42))){
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16939__$1,(45),dchan);
} else {
if((state_val_16940 === (37))){
var inst_16809 = (state_16939[(10)]);
var inst_16908 = (state_16939[(22)]);
var inst_16899 = (state_16939[(23)]);
var inst_16908__$1 = cljs.core.first(inst_16899);
var inst_16909 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16908__$1,inst_16809,done);
var state_16939__$1 = (function (){var statearr_17013 = state_16939;
(statearr_17013[(22)] = inst_16908__$1);

return statearr_17013;
})();
if(cljs.core.truth_(inst_16909)){
var statearr_17014_17074 = state_16939__$1;
(statearr_17014_17074[(1)] = (39));

} else {
var statearr_17015_17075 = state_16939__$1;
(statearr_17015_17075[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16940 === (8))){
var inst_16821 = (state_16939[(14)]);
var inst_16820 = (state_16939[(17)]);
var inst_16823 = (inst_16821 < inst_16820);
var inst_16824 = inst_16823;
var state_16939__$1 = state_16939;
if(cljs.core.truth_(inst_16824)){
var statearr_17016_17076 = state_16939__$1;
(statearr_17016_17076[(1)] = (10));

} else {
var statearr_17017_17077 = state_16939__$1;
(statearr_17017_17077[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__16104__auto__ = null;
var cljs$core$async$mult_$_state_machine__16104__auto____0 = (function (){
var statearr_17018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17018[(0)] = cljs$core$async$mult_$_state_machine__16104__auto__);

(statearr_17018[(1)] = (1));

return statearr_17018;
});
var cljs$core$async$mult_$_state_machine__16104__auto____1 = (function (state_16939){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_16939);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17019){var ex__16107__auto__ = e17019;
var statearr_17020_17078 = state_16939;
(statearr_17020_17078[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_16939[(4)]))){
var statearr_17021_17079 = state_16939;
(statearr_17021_17079[(1)] = cljs.core.first((state_16939[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17080 = state_16939;
state_16939 = G__17080;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16104__auto__ = function(state_16939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16104__auto____1.call(this,state_16939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16104__auto____0;
cljs$core$async$mult_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16104__auto____1;
return cljs$core$async$mult_$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17022 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17022[(6)] = c__16178__auto___17023);

return statearr_17022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17082 = arguments.length;
switch (G__17082) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17084 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17084(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17085 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17085(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17086 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17086(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17087 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17087(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17088 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17088(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17099 = arguments.length;
var i__4737__auto___17100 = (0);
while(true){
if((i__4737__auto___17100 < len__4736__auto___17099)){
args__4742__auto__.push((arguments[i__4737__auto___17100]));

var G__17101 = (i__4737__auto___17100 + (1));
i__4737__auto___17100 = G__17101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17093){
var map__17094 = p__17093;
var map__17094__$1 = (((((!((map__17094 == null))))?(((((map__17094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17094):map__17094);
var opts = map__17094__$1;
var statearr_17096_17102 = state;
(statearr_17096_17102[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17097_17103 = state;
(statearr_17097_17103[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_17098_17104 = state;
(statearr_17098_17104[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17089){
var G__17090 = cljs.core.first(seq17089);
var seq17089__$1 = cljs.core.next(seq17089);
var G__17091 = cljs.core.first(seq17089__$1);
var seq17089__$2 = cljs.core.next(seq17089__$1);
var G__17092 = cljs.core.first(seq17089__$2);
var seq17089__$3 = cljs.core.next(seq17089__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17090,G__17091,G__17092,seq17089__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17105 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17106){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17106 = meta17106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17107,meta17106__$1){
var self__ = this;
var _17107__$1 = this;
return (new cljs.core.async.t_cljs$core$async17105(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17106__$1));
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17107){
var self__ = this;
var _17107__$1 = this;
return self__.meta17106;
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17105.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17106], null);
}));

(cljs.core.async.t_cljs$core$async17105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17105");

(cljs.core.async.t_cljs$core$async17105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17105.
 */
cljs.core.async.__GT_t_cljs$core$async17105 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17105(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17106){
return (new cljs.core.async.t_cljs$core$async17105(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17106));
});

}

return (new cljs.core.async.t_cljs$core$async17105(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16178__auto___17270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17209){
var state_val_17210 = (state_17209[(1)]);
if((state_val_17210 === (7))){
var inst_17124 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17211_17271 = state_17209__$1;
(statearr_17211_17271[(2)] = inst_17124);

(statearr_17211_17271[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (20))){
var inst_17136 = (state_17209[(7)]);
var state_17209__$1 = state_17209;
var statearr_17212_17272 = state_17209__$1;
(statearr_17212_17272[(2)] = inst_17136);

(statearr_17212_17272[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (27))){
var state_17209__$1 = state_17209;
var statearr_17213_17273 = state_17209__$1;
(statearr_17213_17273[(2)] = null);

(statearr_17213_17273[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (1))){
var inst_17111 = (state_17209[(8)]);
var inst_17111__$1 = calc_state();
var inst_17113 = (inst_17111__$1 == null);
var inst_17114 = cljs.core.not(inst_17113);
var state_17209__$1 = (function (){var statearr_17214 = state_17209;
(statearr_17214[(8)] = inst_17111__$1);

return statearr_17214;
})();
if(inst_17114){
var statearr_17215_17274 = state_17209__$1;
(statearr_17215_17274[(1)] = (2));

} else {
var statearr_17216_17275 = state_17209__$1;
(statearr_17216_17275[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (24))){
var inst_17169 = (state_17209[(9)]);
var inst_17183 = (state_17209[(10)]);
var inst_17160 = (state_17209[(11)]);
var inst_17183__$1 = (inst_17160.cljs$core$IFn$_invoke$arity$1 ? inst_17160.cljs$core$IFn$_invoke$arity$1(inst_17169) : inst_17160.call(null,inst_17169));
var state_17209__$1 = (function (){var statearr_17217 = state_17209;
(statearr_17217[(10)] = inst_17183__$1);

return statearr_17217;
})();
if(cljs.core.truth_(inst_17183__$1)){
var statearr_17218_17276 = state_17209__$1;
(statearr_17218_17276[(1)] = (29));

} else {
var statearr_17219_17277 = state_17209__$1;
(statearr_17219_17277[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (4))){
var inst_17127 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17127)){
var statearr_17220_17278 = state_17209__$1;
(statearr_17220_17278[(1)] = (8));

} else {
var statearr_17221_17279 = state_17209__$1;
(statearr_17221_17279[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (15))){
var inst_17154 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17154)){
var statearr_17222_17280 = state_17209__$1;
(statearr_17222_17280[(1)] = (19));

} else {
var statearr_17223_17281 = state_17209__$1;
(statearr_17223_17281[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (21))){
var inst_17159 = (state_17209[(12)]);
var inst_17159__$1 = (state_17209[(2)]);
var inst_17160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17159__$1,cljs.core.cst$kw$solos);
var inst_17161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17159__$1,cljs.core.cst$kw$mutes);
var inst_17162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17159__$1,cljs.core.cst$kw$reads);
var state_17209__$1 = (function (){var statearr_17224 = state_17209;
(statearr_17224[(12)] = inst_17159__$1);

(statearr_17224[(11)] = inst_17160);

(statearr_17224[(13)] = inst_17161);

return statearr_17224;
})();
return cljs.core.async.ioc_alts_BANG_(state_17209__$1,(22),inst_17162);
} else {
if((state_val_17210 === (31))){
var inst_17191 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17191)){
var statearr_17225_17282 = state_17209__$1;
(statearr_17225_17282[(1)] = (32));

} else {
var statearr_17226_17283 = state_17209__$1;
(statearr_17226_17283[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (32))){
var inst_17168 = (state_17209[(14)]);
var state_17209__$1 = state_17209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17209__$1,(35),out,inst_17168);
} else {
if((state_val_17210 === (33))){
var inst_17159 = (state_17209[(12)]);
var inst_17136 = inst_17159;
var state_17209__$1 = (function (){var statearr_17227 = state_17209;
(statearr_17227[(7)] = inst_17136);

return statearr_17227;
})();
var statearr_17228_17284 = state_17209__$1;
(statearr_17228_17284[(2)] = null);

(statearr_17228_17284[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (13))){
var inst_17136 = (state_17209[(7)]);
var inst_17143 = inst_17136.cljs$lang$protocol_mask$partition0$;
var inst_17144 = (inst_17143 & (64));
var inst_17145 = inst_17136.cljs$core$ISeq$;
var inst_17146 = (cljs.core.PROTOCOL_SENTINEL === inst_17145);
var inst_17147 = ((inst_17144) || (inst_17146));
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17147)){
var statearr_17229_17285 = state_17209__$1;
(statearr_17229_17285[(1)] = (16));

} else {
var statearr_17230_17286 = state_17209__$1;
(statearr_17230_17286[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (22))){
var inst_17169 = (state_17209[(9)]);
var inst_17168 = (state_17209[(14)]);
var inst_17167 = (state_17209[(2)]);
var inst_17168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17167,(0),null);
var inst_17169__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17167,(1),null);
var inst_17170 = (inst_17168__$1 == null);
var inst_17171 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17169__$1,change);
var inst_17172 = ((inst_17170) || (inst_17171));
var state_17209__$1 = (function (){var statearr_17231 = state_17209;
(statearr_17231[(9)] = inst_17169__$1);

(statearr_17231[(14)] = inst_17168__$1);

return statearr_17231;
})();
if(cljs.core.truth_(inst_17172)){
var statearr_17232_17287 = state_17209__$1;
(statearr_17232_17287[(1)] = (23));

} else {
var statearr_17233_17288 = state_17209__$1;
(statearr_17233_17288[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (36))){
var inst_17159 = (state_17209[(12)]);
var inst_17136 = inst_17159;
var state_17209__$1 = (function (){var statearr_17234 = state_17209;
(statearr_17234[(7)] = inst_17136);

return statearr_17234;
})();
var statearr_17235_17289 = state_17209__$1;
(statearr_17235_17289[(2)] = null);

(statearr_17235_17289[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (29))){
var inst_17183 = (state_17209[(10)]);
var state_17209__$1 = state_17209;
var statearr_17236_17290 = state_17209__$1;
(statearr_17236_17290[(2)] = inst_17183);

(statearr_17236_17290[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (6))){
var state_17209__$1 = state_17209;
var statearr_17237_17291 = state_17209__$1;
(statearr_17237_17291[(2)] = false);

(statearr_17237_17291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (28))){
var inst_17179 = (state_17209[(2)]);
var inst_17180 = calc_state();
var inst_17136 = inst_17180;
var state_17209__$1 = (function (){var statearr_17238 = state_17209;
(statearr_17238[(7)] = inst_17136);

(statearr_17238[(15)] = inst_17179);

return statearr_17238;
})();
var statearr_17239_17292 = state_17209__$1;
(statearr_17239_17292[(2)] = null);

(statearr_17239_17292[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (25))){
var inst_17205 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17240_17293 = state_17209__$1;
(statearr_17240_17293[(2)] = inst_17205);

(statearr_17240_17293[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (34))){
var inst_17203 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17241_17294 = state_17209__$1;
(statearr_17241_17294[(2)] = inst_17203);

(statearr_17241_17294[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (17))){
var state_17209__$1 = state_17209;
var statearr_17242_17295 = state_17209__$1;
(statearr_17242_17295[(2)] = false);

(statearr_17242_17295[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (3))){
var state_17209__$1 = state_17209;
var statearr_17243_17296 = state_17209__$1;
(statearr_17243_17296[(2)] = false);

(statearr_17243_17296[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (12))){
var inst_17207 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17209__$1,inst_17207);
} else {
if((state_val_17210 === (2))){
var inst_17111 = (state_17209[(8)]);
var inst_17116 = inst_17111.cljs$lang$protocol_mask$partition0$;
var inst_17117 = (inst_17116 & (64));
var inst_17118 = inst_17111.cljs$core$ISeq$;
var inst_17119 = (cljs.core.PROTOCOL_SENTINEL === inst_17118);
var inst_17120 = ((inst_17117) || (inst_17119));
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17120)){
var statearr_17244_17297 = state_17209__$1;
(statearr_17244_17297[(1)] = (5));

} else {
var statearr_17245_17298 = state_17209__$1;
(statearr_17245_17298[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (23))){
var inst_17168 = (state_17209[(14)]);
var inst_17174 = (inst_17168 == null);
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17174)){
var statearr_17246_17299 = state_17209__$1;
(statearr_17246_17299[(1)] = (26));

} else {
var statearr_17247_17300 = state_17209__$1;
(statearr_17247_17300[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (35))){
var inst_17194 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17194)){
var statearr_17248_17301 = state_17209__$1;
(statearr_17248_17301[(1)] = (36));

} else {
var statearr_17249_17302 = state_17209__$1;
(statearr_17249_17302[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (19))){
var inst_17136 = (state_17209[(7)]);
var inst_17156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17136);
var state_17209__$1 = state_17209;
var statearr_17250_17303 = state_17209__$1;
(statearr_17250_17303[(2)] = inst_17156);

(statearr_17250_17303[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (11))){
var inst_17136 = (state_17209[(7)]);
var inst_17140 = (inst_17136 == null);
var inst_17141 = cljs.core.not(inst_17140);
var state_17209__$1 = state_17209;
if(inst_17141){
var statearr_17251_17304 = state_17209__$1;
(statearr_17251_17304[(1)] = (13));

} else {
var statearr_17252_17305 = state_17209__$1;
(statearr_17252_17305[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (9))){
var inst_17111 = (state_17209[(8)]);
var state_17209__$1 = state_17209;
var statearr_17253_17306 = state_17209__$1;
(statearr_17253_17306[(2)] = inst_17111);

(statearr_17253_17306[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (5))){
var state_17209__$1 = state_17209;
var statearr_17254_17307 = state_17209__$1;
(statearr_17254_17307[(2)] = true);

(statearr_17254_17307[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (14))){
var state_17209__$1 = state_17209;
var statearr_17255_17308 = state_17209__$1;
(statearr_17255_17308[(2)] = false);

(statearr_17255_17308[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (26))){
var inst_17169 = (state_17209[(9)]);
var inst_17176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17169);
var state_17209__$1 = state_17209;
var statearr_17256_17309 = state_17209__$1;
(statearr_17256_17309[(2)] = inst_17176);

(statearr_17256_17309[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (16))){
var state_17209__$1 = state_17209;
var statearr_17257_17310 = state_17209__$1;
(statearr_17257_17310[(2)] = true);

(statearr_17257_17310[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (38))){
var inst_17199 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17258_17311 = state_17209__$1;
(statearr_17258_17311[(2)] = inst_17199);

(statearr_17258_17311[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (30))){
var inst_17169 = (state_17209[(9)]);
var inst_17160 = (state_17209[(11)]);
var inst_17161 = (state_17209[(13)]);
var inst_17186 = cljs.core.empty_QMARK_(inst_17160);
var inst_17187 = (inst_17161.cljs$core$IFn$_invoke$arity$1 ? inst_17161.cljs$core$IFn$_invoke$arity$1(inst_17169) : inst_17161.call(null,inst_17169));
var inst_17188 = cljs.core.not(inst_17187);
var inst_17189 = ((inst_17186) && (inst_17188));
var state_17209__$1 = state_17209;
var statearr_17259_17312 = state_17209__$1;
(statearr_17259_17312[(2)] = inst_17189);

(statearr_17259_17312[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (10))){
var inst_17111 = (state_17209[(8)]);
var inst_17132 = (state_17209[(2)]);
var inst_17133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17132,cljs.core.cst$kw$solos);
var inst_17134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17132,cljs.core.cst$kw$mutes);
var inst_17135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17132,cljs.core.cst$kw$reads);
var inst_17136 = inst_17111;
var state_17209__$1 = (function (){var statearr_17260 = state_17209;
(statearr_17260[(16)] = inst_17133);

(statearr_17260[(17)] = inst_17135);

(statearr_17260[(7)] = inst_17136);

(statearr_17260[(18)] = inst_17134);

return statearr_17260;
})();
var statearr_17261_17313 = state_17209__$1;
(statearr_17261_17313[(2)] = null);

(statearr_17261_17313[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (18))){
var inst_17151 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17262_17314 = state_17209__$1;
(statearr_17262_17314[(2)] = inst_17151);

(statearr_17262_17314[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (37))){
var state_17209__$1 = state_17209;
var statearr_17263_17315 = state_17209__$1;
(statearr_17263_17315[(2)] = null);

(statearr_17263_17315[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17210 === (8))){
var inst_17111 = (state_17209[(8)]);
var inst_17129 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17111);
var state_17209__$1 = state_17209;
var statearr_17264_17316 = state_17209__$1;
(statearr_17264_17316[(2)] = inst_17129);

(statearr_17264_17316[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__16104__auto__ = null;
var cljs$core$async$mix_$_state_machine__16104__auto____0 = (function (){
var statearr_17265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17265[(0)] = cljs$core$async$mix_$_state_machine__16104__auto__);

(statearr_17265[(1)] = (1));

return statearr_17265;
});
var cljs$core$async$mix_$_state_machine__16104__auto____1 = (function (state_17209){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17209);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17266){var ex__16107__auto__ = e17266;
var statearr_17267_17317 = state_17209;
(statearr_17267_17317[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17209[(4)]))){
var statearr_17268_17318 = state_17209;
(statearr_17268_17318[(1)] = cljs.core.first((state_17209[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17319 = state_17209;
state_17209 = G__17319;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16104__auto__ = function(state_17209){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16104__auto____1.call(this,state_17209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16104__auto____0;
cljs$core$async$mix_$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16104__auto____1;
return cljs$core$async$mix_$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17269 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17269[(6)] = c__16178__auto___17270);

return statearr_17269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17322 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17322(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17323 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17323(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17324 = (function() {
var G__17325 = null;
var G__17325__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17325__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17325 = function(p,v){
switch(arguments.length){
case 1:
return G__17325__1.call(this,p);
case 2:
return G__17325__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17325.cljs$core$IFn$_invoke$arity$1 = G__17325__1;
G__17325.cljs$core$IFn$_invoke$arity$2 = G__17325__2;
return G__17325;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17321 = arguments.length;
switch (G__17321) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17324.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17324.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17329 = arguments.length;
switch (G__17329) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17327_SHARP_){
if(cljs.core.truth_((p1__17327_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17327_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17327_SHARP_.call(null,topic)))){
return p1__17327_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17327_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17330 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17331){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17331 = meta17331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17332,meta17331__$1){
var self__ = this;
var _17332__$1 = this;
return (new cljs.core.async.t_cljs$core$async17330(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17331__$1));
}));

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17332){
var self__ = this;
var _17332__$1 = this;
return self__.meta17331;
}));

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17331], null);
}));

(cljs.core.async.t_cljs$core$async17330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17330");

(cljs.core.async.t_cljs$core$async17330.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17330.
 */
cljs.core.async.__GT_t_cljs$core$async17330 = (function cljs$core$async$__GT_t_cljs$core$async17330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17331){
return (new cljs.core.async.t_cljs$core$async17330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17331));
});

}

return (new cljs.core.async.t_cljs$core$async17330(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16178__auto___17451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17404){
var state_val_17405 = (state_17404[(1)]);
if((state_val_17405 === (7))){
var inst_17400 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17406_17452 = state_17404__$1;
(statearr_17406_17452[(2)] = inst_17400);

(statearr_17406_17452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (20))){
var state_17404__$1 = state_17404;
var statearr_17407_17453 = state_17404__$1;
(statearr_17407_17453[(2)] = null);

(statearr_17407_17453[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (1))){
var state_17404__$1 = state_17404;
var statearr_17408_17454 = state_17404__$1;
(statearr_17408_17454[(2)] = null);

(statearr_17408_17454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (24))){
var inst_17383 = (state_17404[(7)]);
var inst_17392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17383);
var state_17404__$1 = state_17404;
var statearr_17409_17455 = state_17404__$1;
(statearr_17409_17455[(2)] = inst_17392);

(statearr_17409_17455[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (4))){
var inst_17335 = (state_17404[(8)]);
var inst_17335__$1 = (state_17404[(2)]);
var inst_17336 = (inst_17335__$1 == null);
var state_17404__$1 = (function (){var statearr_17410 = state_17404;
(statearr_17410[(8)] = inst_17335__$1);

return statearr_17410;
})();
if(cljs.core.truth_(inst_17336)){
var statearr_17411_17456 = state_17404__$1;
(statearr_17411_17456[(1)] = (5));

} else {
var statearr_17412_17457 = state_17404__$1;
(statearr_17412_17457[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (15))){
var inst_17377 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17413_17458 = state_17404__$1;
(statearr_17413_17458[(2)] = inst_17377);

(statearr_17413_17458[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (21))){
var inst_17397 = (state_17404[(2)]);
var state_17404__$1 = (function (){var statearr_17414 = state_17404;
(statearr_17414[(9)] = inst_17397);

return statearr_17414;
})();
var statearr_17415_17459 = state_17404__$1;
(statearr_17415_17459[(2)] = null);

(statearr_17415_17459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (13))){
var inst_17359 = (state_17404[(10)]);
var inst_17361 = cljs.core.chunked_seq_QMARK_(inst_17359);
var state_17404__$1 = state_17404;
if(inst_17361){
var statearr_17416_17460 = state_17404__$1;
(statearr_17416_17460[(1)] = (16));

} else {
var statearr_17417_17461 = state_17404__$1;
(statearr_17417_17461[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (22))){
var inst_17389 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
if(cljs.core.truth_(inst_17389)){
var statearr_17418_17462 = state_17404__$1;
(statearr_17418_17462[(1)] = (23));

} else {
var statearr_17419_17463 = state_17404__$1;
(statearr_17419_17463[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (6))){
var inst_17383 = (state_17404[(7)]);
var inst_17335 = (state_17404[(8)]);
var inst_17385 = (state_17404[(11)]);
var inst_17383__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17335) : topic_fn.call(null,inst_17335));
var inst_17384 = cljs.core.deref(mults);
var inst_17385__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17384,inst_17383__$1);
var state_17404__$1 = (function (){var statearr_17420 = state_17404;
(statearr_17420[(7)] = inst_17383__$1);

(statearr_17420[(11)] = inst_17385__$1);

return statearr_17420;
})();
if(cljs.core.truth_(inst_17385__$1)){
var statearr_17421_17464 = state_17404__$1;
(statearr_17421_17464[(1)] = (19));

} else {
var statearr_17422_17465 = state_17404__$1;
(statearr_17422_17465[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (25))){
var inst_17394 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17423_17466 = state_17404__$1;
(statearr_17423_17466[(2)] = inst_17394);

(statearr_17423_17466[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (17))){
var inst_17359 = (state_17404[(10)]);
var inst_17368 = cljs.core.first(inst_17359);
var inst_17369 = cljs.core.async.muxch_STAR_(inst_17368);
var inst_17370 = cljs.core.async.close_BANG_(inst_17369);
var inst_17371 = cljs.core.next(inst_17359);
var inst_17345 = inst_17371;
var inst_17346 = null;
var inst_17347 = (0);
var inst_17348 = (0);
var state_17404__$1 = (function (){var statearr_17424 = state_17404;
(statearr_17424[(12)] = inst_17348);

(statearr_17424[(13)] = inst_17345);

(statearr_17424[(14)] = inst_17370);

(statearr_17424[(15)] = inst_17346);

(statearr_17424[(16)] = inst_17347);

return statearr_17424;
})();
var statearr_17425_17467 = state_17404__$1;
(statearr_17425_17467[(2)] = null);

(statearr_17425_17467[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (3))){
var inst_17402 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17404__$1,inst_17402);
} else {
if((state_val_17405 === (12))){
var inst_17379 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17426_17468 = state_17404__$1;
(statearr_17426_17468[(2)] = inst_17379);

(statearr_17426_17468[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (2))){
var state_17404__$1 = state_17404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17404__$1,(4),ch);
} else {
if((state_val_17405 === (23))){
var state_17404__$1 = state_17404;
var statearr_17427_17469 = state_17404__$1;
(statearr_17427_17469[(2)] = null);

(statearr_17427_17469[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (19))){
var inst_17335 = (state_17404[(8)]);
var inst_17385 = (state_17404[(11)]);
var inst_17387 = cljs.core.async.muxch_STAR_(inst_17385);
var state_17404__$1 = state_17404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17404__$1,(22),inst_17387,inst_17335);
} else {
if((state_val_17405 === (11))){
var inst_17345 = (state_17404[(13)]);
var inst_17359 = (state_17404[(10)]);
var inst_17359__$1 = cljs.core.seq(inst_17345);
var state_17404__$1 = (function (){var statearr_17428 = state_17404;
(statearr_17428[(10)] = inst_17359__$1);

return statearr_17428;
})();
if(inst_17359__$1){
var statearr_17429_17470 = state_17404__$1;
(statearr_17429_17470[(1)] = (13));

} else {
var statearr_17430_17471 = state_17404__$1;
(statearr_17430_17471[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (9))){
var inst_17381 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17431_17472 = state_17404__$1;
(statearr_17431_17472[(2)] = inst_17381);

(statearr_17431_17472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (5))){
var inst_17342 = cljs.core.deref(mults);
var inst_17343 = cljs.core.vals(inst_17342);
var inst_17344 = cljs.core.seq(inst_17343);
var inst_17345 = inst_17344;
var inst_17346 = null;
var inst_17347 = (0);
var inst_17348 = (0);
var state_17404__$1 = (function (){var statearr_17432 = state_17404;
(statearr_17432[(12)] = inst_17348);

(statearr_17432[(13)] = inst_17345);

(statearr_17432[(15)] = inst_17346);

(statearr_17432[(16)] = inst_17347);

return statearr_17432;
})();
var statearr_17433_17473 = state_17404__$1;
(statearr_17433_17473[(2)] = null);

(statearr_17433_17473[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (14))){
var state_17404__$1 = state_17404;
var statearr_17437_17474 = state_17404__$1;
(statearr_17437_17474[(2)] = null);

(statearr_17437_17474[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (16))){
var inst_17359 = (state_17404[(10)]);
var inst_17363 = cljs.core.chunk_first(inst_17359);
var inst_17364 = cljs.core.chunk_rest(inst_17359);
var inst_17365 = cljs.core.count(inst_17363);
var inst_17345 = inst_17364;
var inst_17346 = inst_17363;
var inst_17347 = inst_17365;
var inst_17348 = (0);
var state_17404__$1 = (function (){var statearr_17438 = state_17404;
(statearr_17438[(12)] = inst_17348);

(statearr_17438[(13)] = inst_17345);

(statearr_17438[(15)] = inst_17346);

(statearr_17438[(16)] = inst_17347);

return statearr_17438;
})();
var statearr_17439_17475 = state_17404__$1;
(statearr_17439_17475[(2)] = null);

(statearr_17439_17475[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (10))){
var inst_17348 = (state_17404[(12)]);
var inst_17345 = (state_17404[(13)]);
var inst_17346 = (state_17404[(15)]);
var inst_17347 = (state_17404[(16)]);
var inst_17353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17346,inst_17348);
var inst_17354 = cljs.core.async.muxch_STAR_(inst_17353);
var inst_17355 = cljs.core.async.close_BANG_(inst_17354);
var inst_17356 = (inst_17348 + (1));
var tmp17434 = inst_17345;
var tmp17435 = inst_17346;
var tmp17436 = inst_17347;
var inst_17345__$1 = tmp17434;
var inst_17346__$1 = tmp17435;
var inst_17347__$1 = tmp17436;
var inst_17348__$1 = inst_17356;
var state_17404__$1 = (function (){var statearr_17440 = state_17404;
(statearr_17440[(12)] = inst_17348__$1);

(statearr_17440[(13)] = inst_17345__$1);

(statearr_17440[(17)] = inst_17355);

(statearr_17440[(15)] = inst_17346__$1);

(statearr_17440[(16)] = inst_17347__$1);

return statearr_17440;
})();
var statearr_17441_17476 = state_17404__$1;
(statearr_17441_17476[(2)] = null);

(statearr_17441_17476[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (18))){
var inst_17374 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17442_17477 = state_17404__$1;
(statearr_17442_17477[(2)] = inst_17374);

(statearr_17442_17477[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17405 === (8))){
var inst_17348 = (state_17404[(12)]);
var inst_17347 = (state_17404[(16)]);
var inst_17350 = (inst_17348 < inst_17347);
var inst_17351 = inst_17350;
var state_17404__$1 = state_17404;
if(cljs.core.truth_(inst_17351)){
var statearr_17443_17478 = state_17404__$1;
(statearr_17443_17478[(1)] = (10));

} else {
var statearr_17444_17479 = state_17404__$1;
(statearr_17444_17479[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_17445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17445[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_17445[(1)] = (1));

return statearr_17445;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_17404){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17404);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17446){var ex__16107__auto__ = e17446;
var statearr_17447_17480 = state_17404;
(statearr_17447_17480[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17404[(4)]))){
var statearr_17448_17481 = state_17404;
(statearr_17448_17481[(1)] = cljs.core.first((state_17404[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17482 = state_17404;
state_17404 = G__17482;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_17404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_17404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17449 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17449[(6)] = c__16178__auto___17451);

return statearr_17449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17484 = arguments.length;
switch (G__17484) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17487 = arguments.length;
switch (G__17487) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17490 = arguments.length;
switch (G__17490) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16178__auto___17568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17533){
var state_val_17534 = (state_17533[(1)]);
if((state_val_17534 === (7))){
var state_17533__$1 = state_17533;
var statearr_17535_17569 = state_17533__$1;
(statearr_17535_17569[(2)] = null);

(statearr_17535_17569[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (1))){
var state_17533__$1 = state_17533;
var statearr_17536_17570 = state_17533__$1;
(statearr_17536_17570[(2)] = null);

(statearr_17536_17570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (4))){
var inst_17493 = (state_17533[(7)]);
var inst_17494 = (state_17533[(8)]);
var inst_17496 = (inst_17494 < inst_17493);
var state_17533__$1 = state_17533;
if(cljs.core.truth_(inst_17496)){
var statearr_17537_17571 = state_17533__$1;
(statearr_17537_17571[(1)] = (6));

} else {
var statearr_17538_17572 = state_17533__$1;
(statearr_17538_17572[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (15))){
var inst_17519 = (state_17533[(9)]);
var inst_17524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17519);
var state_17533__$1 = state_17533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17533__$1,(17),out,inst_17524);
} else {
if((state_val_17534 === (13))){
var inst_17519 = (state_17533[(9)]);
var inst_17519__$1 = (state_17533[(2)]);
var inst_17520 = cljs.core.some(cljs.core.nil_QMARK_,inst_17519__$1);
var state_17533__$1 = (function (){var statearr_17539 = state_17533;
(statearr_17539[(9)] = inst_17519__$1);

return statearr_17539;
})();
if(cljs.core.truth_(inst_17520)){
var statearr_17540_17573 = state_17533__$1;
(statearr_17540_17573[(1)] = (14));

} else {
var statearr_17541_17574 = state_17533__$1;
(statearr_17541_17574[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (6))){
var state_17533__$1 = state_17533;
var statearr_17542_17575 = state_17533__$1;
(statearr_17542_17575[(2)] = null);

(statearr_17542_17575[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (17))){
var inst_17526 = (state_17533[(2)]);
var state_17533__$1 = (function (){var statearr_17544 = state_17533;
(statearr_17544[(10)] = inst_17526);

return statearr_17544;
})();
var statearr_17545_17576 = state_17533__$1;
(statearr_17545_17576[(2)] = null);

(statearr_17545_17576[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (3))){
var inst_17531 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17533__$1,inst_17531);
} else {
if((state_val_17534 === (12))){
var _ = (function (){var statearr_17546 = state_17533;
(statearr_17546[(4)] = cljs.core.rest((state_17533[(4)])));

return statearr_17546;
})();
var state_17533__$1 = state_17533;
var ex17543 = (state_17533__$1[(2)]);
var statearr_17547_17577 = state_17533__$1;
(statearr_17547_17577[(5)] = ex17543);


if((ex17543 instanceof Object)){
var statearr_17548_17578 = state_17533__$1;
(statearr_17548_17578[(1)] = (11));

(statearr_17548_17578[(5)] = null);

} else {
throw ex17543;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (2))){
var inst_17492 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17493 = cnt;
var inst_17494 = (0);
var state_17533__$1 = (function (){var statearr_17549 = state_17533;
(statearr_17549[(7)] = inst_17493);

(statearr_17549[(11)] = inst_17492);

(statearr_17549[(8)] = inst_17494);

return statearr_17549;
})();
var statearr_17550_17579 = state_17533__$1;
(statearr_17550_17579[(2)] = null);

(statearr_17550_17579[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (11))){
var inst_17498 = (state_17533[(2)]);
var inst_17499 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17533__$1 = (function (){var statearr_17551 = state_17533;
(statearr_17551[(12)] = inst_17498);

return statearr_17551;
})();
var statearr_17552_17580 = state_17533__$1;
(statearr_17552_17580[(2)] = inst_17499);

(statearr_17552_17580[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (9))){
var inst_17494 = (state_17533[(8)]);
var _ = (function (){var statearr_17553 = state_17533;
(statearr_17553[(4)] = cljs.core.cons((12),(state_17533[(4)])));

return statearr_17553;
})();
var inst_17505 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17494) : chs__$1.call(null,inst_17494));
var inst_17506 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17494) : done.call(null,inst_17494));
var inst_17507 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17505,inst_17506);
var ___$1 = (function (){var statearr_17554 = state_17533;
(statearr_17554[(4)] = cljs.core.rest((state_17533[(4)])));

return statearr_17554;
})();
var state_17533__$1 = state_17533;
var statearr_17555_17581 = state_17533__$1;
(statearr_17555_17581[(2)] = inst_17507);

(statearr_17555_17581[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (5))){
var inst_17517 = (state_17533[(2)]);
var state_17533__$1 = (function (){var statearr_17556 = state_17533;
(statearr_17556[(13)] = inst_17517);

return statearr_17556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17533__$1,(13),dchan);
} else {
if((state_val_17534 === (14))){
var inst_17522 = cljs.core.async.close_BANG_(out);
var state_17533__$1 = state_17533;
var statearr_17557_17582 = state_17533__$1;
(statearr_17557_17582[(2)] = inst_17522);

(statearr_17557_17582[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (16))){
var inst_17529 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
var statearr_17558_17583 = state_17533__$1;
(statearr_17558_17583[(2)] = inst_17529);

(statearr_17558_17583[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (10))){
var inst_17494 = (state_17533[(8)]);
var inst_17510 = (state_17533[(2)]);
var inst_17511 = (inst_17494 + (1));
var inst_17494__$1 = inst_17511;
var state_17533__$1 = (function (){var statearr_17559 = state_17533;
(statearr_17559[(14)] = inst_17510);

(statearr_17559[(8)] = inst_17494__$1);

return statearr_17559;
})();
var statearr_17560_17584 = state_17533__$1;
(statearr_17560_17584[(2)] = null);

(statearr_17560_17584[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17534 === (8))){
var inst_17515 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
var statearr_17561_17585 = state_17533__$1;
(statearr_17561_17585[(2)] = inst_17515);

(statearr_17561_17585[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_17562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17562[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_17562[(1)] = (1));

return statearr_17562;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_17533){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17533);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17563){var ex__16107__auto__ = e17563;
var statearr_17564_17586 = state_17533;
(statearr_17564_17586[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17533[(4)]))){
var statearr_17565_17587 = state_17533;
(statearr_17565_17587[(1)] = cljs.core.first((state_17533[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17588 = state_17533;
state_17533 = G__17588;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_17533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_17533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17566 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17566[(6)] = c__16178__auto___17568);

return statearr_17566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17591 = arguments.length;
switch (G__17591) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16178__auto___17646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17623){
var state_val_17624 = (state_17623[(1)]);
if((state_val_17624 === (7))){
var inst_17603 = (state_17623[(7)]);
var inst_17602 = (state_17623[(8)]);
var inst_17602__$1 = (state_17623[(2)]);
var inst_17603__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17602__$1,(0),null);
var inst_17604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17602__$1,(1),null);
var inst_17605 = (inst_17603__$1 == null);
var state_17623__$1 = (function (){var statearr_17625 = state_17623;
(statearr_17625[(7)] = inst_17603__$1);

(statearr_17625[(9)] = inst_17604);

(statearr_17625[(8)] = inst_17602__$1);

return statearr_17625;
})();
if(cljs.core.truth_(inst_17605)){
var statearr_17626_17647 = state_17623__$1;
(statearr_17626_17647[(1)] = (8));

} else {
var statearr_17627_17648 = state_17623__$1;
(statearr_17627_17648[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (1))){
var inst_17592 = cljs.core.vec(chs);
var inst_17593 = inst_17592;
var state_17623__$1 = (function (){var statearr_17628 = state_17623;
(statearr_17628[(10)] = inst_17593);

return statearr_17628;
})();
var statearr_17629_17649 = state_17623__$1;
(statearr_17629_17649[(2)] = null);

(statearr_17629_17649[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (4))){
var inst_17593 = (state_17623[(10)]);
var state_17623__$1 = state_17623;
return cljs.core.async.ioc_alts_BANG_(state_17623__$1,(7),inst_17593);
} else {
if((state_val_17624 === (6))){
var inst_17619 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
var statearr_17630_17650 = state_17623__$1;
(statearr_17630_17650[(2)] = inst_17619);

(statearr_17630_17650[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (3))){
var inst_17621 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17623__$1,inst_17621);
} else {
if((state_val_17624 === (2))){
var inst_17593 = (state_17623[(10)]);
var inst_17595 = cljs.core.count(inst_17593);
var inst_17596 = (inst_17595 > (0));
var state_17623__$1 = state_17623;
if(cljs.core.truth_(inst_17596)){
var statearr_17632_17651 = state_17623__$1;
(statearr_17632_17651[(1)] = (4));

} else {
var statearr_17633_17652 = state_17623__$1;
(statearr_17633_17652[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (11))){
var inst_17593 = (state_17623[(10)]);
var inst_17612 = (state_17623[(2)]);
var tmp17631 = inst_17593;
var inst_17593__$1 = tmp17631;
var state_17623__$1 = (function (){var statearr_17634 = state_17623;
(statearr_17634[(10)] = inst_17593__$1);

(statearr_17634[(11)] = inst_17612);

return statearr_17634;
})();
var statearr_17635_17653 = state_17623__$1;
(statearr_17635_17653[(2)] = null);

(statearr_17635_17653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (9))){
var inst_17603 = (state_17623[(7)]);
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17623__$1,(11),out,inst_17603);
} else {
if((state_val_17624 === (5))){
var inst_17617 = cljs.core.async.close_BANG_(out);
var state_17623__$1 = state_17623;
var statearr_17636_17654 = state_17623__$1;
(statearr_17636_17654[(2)] = inst_17617);

(statearr_17636_17654[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (10))){
var inst_17615 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
var statearr_17637_17655 = state_17623__$1;
(statearr_17637_17655[(2)] = inst_17615);

(statearr_17637_17655[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17624 === (8))){
var inst_17593 = (state_17623[(10)]);
var inst_17603 = (state_17623[(7)]);
var inst_17604 = (state_17623[(9)]);
var inst_17602 = (state_17623[(8)]);
var inst_17607 = (function (){var cs = inst_17593;
var vec__17598 = inst_17602;
var v = inst_17603;
var c = inst_17604;
return (function (p1__17589_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17589_SHARP_);
});
})();
var inst_17608 = cljs.core.filterv(inst_17607,inst_17593);
var inst_17593__$1 = inst_17608;
var state_17623__$1 = (function (){var statearr_17638 = state_17623;
(statearr_17638[(10)] = inst_17593__$1);

return statearr_17638;
})();
var statearr_17639_17656 = state_17623__$1;
(statearr_17639_17656[(2)] = null);

(statearr_17639_17656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_17640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17640[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_17640[(1)] = (1));

return statearr_17640;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_17623){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17623);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17641){var ex__16107__auto__ = e17641;
var statearr_17642_17657 = state_17623;
(statearr_17642_17657[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17623[(4)]))){
var statearr_17643_17658 = state_17623;
(statearr_17643_17658[(1)] = cljs.core.first((state_17623[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17659 = state_17623;
state_17623 = G__17659;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_17623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_17623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17644 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17644[(6)] = c__16178__auto___17646);

return statearr_17644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17661 = arguments.length;
switch (G__17661) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16178__auto___17707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17685){
var state_val_17686 = (state_17685[(1)]);
if((state_val_17686 === (7))){
var inst_17667 = (state_17685[(7)]);
var inst_17667__$1 = (state_17685[(2)]);
var inst_17668 = (inst_17667__$1 == null);
var inst_17669 = cljs.core.not(inst_17668);
var state_17685__$1 = (function (){var statearr_17687 = state_17685;
(statearr_17687[(7)] = inst_17667__$1);

return statearr_17687;
})();
if(inst_17669){
var statearr_17688_17708 = state_17685__$1;
(statearr_17688_17708[(1)] = (8));

} else {
var statearr_17689_17709 = state_17685__$1;
(statearr_17689_17709[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (1))){
var inst_17662 = (0);
var state_17685__$1 = (function (){var statearr_17690 = state_17685;
(statearr_17690[(8)] = inst_17662);

return statearr_17690;
})();
var statearr_17691_17710 = state_17685__$1;
(statearr_17691_17710[(2)] = null);

(statearr_17691_17710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (4))){
var state_17685__$1 = state_17685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17685__$1,(7),ch);
} else {
if((state_val_17686 === (6))){
var inst_17680 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17692_17711 = state_17685__$1;
(statearr_17692_17711[(2)] = inst_17680);

(statearr_17692_17711[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (3))){
var inst_17682 = (state_17685[(2)]);
var inst_17683 = cljs.core.async.close_BANG_(out);
var state_17685__$1 = (function (){var statearr_17693 = state_17685;
(statearr_17693[(9)] = inst_17682);

return statearr_17693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17685__$1,inst_17683);
} else {
if((state_val_17686 === (2))){
var inst_17662 = (state_17685[(8)]);
var inst_17664 = (inst_17662 < n);
var state_17685__$1 = state_17685;
if(cljs.core.truth_(inst_17664)){
var statearr_17694_17712 = state_17685__$1;
(statearr_17694_17712[(1)] = (4));

} else {
var statearr_17695_17713 = state_17685__$1;
(statearr_17695_17713[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (11))){
var inst_17662 = (state_17685[(8)]);
var inst_17672 = (state_17685[(2)]);
var inst_17673 = (inst_17662 + (1));
var inst_17662__$1 = inst_17673;
var state_17685__$1 = (function (){var statearr_17696 = state_17685;
(statearr_17696[(8)] = inst_17662__$1);

(statearr_17696[(10)] = inst_17672);

return statearr_17696;
})();
var statearr_17697_17714 = state_17685__$1;
(statearr_17697_17714[(2)] = null);

(statearr_17697_17714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (9))){
var state_17685__$1 = state_17685;
var statearr_17698_17715 = state_17685__$1;
(statearr_17698_17715[(2)] = null);

(statearr_17698_17715[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (5))){
var state_17685__$1 = state_17685;
var statearr_17699_17716 = state_17685__$1;
(statearr_17699_17716[(2)] = null);

(statearr_17699_17716[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (10))){
var inst_17677 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17700_17717 = state_17685__$1;
(statearr_17700_17717[(2)] = inst_17677);

(statearr_17700_17717[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17686 === (8))){
var inst_17667 = (state_17685[(7)]);
var state_17685__$1 = state_17685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17685__$1,(11),out,inst_17667);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_17701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17701[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_17701[(1)] = (1));

return statearr_17701;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_17685){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17685);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17702){var ex__16107__auto__ = e17702;
var statearr_17703_17718 = state_17685;
(statearr_17703_17718[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17685[(4)]))){
var statearr_17704_17719 = state_17685;
(statearr_17704_17719[(1)] = cljs.core.first((state_17685[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17720 = state_17685;
state_17685 = G__17720;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_17685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_17685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17705 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17705[(6)] = c__16178__auto___17707);

return statearr_17705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17722 = (function (f,ch,meta17723){
this.f = f;
this.ch = ch;
this.meta17723 = meta17723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17724,meta17723__$1){
var self__ = this;
var _17724__$1 = this;
return (new cljs.core.async.t_cljs$core$async17722(self__.f,self__.ch,meta17723__$1));
}));

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17724){
var self__ = this;
var _17724__$1 = this;
return self__.meta17723;
}));

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17725 = (function (f,ch,meta17723,_,fn1,meta17726){
this.f = f;
this.ch = ch;
this.meta17723 = meta17723;
this._ = _;
this.fn1 = fn1;
this.meta17726 = meta17726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17727,meta17726__$1){
var self__ = this;
var _17727__$1 = this;
return (new cljs.core.async.t_cljs$core$async17725(self__.f,self__.ch,self__.meta17723,self__._,self__.fn1,meta17726__$1));
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17727){
var self__ = this;
var _17727__$1 = this;
return self__.meta17726;
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17721_SHARP_){
var G__17728 = (((p1__17721_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17721_SHARP_) : self__.f.call(null,p1__17721_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17728) : f1.call(null,G__17728));
});
}));

(cljs.core.async.t_cljs$core$async17725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17723,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17722], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17726], null);
}));

(cljs.core.async.t_cljs$core$async17725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17725");

(cljs.core.async.t_cljs$core$async17725.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17725.
 */
cljs.core.async.__GT_t_cljs$core$async17725 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17725(f__$1,ch__$1,meta17723__$1,___$2,fn1__$1,meta17726){
return (new cljs.core.async.t_cljs$core$async17725(f__$1,ch__$1,meta17723__$1,___$2,fn1__$1,meta17726));
});

}

return (new cljs.core.async.t_cljs$core$async17725(self__.f,self__.ch,self__.meta17723,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17729 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17729) : self__.f.call(null,G__17729));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17723], null);
}));

(cljs.core.async.t_cljs$core$async17722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17722");

(cljs.core.async.t_cljs$core$async17722.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17722.
 */
cljs.core.async.__GT_t_cljs$core$async17722 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17722(f__$1,ch__$1,meta17723){
return (new cljs.core.async.t_cljs$core$async17722(f__$1,ch__$1,meta17723));
});

}

return (new cljs.core.async.t_cljs$core$async17722(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17730 = (function (f,ch,meta17731){
this.f = f;
this.ch = ch;
this.meta17731 = meta17731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17732,meta17731__$1){
var self__ = this;
var _17732__$1 = this;
return (new cljs.core.async.t_cljs$core$async17730(self__.f,self__.ch,meta17731__$1));
}));

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17732){
var self__ = this;
var _17732__$1 = this;
return self__.meta17731;
}));

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17731], null);
}));

(cljs.core.async.t_cljs$core$async17730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17730");

(cljs.core.async.t_cljs$core$async17730.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17730.
 */
cljs.core.async.__GT_t_cljs$core$async17730 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17730(f__$1,ch__$1,meta17731){
return (new cljs.core.async.t_cljs$core$async17730(f__$1,ch__$1,meta17731));
});

}

return (new cljs.core.async.t_cljs$core$async17730(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17733 = (function (p,ch,meta17734){
this.p = p;
this.ch = ch;
this.meta17734 = meta17734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17735,meta17734__$1){
var self__ = this;
var _17735__$1 = this;
return (new cljs.core.async.t_cljs$core$async17733(self__.p,self__.ch,meta17734__$1));
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17735){
var self__ = this;
var _17735__$1 = this;
return self__.meta17734;
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17734], null);
}));

(cljs.core.async.t_cljs$core$async17733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17733");

(cljs.core.async.t_cljs$core$async17733.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17733.
 */
cljs.core.async.__GT_t_cljs$core$async17733 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17733(p__$1,ch__$1,meta17734){
return (new cljs.core.async.t_cljs$core$async17733(p__$1,ch__$1,meta17734));
});

}

return (new cljs.core.async.t_cljs$core$async17733(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17737 = arguments.length;
switch (G__17737) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16178__auto___17778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17758){
var state_val_17759 = (state_17758[(1)]);
if((state_val_17759 === (7))){
var inst_17754 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
var statearr_17760_17779 = state_17758__$1;
(statearr_17760_17779[(2)] = inst_17754);

(statearr_17760_17779[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (1))){
var state_17758__$1 = state_17758;
var statearr_17761_17780 = state_17758__$1;
(statearr_17761_17780[(2)] = null);

(statearr_17761_17780[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (4))){
var inst_17740 = (state_17758[(7)]);
var inst_17740__$1 = (state_17758[(2)]);
var inst_17741 = (inst_17740__$1 == null);
var state_17758__$1 = (function (){var statearr_17762 = state_17758;
(statearr_17762[(7)] = inst_17740__$1);

return statearr_17762;
})();
if(cljs.core.truth_(inst_17741)){
var statearr_17763_17781 = state_17758__$1;
(statearr_17763_17781[(1)] = (5));

} else {
var statearr_17764_17782 = state_17758__$1;
(statearr_17764_17782[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (6))){
var inst_17740 = (state_17758[(7)]);
var inst_17745 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17740) : p.call(null,inst_17740));
var state_17758__$1 = state_17758;
if(cljs.core.truth_(inst_17745)){
var statearr_17765_17783 = state_17758__$1;
(statearr_17765_17783[(1)] = (8));

} else {
var statearr_17766_17784 = state_17758__$1;
(statearr_17766_17784[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (3))){
var inst_17756 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17758__$1,inst_17756);
} else {
if((state_val_17759 === (2))){
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17758__$1,(4),ch);
} else {
if((state_val_17759 === (11))){
var inst_17748 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
var statearr_17767_17785 = state_17758__$1;
(statearr_17767_17785[(2)] = inst_17748);

(statearr_17767_17785[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (9))){
var state_17758__$1 = state_17758;
var statearr_17768_17786 = state_17758__$1;
(statearr_17768_17786[(2)] = null);

(statearr_17768_17786[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (5))){
var inst_17743 = cljs.core.async.close_BANG_(out);
var state_17758__$1 = state_17758;
var statearr_17769_17787 = state_17758__$1;
(statearr_17769_17787[(2)] = inst_17743);

(statearr_17769_17787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (10))){
var inst_17751 = (state_17758[(2)]);
var state_17758__$1 = (function (){var statearr_17770 = state_17758;
(statearr_17770[(8)] = inst_17751);

return statearr_17770;
})();
var statearr_17771_17788 = state_17758__$1;
(statearr_17771_17788[(2)] = null);

(statearr_17771_17788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17759 === (8))){
var inst_17740 = (state_17758[(7)]);
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17758__$1,(11),out,inst_17740);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_17772 = [null,null,null,null,null,null,null,null,null];
(statearr_17772[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_17772[(1)] = (1));

return statearr_17772;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_17758){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17758);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17773){var ex__16107__auto__ = e17773;
var statearr_17774_17789 = state_17758;
(statearr_17774_17789[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17758[(4)]))){
var statearr_17775_17790 = state_17758;
(statearr_17775_17790[(1)] = cljs.core.first((state_17758[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17791 = state_17758;
state_17758 = G__17791;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_17758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_17758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17776 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17776[(6)] = c__16178__auto___17778);

return statearr_17776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17793 = arguments.length;
switch (G__17793) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17856){
var state_val_17857 = (state_17856[(1)]);
if((state_val_17857 === (7))){
var inst_17852 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17858_17897 = state_17856__$1;
(statearr_17858_17897[(2)] = inst_17852);

(statearr_17858_17897[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (20))){
var inst_17822 = (state_17856[(7)]);
var inst_17833 = (state_17856[(2)]);
var inst_17834 = cljs.core.next(inst_17822);
var inst_17808 = inst_17834;
var inst_17809 = null;
var inst_17810 = (0);
var inst_17811 = (0);
var state_17856__$1 = (function (){var statearr_17859 = state_17856;
(statearr_17859[(8)] = inst_17811);

(statearr_17859[(9)] = inst_17808);

(statearr_17859[(10)] = inst_17810);

(statearr_17859[(11)] = inst_17809);

(statearr_17859[(12)] = inst_17833);

return statearr_17859;
})();
var statearr_17860_17898 = state_17856__$1;
(statearr_17860_17898[(2)] = null);

(statearr_17860_17898[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (1))){
var state_17856__$1 = state_17856;
var statearr_17861_17899 = state_17856__$1;
(statearr_17861_17899[(2)] = null);

(statearr_17861_17899[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (4))){
var inst_17797 = (state_17856[(13)]);
var inst_17797__$1 = (state_17856[(2)]);
var inst_17798 = (inst_17797__$1 == null);
var state_17856__$1 = (function (){var statearr_17862 = state_17856;
(statearr_17862[(13)] = inst_17797__$1);

return statearr_17862;
})();
if(cljs.core.truth_(inst_17798)){
var statearr_17863_17900 = state_17856__$1;
(statearr_17863_17900[(1)] = (5));

} else {
var statearr_17864_17901 = state_17856__$1;
(statearr_17864_17901[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (15))){
var state_17856__$1 = state_17856;
var statearr_17868_17902 = state_17856__$1;
(statearr_17868_17902[(2)] = null);

(statearr_17868_17902[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (21))){
var state_17856__$1 = state_17856;
var statearr_17869_17903 = state_17856__$1;
(statearr_17869_17903[(2)] = null);

(statearr_17869_17903[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (13))){
var inst_17811 = (state_17856[(8)]);
var inst_17808 = (state_17856[(9)]);
var inst_17810 = (state_17856[(10)]);
var inst_17809 = (state_17856[(11)]);
var inst_17818 = (state_17856[(2)]);
var inst_17819 = (inst_17811 + (1));
var tmp17865 = inst_17808;
var tmp17866 = inst_17810;
var tmp17867 = inst_17809;
var inst_17808__$1 = tmp17865;
var inst_17809__$1 = tmp17867;
var inst_17810__$1 = tmp17866;
var inst_17811__$1 = inst_17819;
var state_17856__$1 = (function (){var statearr_17870 = state_17856;
(statearr_17870[(8)] = inst_17811__$1);

(statearr_17870[(9)] = inst_17808__$1);

(statearr_17870[(10)] = inst_17810__$1);

(statearr_17870[(11)] = inst_17809__$1);

(statearr_17870[(14)] = inst_17818);

return statearr_17870;
})();
var statearr_17871_17904 = state_17856__$1;
(statearr_17871_17904[(2)] = null);

(statearr_17871_17904[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (22))){
var state_17856__$1 = state_17856;
var statearr_17872_17905 = state_17856__$1;
(statearr_17872_17905[(2)] = null);

(statearr_17872_17905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (6))){
var inst_17797 = (state_17856[(13)]);
var inst_17806 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17797) : f.call(null,inst_17797));
var inst_17807 = cljs.core.seq(inst_17806);
var inst_17808 = inst_17807;
var inst_17809 = null;
var inst_17810 = (0);
var inst_17811 = (0);
var state_17856__$1 = (function (){var statearr_17873 = state_17856;
(statearr_17873[(8)] = inst_17811);

(statearr_17873[(9)] = inst_17808);

(statearr_17873[(10)] = inst_17810);

(statearr_17873[(11)] = inst_17809);

return statearr_17873;
})();
var statearr_17874_17906 = state_17856__$1;
(statearr_17874_17906[(2)] = null);

(statearr_17874_17906[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (17))){
var inst_17822 = (state_17856[(7)]);
var inst_17826 = cljs.core.chunk_first(inst_17822);
var inst_17827 = cljs.core.chunk_rest(inst_17822);
var inst_17828 = cljs.core.count(inst_17826);
var inst_17808 = inst_17827;
var inst_17809 = inst_17826;
var inst_17810 = inst_17828;
var inst_17811 = (0);
var state_17856__$1 = (function (){var statearr_17875 = state_17856;
(statearr_17875[(8)] = inst_17811);

(statearr_17875[(9)] = inst_17808);

(statearr_17875[(10)] = inst_17810);

(statearr_17875[(11)] = inst_17809);

return statearr_17875;
})();
var statearr_17876_17907 = state_17856__$1;
(statearr_17876_17907[(2)] = null);

(statearr_17876_17907[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (3))){
var inst_17854 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17856__$1,inst_17854);
} else {
if((state_val_17857 === (12))){
var inst_17842 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17877_17908 = state_17856__$1;
(statearr_17877_17908[(2)] = inst_17842);

(statearr_17877_17908[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (2))){
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17856__$1,(4),in$);
} else {
if((state_val_17857 === (23))){
var inst_17850 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17878_17909 = state_17856__$1;
(statearr_17878_17909[(2)] = inst_17850);

(statearr_17878_17909[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (19))){
var inst_17837 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17879_17910 = state_17856__$1;
(statearr_17879_17910[(2)] = inst_17837);

(statearr_17879_17910[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (11))){
var inst_17808 = (state_17856[(9)]);
var inst_17822 = (state_17856[(7)]);
var inst_17822__$1 = cljs.core.seq(inst_17808);
var state_17856__$1 = (function (){var statearr_17880 = state_17856;
(statearr_17880[(7)] = inst_17822__$1);

return statearr_17880;
})();
if(inst_17822__$1){
var statearr_17881_17911 = state_17856__$1;
(statearr_17881_17911[(1)] = (14));

} else {
var statearr_17882_17912 = state_17856__$1;
(statearr_17882_17912[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (9))){
var inst_17844 = (state_17856[(2)]);
var inst_17845 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17856__$1 = (function (){var statearr_17883 = state_17856;
(statearr_17883[(15)] = inst_17844);

return statearr_17883;
})();
if(cljs.core.truth_(inst_17845)){
var statearr_17884_17913 = state_17856__$1;
(statearr_17884_17913[(1)] = (21));

} else {
var statearr_17885_17914 = state_17856__$1;
(statearr_17885_17914[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (5))){
var inst_17800 = cljs.core.async.close_BANG_(out);
var state_17856__$1 = state_17856;
var statearr_17886_17915 = state_17856__$1;
(statearr_17886_17915[(2)] = inst_17800);

(statearr_17886_17915[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (14))){
var inst_17822 = (state_17856[(7)]);
var inst_17824 = cljs.core.chunked_seq_QMARK_(inst_17822);
var state_17856__$1 = state_17856;
if(inst_17824){
var statearr_17887_17916 = state_17856__$1;
(statearr_17887_17916[(1)] = (17));

} else {
var statearr_17888_17917 = state_17856__$1;
(statearr_17888_17917[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (16))){
var inst_17840 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17889_17918 = state_17856__$1;
(statearr_17889_17918[(2)] = inst_17840);

(statearr_17889_17918[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17857 === (10))){
var inst_17811 = (state_17856[(8)]);
var inst_17809 = (state_17856[(11)]);
var inst_17816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17809,inst_17811);
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17856__$1,(13),out,inst_17816);
} else {
if((state_val_17857 === (18))){
var inst_17822 = (state_17856[(7)]);
var inst_17831 = cljs.core.first(inst_17822);
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17856__$1,(20),out,inst_17831);
} else {
if((state_val_17857 === (8))){
var inst_17811 = (state_17856[(8)]);
var inst_17810 = (state_17856[(10)]);
var inst_17813 = (inst_17811 < inst_17810);
var inst_17814 = inst_17813;
var state_17856__$1 = state_17856;
if(cljs.core.truth_(inst_17814)){
var statearr_17890_17919 = state_17856__$1;
(statearr_17890_17919[(1)] = (10));

} else {
var statearr_17891_17920 = state_17856__$1;
(statearr_17891_17920[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16104__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16104__auto____0 = (function (){
var statearr_17892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17892[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16104__auto__);

(statearr_17892[(1)] = (1));

return statearr_17892;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16104__auto____1 = (function (state_17856){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17856);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17893){var ex__16107__auto__ = e17893;
var statearr_17894_17921 = state_17856;
(statearr_17894_17921[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17856[(4)]))){
var statearr_17895_17922 = state_17856;
(statearr_17895_17922[(1)] = cljs.core.first((state_17856[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17923 = state_17856;
state_17856 = G__17923;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16104__auto__ = function(state_17856){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16104__auto____1.call(this,state_17856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16104__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16104__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17896 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17896[(6)] = c__16178__auto__);

return statearr_17896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));

return c__16178__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17925 = arguments.length;
switch (G__17925) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17928 = arguments.length;
switch (G__17928) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17931 = arguments.length;
switch (G__17931) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16178__auto___17979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_17955){
var state_val_17956 = (state_17955[(1)]);
if((state_val_17956 === (7))){
var inst_17950 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
var statearr_17957_17980 = state_17955__$1;
(statearr_17957_17980[(2)] = inst_17950);

(statearr_17957_17980[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (1))){
var inst_17932 = null;
var state_17955__$1 = (function (){var statearr_17958 = state_17955;
(statearr_17958[(7)] = inst_17932);

return statearr_17958;
})();
var statearr_17959_17981 = state_17955__$1;
(statearr_17959_17981[(2)] = null);

(statearr_17959_17981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (4))){
var inst_17935 = (state_17955[(8)]);
var inst_17935__$1 = (state_17955[(2)]);
var inst_17936 = (inst_17935__$1 == null);
var inst_17937 = cljs.core.not(inst_17936);
var state_17955__$1 = (function (){var statearr_17960 = state_17955;
(statearr_17960[(8)] = inst_17935__$1);

return statearr_17960;
})();
if(inst_17937){
var statearr_17961_17982 = state_17955__$1;
(statearr_17961_17982[(1)] = (5));

} else {
var statearr_17962_17983 = state_17955__$1;
(statearr_17962_17983[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (6))){
var state_17955__$1 = state_17955;
var statearr_17963_17984 = state_17955__$1;
(statearr_17963_17984[(2)] = null);

(statearr_17963_17984[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (3))){
var inst_17952 = (state_17955[(2)]);
var inst_17953 = cljs.core.async.close_BANG_(out);
var state_17955__$1 = (function (){var statearr_17964 = state_17955;
(statearr_17964[(9)] = inst_17952);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17955__$1,inst_17953);
} else {
if((state_val_17956 === (2))){
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17955__$1,(4),ch);
} else {
if((state_val_17956 === (11))){
var inst_17935 = (state_17955[(8)]);
var inst_17944 = (state_17955[(2)]);
var inst_17932 = inst_17935;
var state_17955__$1 = (function (){var statearr_17965 = state_17955;
(statearr_17965[(7)] = inst_17932);

(statearr_17965[(10)] = inst_17944);

return statearr_17965;
})();
var statearr_17966_17985 = state_17955__$1;
(statearr_17966_17985[(2)] = null);

(statearr_17966_17985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (9))){
var inst_17935 = (state_17955[(8)]);
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17955__$1,(11),out,inst_17935);
} else {
if((state_val_17956 === (5))){
var inst_17932 = (state_17955[(7)]);
var inst_17935 = (state_17955[(8)]);
var inst_17939 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17935,inst_17932);
var state_17955__$1 = state_17955;
if(inst_17939){
var statearr_17968_17986 = state_17955__$1;
(statearr_17968_17986[(1)] = (8));

} else {
var statearr_17969_17987 = state_17955__$1;
(statearr_17969_17987[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (10))){
var inst_17947 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
var statearr_17970_17988 = state_17955__$1;
(statearr_17970_17988[(2)] = inst_17947);

(statearr_17970_17988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (8))){
var inst_17932 = (state_17955[(7)]);
var tmp17967 = inst_17932;
var inst_17932__$1 = tmp17967;
var state_17955__$1 = (function (){var statearr_17971 = state_17955;
(statearr_17971[(7)] = inst_17932__$1);

return statearr_17971;
})();
var statearr_17972_17989 = state_17955__$1;
(statearr_17972_17989[(2)] = null);

(statearr_17972_17989[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_17973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17973[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_17973[(1)] = (1));

return statearr_17973;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_17955){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_17955);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e17974){var ex__16107__auto__ = e17974;
var statearr_17975_17990 = state_17955;
(statearr_17975_17990[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_17955[(4)]))){
var statearr_17976_17991 = state_17955;
(statearr_17976_17991[(1)] = cljs.core.first((state_17955[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__17992 = state_17955;
state_17955 = G__17992;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_17955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_17955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_17977 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_17977[(6)] = c__16178__auto___17979);

return statearr_17977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17994 = arguments.length;
switch (G__17994) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16178__auto___18061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_18032){
var state_val_18033 = (state_18032[(1)]);
if((state_val_18033 === (7))){
var inst_18028 = (state_18032[(2)]);
var state_18032__$1 = state_18032;
var statearr_18034_18062 = state_18032__$1;
(statearr_18034_18062[(2)] = inst_18028);

(statearr_18034_18062[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (1))){
var inst_17995 = (new Array(n));
var inst_17996 = inst_17995;
var inst_17997 = (0);
var state_18032__$1 = (function (){var statearr_18035 = state_18032;
(statearr_18035[(7)] = inst_17997);

(statearr_18035[(8)] = inst_17996);

return statearr_18035;
})();
var statearr_18036_18063 = state_18032__$1;
(statearr_18036_18063[(2)] = null);

(statearr_18036_18063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (4))){
var inst_18000 = (state_18032[(9)]);
var inst_18000__$1 = (state_18032[(2)]);
var inst_18001 = (inst_18000__$1 == null);
var inst_18002 = cljs.core.not(inst_18001);
var state_18032__$1 = (function (){var statearr_18037 = state_18032;
(statearr_18037[(9)] = inst_18000__$1);

return statearr_18037;
})();
if(inst_18002){
var statearr_18038_18064 = state_18032__$1;
(statearr_18038_18064[(1)] = (5));

} else {
var statearr_18039_18065 = state_18032__$1;
(statearr_18039_18065[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (15))){
var inst_18022 = (state_18032[(2)]);
var state_18032__$1 = state_18032;
var statearr_18040_18066 = state_18032__$1;
(statearr_18040_18066[(2)] = inst_18022);

(statearr_18040_18066[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (13))){
var state_18032__$1 = state_18032;
var statearr_18041_18067 = state_18032__$1;
(statearr_18041_18067[(2)] = null);

(statearr_18041_18067[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (6))){
var inst_17997 = (state_18032[(7)]);
var inst_18018 = (inst_17997 > (0));
var state_18032__$1 = state_18032;
if(cljs.core.truth_(inst_18018)){
var statearr_18042_18068 = state_18032__$1;
(statearr_18042_18068[(1)] = (12));

} else {
var statearr_18043_18069 = state_18032__$1;
(statearr_18043_18069[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (3))){
var inst_18030 = (state_18032[(2)]);
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18032__$1,inst_18030);
} else {
if((state_val_18033 === (12))){
var inst_17996 = (state_18032[(8)]);
var inst_18020 = cljs.core.vec(inst_17996);
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18032__$1,(15),out,inst_18020);
} else {
if((state_val_18033 === (2))){
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18032__$1,(4),ch);
} else {
if((state_val_18033 === (11))){
var inst_18012 = (state_18032[(2)]);
var inst_18013 = (new Array(n));
var inst_17996 = inst_18013;
var inst_17997 = (0);
var state_18032__$1 = (function (){var statearr_18044 = state_18032;
(statearr_18044[(7)] = inst_17997);

(statearr_18044[(10)] = inst_18012);

(statearr_18044[(8)] = inst_17996);

return statearr_18044;
})();
var statearr_18045_18070 = state_18032__$1;
(statearr_18045_18070[(2)] = null);

(statearr_18045_18070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (9))){
var inst_17996 = (state_18032[(8)]);
var inst_18010 = cljs.core.vec(inst_17996);
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18032__$1,(11),out,inst_18010);
} else {
if((state_val_18033 === (5))){
var inst_18005 = (state_18032[(11)]);
var inst_17997 = (state_18032[(7)]);
var inst_17996 = (state_18032[(8)]);
var inst_18000 = (state_18032[(9)]);
var inst_18004 = (inst_17996[inst_17997] = inst_18000);
var inst_18005__$1 = (inst_17997 + (1));
var inst_18006 = (inst_18005__$1 < n);
var state_18032__$1 = (function (){var statearr_18046 = state_18032;
(statearr_18046[(11)] = inst_18005__$1);

(statearr_18046[(12)] = inst_18004);

return statearr_18046;
})();
if(cljs.core.truth_(inst_18006)){
var statearr_18047_18071 = state_18032__$1;
(statearr_18047_18071[(1)] = (8));

} else {
var statearr_18048_18072 = state_18032__$1;
(statearr_18048_18072[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (14))){
var inst_18025 = (state_18032[(2)]);
var inst_18026 = cljs.core.async.close_BANG_(out);
var state_18032__$1 = (function (){var statearr_18050 = state_18032;
(statearr_18050[(13)] = inst_18025);

return statearr_18050;
})();
var statearr_18051_18073 = state_18032__$1;
(statearr_18051_18073[(2)] = inst_18026);

(statearr_18051_18073[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (10))){
var inst_18016 = (state_18032[(2)]);
var state_18032__$1 = state_18032;
var statearr_18052_18074 = state_18032__$1;
(statearr_18052_18074[(2)] = inst_18016);

(statearr_18052_18074[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (8))){
var inst_18005 = (state_18032[(11)]);
var inst_17996 = (state_18032[(8)]);
var tmp18049 = inst_17996;
var inst_17996__$1 = tmp18049;
var inst_17997 = inst_18005;
var state_18032__$1 = (function (){var statearr_18053 = state_18032;
(statearr_18053[(7)] = inst_17997);

(statearr_18053[(8)] = inst_17996__$1);

return statearr_18053;
})();
var statearr_18054_18075 = state_18032__$1;
(statearr_18054_18075[(2)] = null);

(statearr_18054_18075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_18055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18055[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_18055[(1)] = (1));

return statearr_18055;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_18032){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_18032);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e18056){var ex__16107__auto__ = e18056;
var statearr_18057_18076 = state_18032;
(statearr_18057_18076[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_18032[(4)]))){
var statearr_18058_18077 = state_18032;
(statearr_18058_18077[(1)] = cljs.core.first((state_18032[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__18078 = state_18032;
state_18032 = G__18078;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_18032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_18032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_18059 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_18059[(6)] = c__16178__auto___18061);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18080 = arguments.length;
switch (G__18080) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16178__auto___18151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16179__auto__ = (function (){var switch__16103__auto__ = (function (state_18122){
var state_val_18123 = (state_18122[(1)]);
if((state_val_18123 === (7))){
var inst_18118 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18124_18152 = state_18122__$1;
(statearr_18124_18152[(2)] = inst_18118);

(statearr_18124_18152[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (1))){
var inst_18081 = [];
var inst_18082 = inst_18081;
var inst_18083 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18122__$1 = (function (){var statearr_18125 = state_18122;
(statearr_18125[(7)] = inst_18083);

(statearr_18125[(8)] = inst_18082);

return statearr_18125;
})();
var statearr_18126_18153 = state_18122__$1;
(statearr_18126_18153[(2)] = null);

(statearr_18126_18153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (4))){
var inst_18086 = (state_18122[(9)]);
var inst_18086__$1 = (state_18122[(2)]);
var inst_18087 = (inst_18086__$1 == null);
var inst_18088 = cljs.core.not(inst_18087);
var state_18122__$1 = (function (){var statearr_18127 = state_18122;
(statearr_18127[(9)] = inst_18086__$1);

return statearr_18127;
})();
if(inst_18088){
var statearr_18128_18154 = state_18122__$1;
(statearr_18128_18154[(1)] = (5));

} else {
var statearr_18129_18155 = state_18122__$1;
(statearr_18129_18155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (15))){
var inst_18112 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18130_18156 = state_18122__$1;
(statearr_18130_18156[(2)] = inst_18112);

(statearr_18130_18156[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (13))){
var state_18122__$1 = state_18122;
var statearr_18131_18157 = state_18122__$1;
(statearr_18131_18157[(2)] = null);

(statearr_18131_18157[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (6))){
var inst_18082 = (state_18122[(8)]);
var inst_18107 = inst_18082.length;
var inst_18108 = (inst_18107 > (0));
var state_18122__$1 = state_18122;
if(cljs.core.truth_(inst_18108)){
var statearr_18132_18158 = state_18122__$1;
(statearr_18132_18158[(1)] = (12));

} else {
var statearr_18133_18159 = state_18122__$1;
(statearr_18133_18159[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (3))){
var inst_18120 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18122__$1,inst_18120);
} else {
if((state_val_18123 === (12))){
var inst_18082 = (state_18122[(8)]);
var inst_18110 = cljs.core.vec(inst_18082);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18122__$1,(15),out,inst_18110);
} else {
if((state_val_18123 === (2))){
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18122__$1,(4),ch);
} else {
if((state_val_18123 === (11))){
var inst_18090 = (state_18122[(10)]);
var inst_18086 = (state_18122[(9)]);
var inst_18100 = (state_18122[(2)]);
var inst_18101 = [];
var inst_18102 = inst_18101.push(inst_18086);
var inst_18082 = inst_18101;
var inst_18083 = inst_18090;
var state_18122__$1 = (function (){var statearr_18134 = state_18122;
(statearr_18134[(7)] = inst_18083);

(statearr_18134[(8)] = inst_18082);

(statearr_18134[(11)] = inst_18102);

(statearr_18134[(12)] = inst_18100);

return statearr_18134;
})();
var statearr_18135_18160 = state_18122__$1;
(statearr_18135_18160[(2)] = null);

(statearr_18135_18160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (9))){
var inst_18082 = (state_18122[(8)]);
var inst_18098 = cljs.core.vec(inst_18082);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18122__$1,(11),out,inst_18098);
} else {
if((state_val_18123 === (5))){
var inst_18090 = (state_18122[(10)]);
var inst_18083 = (state_18122[(7)]);
var inst_18086 = (state_18122[(9)]);
var inst_18090__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18086) : f.call(null,inst_18086));
var inst_18091 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18090__$1,inst_18083);
var inst_18092 = cljs.core.keyword_identical_QMARK_(inst_18083,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18093 = ((inst_18091) || (inst_18092));
var state_18122__$1 = (function (){var statearr_18136 = state_18122;
(statearr_18136[(10)] = inst_18090__$1);

return statearr_18136;
})();
if(cljs.core.truth_(inst_18093)){
var statearr_18137_18161 = state_18122__$1;
(statearr_18137_18161[(1)] = (8));

} else {
var statearr_18138_18162 = state_18122__$1;
(statearr_18138_18162[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (14))){
var inst_18115 = (state_18122[(2)]);
var inst_18116 = cljs.core.async.close_BANG_(out);
var state_18122__$1 = (function (){var statearr_18140 = state_18122;
(statearr_18140[(13)] = inst_18115);

return statearr_18140;
})();
var statearr_18141_18163 = state_18122__$1;
(statearr_18141_18163[(2)] = inst_18116);

(statearr_18141_18163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (10))){
var inst_18105 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18142_18164 = state_18122__$1;
(statearr_18142_18164[(2)] = inst_18105);

(statearr_18142_18164[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18123 === (8))){
var inst_18090 = (state_18122[(10)]);
var inst_18086 = (state_18122[(9)]);
var inst_18082 = (state_18122[(8)]);
var inst_18095 = inst_18082.push(inst_18086);
var tmp18139 = inst_18082;
var inst_18082__$1 = tmp18139;
var inst_18083 = inst_18090;
var state_18122__$1 = (function (){var statearr_18143 = state_18122;
(statearr_18143[(7)] = inst_18083);

(statearr_18143[(8)] = inst_18082__$1);

(statearr_18143[(14)] = inst_18095);

return statearr_18143;
})();
var statearr_18144_18165 = state_18122__$1;
(statearr_18144_18165[(2)] = null);

(statearr_18144_18165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16104__auto__ = null;
var cljs$core$async$state_machine__16104__auto____0 = (function (){
var statearr_18145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18145[(0)] = cljs$core$async$state_machine__16104__auto__);

(statearr_18145[(1)] = (1));

return statearr_18145;
});
var cljs$core$async$state_machine__16104__auto____1 = (function (state_18122){
while(true){
var ret_value__16105__auto__ = (function (){try{while(true){
var result__16106__auto__ = switch__16103__auto__(state_18122);
if(cljs.core.keyword_identical_QMARK_(result__16106__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16106__auto__;
}
break;
}
}catch (e18146){var ex__16107__auto__ = e18146;
var statearr_18147_18166 = state_18122;
(statearr_18147_18166[(2)] = ex__16107__auto__);


if(cljs.core.seq((state_18122[(4)]))){
var statearr_18148_18167 = state_18122;
(statearr_18148_18167[(1)] = cljs.core.first((state_18122[(4)])));

} else {
throw ex__16107__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16105__auto__,cljs.core.cst$kw$recur)){
var G__18168 = state_18122;
state_18122 = G__18168;
continue;
} else {
return ret_value__16105__auto__;
}
break;
}
});
cljs$core$async$state_machine__16104__auto__ = function(state_18122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16104__auto____1.call(this,state_18122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16104__auto____0;
cljs$core$async$state_machine__16104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16104__auto____1;
return cljs$core$async$state_machine__16104__auto__;
})()
})();
var state__16180__auto__ = (function (){var statearr_18149 = (f__16179__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16179__auto__.cljs$core$IFn$_invoke$arity$0() : f__16179__auto__.call(null));
(statearr_18149[(6)] = c__16178__auto___18151);

return statearr_18149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16180__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

