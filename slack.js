function postToSlack(payload) {
  const properties = new Properties();
  const url = 'https://slack.com/api/chat.postMessage';

  const params = {
    text: 'post',
    contentType: 'application/json',
    headers: { 'Authorization': 'Bearer ' + properties.authenticationToken },
    payload: JSON.stringify(payload)
  };
  UrlFetchApp.fetch(url, params);
}