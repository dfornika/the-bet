(ns the-bet.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]            
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.pprint :as pprint]))

(defonce app-db (r/atom {}))

(defn header []
  [:header
   [:h1 "The Bet"]])

(defn table []
  [:table {:class "table"}
   [:tbody
    [:tr
     [:th "Year"]
     [:th "Champion"]
     [:th "Prize"]]
    [:tr
     [:td "1996"]
     [:td "Detroit Red Wings"]
     [:td "$2.00"]]
    [:tr
     [:td "1998"]
     [:td "Detroit Red Wings"]
     [:td "$4.00"]]
    [:tr
     [:td "1999"]
     [:td "Dallas Stars"]
     [:td "$10.00"]]]])

(defn root []
  [:div
   [header]
   [table]])

(rdom/render [root] (js/document.getElementById "app"))

(comment
  (def nhl-api-base "https://statsapi.web.nhl.com/api/v1/")
  (def github-api-base "https://api.github.com")
  
  (go (let [response (<! (http/get (str nhl-api-base "teams/1") {:with-credentials? false}))]
        (prn (get-in response [:body :teams 0 :name]))))

  (go (let [response (<! (http/get (str nhl-api-base "game/1999030411/boxscore/") {:with-credentials? false}))]
        (do
          (pprint/pprint (str "Home team: " (get-in response [:body :teams :home :team :name])))
          (pprint/pprint (str "Away team: " (get-in response [:body :teams :away :team :name]))))))

  (go (<! (http/get (str nhl-api-base "/teams/1"))))
  )
