## Lambda Deploy
```
npm install
npm run deploy
```
serverless will deploy 2 functions
- alexa-reddit - for the alexa skill, temporarily replacing ask cli (_really needs a pull changes command_)
- reddit-oauth - for handling the setup and callback for reddit oauth (remaps a header to assist in difficulties found in setup)
  
## Parameter store
Used in serverless.yml for handling proxy of Reddit oAuth

```
aws ssm put-parameter --name alexaRedditId --type String --value amzn1.ask.skill.your-skill-id
aws ssm put-parameter --name redditAppId --type String --value w_redditappid
aws ssm put-parameter --name redditAppSecret --type String --value app-secret-here
```

## Reddit oAuth links
https://github.com/reddit-archive/reddit/wiki/OAuth2

https://www.reddit.com/prefs/apps

## TODOS
- Toggle button/data-binding to switch un/voted styles
- Reimport ask cli intents/utterances
- Better handling of the multitudes of media formats reddit api returns
- Test with variety of samples from reddit api
  - Long text body (scrolls correctly)
  - Video (reddit)
  - Video (embedded external)
  - Image (reddit)
  - Image (external trusted)
  - Image (external)
  - GIF (reddit)
  - GIF (reddit transcoded/converted)
  - GIF (external trusted)
  - GIF (external)
  - Title only
  - Title and Body
- Nicer handling of launch Intent and utterences 'ask reddit viewer whats new/hot/best on reddit'

### Stretch Ideas
- Send post to alexa app/card
- Read title/body
- Add show/hide title/text intents and buttons
