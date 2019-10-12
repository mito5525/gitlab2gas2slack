function Properties() {
  const properties = PropertiesService.getScriptProperties();

  this.authenticationToken = properties.getProperty('SLACK_AUTHENTICATION_TOKEN');
  this.sheetId = properties.getProperty('SPREAD_SHEET_ID');
}