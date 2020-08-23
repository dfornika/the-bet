(ns the-bet.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]            
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.pprint :as pprint]
            [goog.string :as gstring]))

(def yearly-winner-data [
                         {:year 1997
                          :champion "Detroit Red Wings"
                          :prize 200
                          :winner "Jeff"}
                         {:year 1998
                          :champion "Detroit Red Wings"
                          :prize 400
                          :winner "Jeff"}
                         {:year 1999
                          :champion "Dallas Stars"
                          :prize 1000
                          :winner "Dan"}
                         {:year 2000
                          :champion "New Jersey Devils"
                          :prize 2000
                          :winner "Jeff"}
                         ])

(defonce app-db (r/atom {}))

(defn cents-to-dollar-string [cents]
  (str "$" (str (gstring/format "%.2f" (/ cents 100)))))

(defn header []
  [:header
   [:h1 "The Bet"]])

(defn description []
  [:div
   [:p "Every year I make a bet with a friend over the Stanley Cup playoffs. We started in 1997 and set the stakes at $2. The prize doubled each year until it reached $100."]
   [:h2 "Rules"]
   [:p "At the start of each playoff season, we take turns picking teams. The loser of the previous year chooses first. Whoever has the Stanley Cup Champion team wins $100."]])

(defn table-headers [table-data]
  (distinct (flatten (map keys table-data))))

(defn table-rows [table-data]
  (map (partial map str) (map vals table-data)))

(defn create-body-row [row]
  (vec (concat [:tr] (map #(conj [:td] %) row))))

(defn data-to-table [table-data]
  (let [header-row (vec (concat [:tr] (map #(conj [:th] %) (table-headers table-data))))
        body-rows (vec (map create-body-row (table-rows table-data)))]
    [:table {:class "ui celled table"}
     [:thead header-row]
     (into [:tbody] body-rows)]))


(defn annual-summary []
  (let [table-data (map #(update % :prize cents-to-dollar-string) yearly-winner-data)]
    (data-to-table table-data)))

(defn root []
  [:div
   [header]
   [description]
   [annual-summary]])

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
