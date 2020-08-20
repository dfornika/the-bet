(ns the-bet.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljsjs.semantic-ui-react :as ui]))

(js/console.log "Hello, world!")

(defonce app-db (r/atom {}))

(def nhl-api-base "https://statsapi.web.nhl.com/api/v1/")

(defn header []
  [:header
   [:> ui/Grid {:columns 1}
    [:> ui/Grid.Column
     [:h1 "The Bet"]]]])

(defn root []
  [:div
   [header]])

(defn ^:export main []
  (rdom/render [root]
               (js/document.getElementById "app")))

