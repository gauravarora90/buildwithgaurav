// The app registered in Google Cloud for automating Gaurav's own YouTube channel.
// The name here must match "App name" on the Google OAuth consent screen exactly.
export const CHANNEL_APP_NAME = 'BuildWithGaurav Channel Automation'
export const CHANNEL_APP_PATH = '/channel-automation'

export const CHANNEL_APP_SCOPES = [
  {
    scope: 'https://www.googleapis.com/auth/youtube.upload',
    name: 'Upload YouTube videos',
    use: 'Uploads videos to the connected channel, with the title, description, tags, thumbnail and visibility that the channel owner sets.',
  },
  {
    scope: 'https://www.googleapis.com/auth/youtube',
    name: 'Manage your YouTube account',
    use: 'Updates video details (titles, descriptions, tags, thumbnails, scheduled publish time), and adds or removes videos from the channel’s playlists.',
  },
  {
    scope: 'https://www.googleapis.com/auth/youtube.readonly',
    name: 'View your YouTube account',
    use: 'Reads the channel’s details, list of uploaded videos and playlists, so the app knows what is already published and what to update.',
  },
  {
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
    name: 'See, edit and delete your YouTube videos, ratings and comments',
    use: 'Reads comments on the channel’s own videos and posts or moderates replies on them when the channel owner asks.',
  },
  {
    scope: 'https://www.googleapis.com/auth/yt-analytics.readonly',
    name: 'View YouTube Analytics reports',
    use: 'Reads views, watch time and audience numbers for the channel’s own videos, to show the owner how videos perform.',
  },
]
