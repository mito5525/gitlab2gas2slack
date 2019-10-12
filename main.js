/**

準備

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

**/

function doPost(e) {
  const data = e.postData.contents
  recordEventHistory(data);

  const obj = JSON.parse(data);

  switch (obj.event_type) {
  case "note":
    note(obj);
  }
}

function recordEventHistory(data) {
  const properties = new Properties();
  const spreadSheet = SpreadsheetApp.openById(properties.sheetId);
  const sheet = spreadSheet.getSheetByName('EVENT_HISTORIES');

  sheet.appendRow([data]);
}
