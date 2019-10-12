# GitLab2GAS2Slack

## 仕組み

GitLab WebHook -> **Google Apps Script (Web App)** -> Slack

## 準備

* 設定など管理用スプレッドシート作成
  + MEMBERS
    - GitLabとSlackのユーザーマッピング
    - A列:gitlab_user_id, B列:slack_channel
    - ヘッダーあり, 2行目から設定を追記すること
  + EVENT_HISTORY

* スクリプトプロパティ設定
  + SLACK_AUTHENTICATION_TOKEN
  + SPREAD_SHEET_ID

* [underscoreGC](https://sites.google.com/site/scriptsexamples/custom-methods/underscoregs) 導入
