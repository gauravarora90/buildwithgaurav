import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'
import { CHANNEL_APP_NAME, CHANNEL_APP_SCOPES } from '@/data/channelAutomation'

export const metadata = genPageMetadata({
  title: CHANNEL_APP_NAME,
  description: `${CHANNEL_APP_NAME} is a private tool that automates uploads, video details, comments and reporting for Gaurav Arora's own YouTube channel.`,
})

const linkClass = 'text-neutral-950 underline underline-offset-2 hover:text-neutral-600'

export default function ChannelAutomation() {
  return (
    <div className="pt-10 pb-20 sm:pt-14">
      <div className="pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          {CHANNEL_APP_NAME}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-neutral-600">
          A private tool I built to run the routine work on my own YouTube channel, so I can spend
          my time making videos instead of managing them.
        </p>
      </div>

      <div className="max-w-3xl space-y-10 text-base leading-relaxed text-neutral-700">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950">What it does</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Uploads finished videos to my channel with their title, description, tags and
              thumbnail.
            </li>
            <li>Schedules when each video goes public and keeps playlists organised.</li>
            <li>Updates details on videos that are already published.</li>
            <li>Collects comments on my videos so I can reply to them in one place.</li>
            <li>Reports views and watch time for my videos.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950">Who can use it</h2>
          <p>
            Only me. The tool is not offered to the public, and the only account connected to it is
            my own YouTube channel. It connects through Google sign-in and uses YouTube API
            Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
            Permissions it asks Google for
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {CHANNEL_APP_SCOPES.map((s) => (
              <li key={s.scope}>
                <strong className="text-neutral-950">{s.name}</strong>: {s.use}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
            Privacy and terms
          </h2>
          <p>
            How the tool handles data is set out in the{' '}
            <Link href="/privacy" className={linkClass}>
              privacy policy
            </Link>
            . Using it means agreeing to the{' '}
            <Link href="https://www.youtube.com/t/terms" className={linkClass}>
              YouTube Terms of Service
            </Link>{' '}
            and the{' '}
            <Link href="https://policies.google.com/privacy" className={linkClass}>
              Google Privacy Policy
            </Link>
            . Questions go to{' '}
            <Link href={`mailto:${siteMetadata.email}`} className={linkClass}>
              {siteMetadata.email}
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
