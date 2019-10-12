function note(obj) {
  const reviewee = findByGitLabUserID(obj.merge_request.author_id);
  const reviewer = findByGitLabUserID(obj.object_attributes.author_id);

  // レビューイが通知対象(= MEMBERSに含まれる) && (レビュアーが未知 || 同一人物ではない) の場合にレビューイに対してSlack通知
  if(reviewee && ((reviewer === void(0)) || !isSameMember(reviewee, reviewer))) {
    postToSlack(buildNotification(reviewee, obj));
  }
}

function buildNotification(reviewee, obj) {
  return {
   channel: reviewee.slack_channel,
   attachments: [
      {
        color: '#36a64f',
        title: obj.merge_request.title,
        title_link: obj.object_attributes.url,
        text: obj.object_attributes.description,
        footer: obj.user.name,
        footer_icon: obj.user.avatar_url
      }
    ]
  }
}
