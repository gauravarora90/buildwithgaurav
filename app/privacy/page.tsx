import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'
import { CHANNEL_APP_NAME, CHANNEL_APP_PATH, CHANNEL_APP_SCOPES } from '@/data/channelAutomation'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description: `How buildwithgaurav.me and ${CHANNEL_APP_NAME} handle your data, including YouTube data accessed through Google APIs and YouTube API Services.`,
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

export default function Privacy() {
  const email = siteMetadata.email

  return (
    <div className="pt-10 pb-20 sm:pt-14">
      <div className="pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="max-w-3xl space-y-10 text-base leading-relaxed text-neutral-700">
        <Section title="Who this covers">
          <p>
            This policy applies to the website{' '}
            <Link href={siteMetadata.siteUrl} className={linkClass}>
              buildwithgaurav.me
            </Link>{' '}
            and to the apps, tools, extensions and integrations built and published by Gaurav Arora
            (&quot;I&quot;, &quot;me&quot;, &quot;the app&quot;) that link to this page. That
            includes apps that use Google APIs and YouTube API Services.
          </p>
          <p>
            If a particular app has its own privacy notice, that notice adds to this one. Where the
            two differ, the app-specific notice wins for that app.
          </p>
        </Section>

        <Section title={CHANNEL_APP_NAME}>
          <p>
            <Link href={CHANNEL_APP_PATH} className={linkClass}>
              {CHANNEL_APP_NAME}
            </Link>{' '}
            is a private tool I built to automate my own YouTube channel. It uploads videos, keeps
            their titles, descriptions, thumbnails, playlists and publish schedule up to date,
            handles comments on my videos, and reports how the videos perform. It uses YouTube API
            Services. It is not offered to the public. The only account connected to it is my own
            YouTube channel, which I connect through Google sign-in.
          </p>
          <p>
            <strong className="text-neutral-950">Google user data the app accesses.</strong> When
            the channel owner signs in, the app asks Google for the permissions below and uses each
            one only as described:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {CHANNEL_APP_SCOPES.map((s) => (
              <li key={s.scope}>
                <strong className="text-neutral-950">{s.name}</strong>{' '}
                <span className="font-mono text-xs break-all text-neutral-500">({s.scope})</span>:{' '}
                {s.use}
              </li>
            ))}
          </ul>
          <p>
            The app also receives the Google account&apos;s name and email address during sign-in,
            to confirm which account is connected.
          </p>
          <p>
            <strong className="text-neutral-950">How the data is used.</strong> The data is used
            only to run the features above for the channel that connected it. It is not sold, not
            used for advertising, not used to build user profiles, and not used to train AI or
            machine-learning models. No person reads it except me, the channel owner.
          </p>
          <p>
            <strong className="text-neutral-950">Storage.</strong> The app stores the OAuth access
            and refresh tokens, the channel ID, and copies of video details (titles, descriptions,
            tags, schedule) and analytics numbers that it needs to do its job. This data is kept on
            a private server that only I can access, and it travels only over encrypted (HTTPS)
            connections to Google. Stored YouTube data is refreshed or deleted at least every 30
            days.
          </p>
          <p>
            <strong className="text-neutral-950">Sharing.</strong> The data is not shared with any
            third party. The app sends data only to Google, through the YouTube Data API and YouTube
            Analytics API, to carry out the actions above.
          </p>
          <p>
            <strong className="text-neutral-950">Deletion and revoking access.</strong> Access can
            be removed at any time from the{' '}
            <Link
              href="https://security.google.com/settings/security/permissions"
              className={linkClass}
            >
              Google security settings page
            </Link>
            . When access is removed, or on request to{' '}
            <Link href={`mailto:${email}`} className={linkClass}>
              {email}
            </Link>
            , all stored tokens and YouTube data for that account are deleted within 7 days.
          </p>
          <p>
            By using the app you agree to the{' '}
            <Link href="https://www.youtube.com/t/terms" className={linkClass}>
              YouTube Terms of Service
            </Link>
            , and Google&apos;s use of your data is covered by the{' '}
            <Link href="https://policies.google.com/privacy" className={linkClass}>
              Google Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="This website">
          <p>
            You can read buildwithgaurav.me without an account. The site uses Umami, a
            privacy-focused analytics tool that does not use cookies or collect personal
            information. It counts page visits, referring sites, browser type and country so I can
            see what people read.
          </p>
          <p>
            If you email me, I get your email address and whatever you write. I use it only to reply
            to you.
          </p>
        </Section>

        <Section title="Apps that use Google sign-in, Google APIs or YouTube API Services">
          <p>
            Some of my apps let you sign in with your Google account and give the app access to
            parts of your Google or YouTube account. The app always asks for this on Google&apos;s
            own consent screen. It only asks for the permissions (scopes) it needs for the features
            you use.
          </p>
          <p>
            <strong className="text-neutral-950">These apps use YouTube API Services.</strong> By
            using them you agree to be bound by the{' '}
            <Link href="https://www.youtube.com/t/terms" className={linkClass}>
              YouTube Terms of Service
            </Link>
            . Google&apos;s handling of your data is covered by the{' '}
            <Link href="https://policies.google.com/privacy" className={linkClass}>
              Google Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="What information the apps access and collect">
          <p>Depending on the app and the permissions you grant, this may include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-neutral-950">Basic Google profile</strong>: your name, email
              address and profile picture, used to sign you in and show who is signed in.
            </li>
            <li>
              <strong className="text-neutral-950">YouTube account data</strong>: for example your
              channel details, playlists, subscriptions, uploaded videos and their statistics, liked
              videos or comments. This is only data that the permissions you granted allow, and only
              what the feature you are using needs.
            </li>
            <li>
              <strong className="text-neutral-950">Public YouTube data</strong>: video, channel and
              playlist details that anyone can see on YouTube, such as titles, thumbnails and view
              counts.
            </li>
            <li>
              <strong className="text-neutral-950">Technical data</strong>: basic logs such as time
              of request and error messages. These are used to keep the app running and to fix bugs.
            </li>
          </ul>
          <p>
            The apps do not collect your Google password. Sign-in happens on Google&apos;s own
            pages.
          </p>
        </Section>

        <Section title="How the information is used">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              To provide the features you asked for, such as showing, organising or analysing your
              YouTube content.
            </li>
            <li>To keep you signed in and remember your settings.</li>
            <li>To keep the app secure, prevent abuse and fix problems.</li>
          </ul>
          <p>
            Your data is not sold. It is not used for advertising. It is not used to train
            general-purpose AI or machine-learning models.
          </p>
        </Section>

        <Section title="Google API Services User Data Policy">
          <p>
            Information the apps receive from Google APIs is used and transferred in line with the{' '}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className={linkClass}
            >
              Google API Services User Data Policy
            </Link>
            , including its Limited Use requirements. Google user data is only used to provide or
            improve features you can see in the app. People only read it when you ask for help, when
            security or the law requires it, or when the data has been aggregated and anonymised for
            internal operations.
          </p>
        </Section>

        <Section title="Sharing">
          <p>Your information is not shared with third parties, except in these cases:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Service providers that host or run the app, such as cloud hosting and databases. They
              act on my behalf and only get what they need to provide that service.
            </li>
            <li>Google and YouTube, when the app calls their APIs to do what you asked.</li>
            <li>
              When required by law, or to protect the rights, safety or security of users or the
              app.
            </li>
            <li>With your explicit consent.</li>
          </ul>
        </Section>

        <Section title="Cookies and similar technologies">
          <p>
            The apps may store cookies or similar data (such as local storage or session tokens) on
            your device or browser. This keeps you signed in and remembers your preferences. No
            third-party advertising cookies are placed. You can clear this data in your browser
            settings at any time. If you do, you will be signed out.
          </p>
        </Section>

        <Section title="Storage, retention and deletion">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Data is stored on secured servers and sent over encrypted connections (HTTPS). Access
              tokens are kept only as long as needed to keep the app working for you.
            </li>
            <li>
              YouTube API data that is stored is refreshed or deleted within 30 days, as
              YouTube&apos;s developer policies require. Data is not kept longer than the feature
              needs.
            </li>
            <li>
              To have your data deleted, email{' '}
              <Link href={`mailto:${email}`} className={linkClass}>
                {email}
              </Link>
              . Your data will be deleted within 7 days of your request.
            </li>
            <li>
              If you revoke the app&apos;s access to your Google account, any YouTube or Google data
              stored for you is deleted within 7 days.
            </li>
          </ul>
        </Section>

        <Section title="Revoking access">
          <p>
            You can remove an app&apos;s access to your Google and YouTube data at any time from the{' '}
            <Link
              href="https://security.google.com/settings/security/permissions"
              className={linkClass}
            >
              Google security settings page
            </Link>
            . Once you remove access, the app can no longer read or change anything in your account.
          </p>
        </Section>

        <Section title="Children">
          <p>
            These apps are not made for children under 13, and their data is not knowingly
            collected. If you think a child has given an app their information, email me and it will
            be deleted.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If this policy changes, this page will be updated along with the &quot;Last
            updated&quot; date above. If a change materially affects how your data is used, you will
            be told in the app before the change applies to you.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy or your data can go to Gaurav Arora at{' '}
            <Link href={`mailto:${email}`} className={linkClass}>
              {email}
            </Link>
            .
          </p>
        </Section>
      </div>
    </div>
  )
}
