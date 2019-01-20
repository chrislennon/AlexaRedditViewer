## Usage

This skill is only enabled for Alexa devices which have a screen output and are enabled for APL (Alexa Presentation Language)

You require a Reddit account to use this skill. When you enable account linking required by this skill you will be forwarded towards Reddit's oAuth flow. This account linking only asks for permissions related to the actions of this skill, these permissions are:

Read, read access to the users subreddits. 
Save, the ability to save bookmarks.
Vote, the ability to vote on posts.

At any time you can revoke is access by visiting https://www.reddit.com/prefs/apps

You can swipe though the posts by swiping left and right.

You can Vote/Bookmark using the on-screen buttons.

## Limitations/bugs 
1. Clicks on buttons vote/bookmark trigger accidental page move [expereinced in simulator] (bug raised by @camiwilliams)
2. Vote/Bookmark by voice doesn't (yet) work, requires 'GetPage' functionality (believed to be an active feature request)
3. After vote/bookmark, visibility of the action (change of icon colour) requires refresh of the content
  - Unknown if this is a limitation, one potential work-around it to resend the entire document
  - For an ideal user experience GetPage functionality would be required to re-page to the relevent screen.
4. Reddit produces a large variety of content, whilst these look similar in output to the user, the underlying json from the API can vary - as such some content may not render correctly, in particular gifs & videos (this is in active development)
5. Alexa account linking did not work out of the box with Reddit's oAuth (workaround in place see [serverless.yml](https://github.com/chrislennon/AlexaRedditViewer/blob/master/serverless.yml#L30)) - raised as a bug under #5710426711

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

## Known issues
- Bug with the display of Title on TitleOnly & TitleBody posts
- Scrollview in TitleBody posts may not work correctly (simulator sometimes works)
- Unidentified text in place of Next/Previous results in 'feature not available by voice'

## Before Submission
- Usage video & screenshots
- Add other English stores (UK/IN/AU)
  - Update app strings
  - Update intents/utterances
  - Reimport ask cli intents/utterances

## Further development
- Add non English localisation strings
- Find a better way to show hints (currently random on document load)
- Intent for handling more posts (next 10)
- Show score (code written, design 'choices' needed)
- Send post to alexa app/card
- Read title/body
- Toggle button/data-binding to switch un/voted styles
- Add show/hide title/text intents and buttons
- Allow users to open subreddits
- Show comments within posts
- Better handling of the multitudes of media formats reddit api returns
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