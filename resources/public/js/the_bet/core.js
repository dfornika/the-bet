// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('the_bet.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
the_bet.core.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
console.log("Hello, world!");
if((typeof the_bet !== 'undefined') && (typeof the_bet.core !== 'undefined') && (typeof the_bet.core.app_db !== 'undefined')){
} else {
the_bet.core.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
the_bet.core.header = (function the_bet$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,the_bet.core.global$module$cljsjs$semantic_ui_react.Grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$columns,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,the_bet.core.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"The Bet"], null)], null)], null)], null);
});
the_bet.core.root = (function the_bet$core$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_bet.core.header], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_bet.core.root], null),document.getElementById("app"));
