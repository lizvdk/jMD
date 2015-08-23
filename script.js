var $commentField = $('#comment');
var mdComment =  $commentField.val();
var jiraComment = mdComment.replace('#', 'h1.');

$commentField.val(jiraComment);
