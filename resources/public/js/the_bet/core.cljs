(ns the-bet.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljsjs.semantic-ui-react :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(js/console.log "Hello, world!")

(defonce app-db (r/atom {}))

(defn header []
  [:header
   [:> ui/Grid {:columns 1}
    [:> ui/Grid.Column
     [:h1 "The Bet"]]]])

(defn root []
  [:div
   [header]])

(rdom/render [root] (js/document.getElementById "app"))

(comment
  (def nhl-api-base "https://statsapi.web.nhl.com/api/v1/")
  (def github-api-base "https://api.github.com")
  
  (go (let [response (<! (http/get (str nhl-api-base "teams/1") {:with-credentials? false}))]
        (prn (get-in response [:body :teams 0 :name]))))

  (go (<! (http/get (str nhl-api-base "/teams/1"))))
  )
