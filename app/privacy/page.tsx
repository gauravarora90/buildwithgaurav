import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'
import { CHANNEL_APP_NAME, CHANNEL_APP_PATH, CHANNEL_APP_SCOPES } from '@/data/channelAutomation'

export const metadata = genPageMetadata({
  title: `Privacy Policy for ${CHANNEL_APP_NAME}`,
  description: `How ${CHANNEL_APP_NAME} collects, uses, stores, shares and deletes Google user data, including data from YouTube API Services.`,
})

const LAST_UPDATED = '27 October 2026'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950">{title}</h2>
      {children}
    </section>
  )
}

const linkClass = 'text-neutral-950 underline underline-offset-2 hover:text-neutral-600'
const strong = 'text-neutral-950'

export default function Privacy() {
  const email = siteMetadata.email
  const app = CHANNEL_APP_NAME

  return (
    <div className="pt-10 pb-20 sm:pt-14">
      <div className="pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Privacy Policy for {app}
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Last updated: {LAST_UPDATED} · Operated by Gaurav Arora · Contact:{' '}
          <Link href={`mailto:${email}`} className={linkClass}>
            {email}
          </Link>
        </p>
      </div>

      <div className="max-w-3xl space-y-10 text-base leading-relaxed text-neutral-700">
        <Section title="1. About this policy">
          <p>
            This Privacy Policy explains how{' '}
            <Link href={CHANNEL_APP_PATH} className={linkClass}>
              {app}
            </Link>{' '}
            (&quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, stores, shares,
            protects and deletes information, including Google user data that the app receives
            through Google sign-in, the YouTube Data API and the YouTube Analytics API.
          </p>
          <p>
            {app} is an application that automates the management of a YouTube channel. It uploads
            videos, updates video details (titles, descriptions, tags, thumbnails), schedules
            publishing, organises playlists, helps manage comments on the channel&apos;s own videos,
            and shows performance reports for those videos. The app is operated by Gaurav Arora and
            is used to manage his own YouTube channel.
          </p>
        </Section>

        <Section title="2. YouTube API Services">
          <p>
            <strong className={strong}>{app} uses YouTube API Services.</strong> By using the app,
            you agree to be bound by the{' '}
            <Link href="https://www.youtube.com/t/terms" className={linkClass}>
              YouTube Terms of Service
            </Link>
            . Google&apos;s collection and use of your data is described in the{' '}
            <Link href="http://www.google.com/policies/privacy" className={linkClass}>
              Google Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="3. Google user data the app accesses and collects">
          <p>
            When you sign in with Google and grant permission, {app} accesses the following Google
            user data. The app only requests the permissions (OAuth scopes) listed here:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong className={strong}>Basic account information</strong> (openid, email,
              profile): your Google account name, email address and profile picture.
            </li>
            {CHANNEL_APP_SCOPES.map((s) => (
              <li key={s.scope}>
                <strong className={strong}>{s.name}</strong>{' '}
                <span className="font-mono text-xs break-all text-neutral-500">({s.scope})</span>:{' '}
                {s.use}
              </li>
            ))}
          </ul>
          <p>Specifically, the app collects and processes:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Your Google account name and email address.</li>
            <li>Your YouTube channel ID, channel name and channel settings.</li>
            <li>
              Details of videos on your channel: video IDs, titles, descriptions, tags, thumbnails,
              privacy status, publish schedule and playlist membership.
            </li>
            <li>Video files and thumbnails that you choose to upload through the app.</li>
            <li>Comments on your channel&apos;s videos, and replies you post through the app.</li>
            <li>
              YouTube Analytics metrics for your channel and videos, such as views, watch time,
              subscribers gained and audience retention.
            </li>
            <li>OAuth access tokens and refresh tokens issued by Google.</li>
          </ul>
          <p>
            The app does not collect your Google password, payment information, contacts, location
            or any data from Google services other than those listed above.
          </p>
        </Section>

        <Section title="4. How the app uses Google user data">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              To sign you in and confirm which Google account and YouTube channel is connected.
            </li>
            <li>To upload videos and thumbnails to your channel when you ask it to.</li>
            <li>
              To update titles, descriptions, tags, thumbnails, privacy status and publish times of
              your videos.
            </li>
            <li>To add videos to, or remove them from, your playlists.</li>
            <li>To show you comments on your videos and post replies that you approve.</li>
            <li>To show you analytics reports on how your videos perform.</li>
            <li>To keep the app secure and to fix errors.</li>
          </ul>
          <p>
            Google user data is used only to provide these user-facing features. It is not used for
            advertising, it is not sold, it is not used to build profiles of users for any other
            purpose, and it is not used to develop, improve or train generalised AI or
            machine-learning models.
          </p>
        </Section>

        <Section title="5. Limited Use disclosure">
          <p>
            {app}&apos;s use and transfer of information received from Google APIs to any other app
            will adhere to the{' '}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className={linkClass}
            >
              Google API Services User Data Policy
            </Link>
            , including the Limited Use requirements.
          </p>
          <p>
            No human reads your Google user data unless you give explicit permission (for example,
            when you ask for support), it is needed for security purposes such as investigating
            abuse, it is required to comply with applicable law, or the data has been aggregated and
            anonymised for internal operations.
          </p>
        </Section>

        <Section title="6. How the data is stored and protected">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Data is stored on a private, access-controlled server operated by Gaurav Arora. Only
              the operator has access to it.
            </li>
            <li>
              All data sent between the app and Google is encrypted in transit using HTTPS (TLS).
            </li>
            <li>
              OAuth tokens are stored securely and used only to call the YouTube Data API and
              YouTube Analytics API on your behalf.
            </li>
            <li>
              Video files are kept only until the upload to YouTube is complete, and are then
              deleted from the app&apos;s server.
            </li>
          </ul>
        </Section>

        <Section title="7. How the data is shared">
          <p>
            {app} does not sell, rent or share Google user data with third parties. The data is only
            sent:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              To Google (YouTube Data API and YouTube Analytics API) to perform the actions you
              request.
            </li>
            <li>When required by law, such as to comply with a valid legal request.</li>
          </ul>
        </Section>

        <Section title="8. Cookies and device storage">
          <p>
            {app} may store cookies or similar data (such as a session token in local storage) on
            your device or browser, only to keep you signed in. No advertising or third-party
            tracking cookies are used. You can clear them in your browser settings at any time.
          </p>
        </Section>

        <Section title="9. Data retention and deletion">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Data is kept only as long as needed to provide the app&apos;s features. YouTube data
              stored by the app is refreshed or deleted at least every 30 days.
            </li>
            <li>
              You can ask for all of your data to be deleted at any time by emailing{' '}
              <Link href={`mailto:${email}`} className={linkClass}>
                {email}
              </Link>
              . It will be deleted within 7 days of your request.
            </li>
            <li>
              If you revoke the app&apos;s access to your Google account, all stored tokens and
              YouTube data for your account are deleted within 7 days.
            </li>
          </ul>
        </Section>

        <Section title="10. How to revoke access">
          <p>
            You can revoke {app}&apos;s access to your Google account and YouTube data at any time
            from the Google security settings page at{' '}
            <Link
              href="https://security.google.com/settings/security/permissions"
              className={linkClass}
            >
              https://security.google.com/settings/security/permissions
            </Link>
            . After access is revoked, the app can no longer read or change anything in your
            account.
          </p>
        </Section>

        <Section title="11. Children's privacy">
          <p>
            {app} is not directed at children under 13 and does not knowingly collect data from
            them. If you believe a child has provided data to the app, contact us and it will be
            deleted.
          </p>
        </Section>

        <Section title="12. Changes to this policy">
          <p>
            If this policy changes, this page will be updated with a new &quot;Last updated&quot;
            date. Material changes to how Google user data is used will be shown in the app and will
            need your consent before they apply.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            For questions about this policy or your data, contact Gaurav Arora at{' '}
            <Link href={`mailto:${email}`} className={linkClass}>
              {email}
            </Link>
            .
          </p>
        </Section>

        <Section title="This website">
          <p>
            The website buildwithgaurav.me can be read without an account. It uses Umami, a
            privacy-focused analytics tool that does not use cookies or collect personal
            information. If you email me, your email address and message are used only to reply to
            you.
          </p>
        </Section>
      </div>
    </div>
  )
}
