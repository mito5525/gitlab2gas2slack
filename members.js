function findByGitLabUserID(id) {
  return underscoreGS._find(members(), function(m) { return id == m.gitlab_user_id });
}

function isSameMember(a, b) {
  return a.gitlab_user_id === b.gitlab_user_id
}

function members() {
  const properties = new Properties();
  const spreadSheet = SpreadsheetApp.openById(properties.sheetId);
  const sheet = spreadSheet.getSheetByName('MEMBERS');
  const lastRow = sheet.getLastRow();
  const values = sheet.getRange('A2:B' + lastRow).getValues();

  return values.map(function(v) {
    return {
      gitlab_user_id: v[0],
      slack_channel: v[1]
    }
  });
}
