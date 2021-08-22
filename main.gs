function sendLINE(){
  var LINE_CHANNEL_ACCESS_TOKEN = 'hzAx64i1LIISVJZVzTPLqziR36ZBNauyk9G0JR0h9nCpsxXxVNi3BlIGJnpi8DgyoL+efm52ztWvWTCNlOcryaMkFtkq34Hhc0xQlIXyD+jzfVP+yOXWcS161qbRb6s9V6wohcaAeFqPDGZmzE0PWAdB04t89/1O/w1cDnyilFU=';//LINE Botのアクセストークン
  var url = 'https://api.line.me/v2/bot/message/push';
// テスト用GID
  var toID = 'C87a48a6e7854e4b8fe7a47cbbd4db6a0';
  var body = '鍵返しましたか？';

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN,
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': toID,
      'messages':[{
        'type': 'text',
        'text': body ,
      }]
     })
   })
}
var key　= 'open';
// メッセージの内容をmessageにいれる

if(message.match(/(閉め|しめ|締め|返し|かえし)ました(。|!|！)?$/))
  key = 'close';

if(key == 'open')
  sendLINE();


function clearKey(){
  key = 'open';
}

function sendLineTrigger(){
  const time = new Date();
  time.setHours(19);
  time.setMinutes(10);
  ScriptApp.newTrigger('sendLINE')
.timeBased()
.at(time)
.create();
}
  
  
// 毎日同じ時刻にkeyの状態リセット
function clearKeyTrigger(){
  const time = new Date();
  ScriptApp.newTrigger('clearKey')
  .create();
}
