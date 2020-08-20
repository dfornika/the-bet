(ns the-bet.minimal
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljsjs.semantic-ui-react :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(js/console.log "Hello, world!")

