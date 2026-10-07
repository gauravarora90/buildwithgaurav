// Architecture diagram for the Zenith case study. Plain boxes so it stays readable on a phone.

function Node({ title, sub, accent }: { title: string; sub: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 ${
        accent ? 'border-blue-500/40 bg-blue-500/10' : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <div className="mt-1 text-xs leading-snug text-zinc-400">{sub}</div>
    </div>
  )
}

function Arrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-zinc-600">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </div>
  )
}

function Lane({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
        {label}
      </div>
      {children}
    </div>
  )
}

const FLOW = 'grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch'

const TOOLS = [
  'Booking lookup',
  'Ticket download link',
  'Event terms',
  'Venue and map',
  'Refund eligibility',
  'Transfer eligibility',
  "User's support tickets",
  'Booking picker (UI)',
  'Draft a support ticket',
]

export default function ZenithDiagram() {
  return (
    <figure className="not-prose my-10 space-y-7 rounded-2xl border border-white/10 bg-zinc-900/40 p-5 sm:p-7">
      <Lane label="Request path">
        <div className={FLOW}>
          <Node
            title="Mobile app"
            sub="Flutter chat UI. Sends the message and the user's booking context."
          />
          <Arrow />
          <Node title="API" sub="Express. Tenant key, rate limit, user-owned session." />
          <Arrow />
          <Node
            accent
            title="Orchestrator"
            sub="Bounded loop: at most 5 tool round trips, then a human takes over."
          />
          <Arrow />
          <Node
            title="Claude"
            sub="Sonnet for live chat, with prompt caching. Haiku for offline summaries."
          />
        </div>
      </Lane>

      <Lane label="What the agent can touch">
        <ul className="flex list-none flex-wrap gap-2 p-0">
          {TOOLS.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-zinc-400">
          Read-only or draft-only. Ownership and PII checks run in code on every call. Refunds and
          ticket submissions are carried out by the app, after the user taps.
        </p>
      </Lane>

      <Lane label="Ops loop">
        <div className={FLOW}>
          <Node title="Per-turn log" sub="Tokens, tools called, model, estimated cost." />
          <Arrow />
          <Node title="Ops dashboard" sub="Summaries, top problems, alerts, a daily review mail." />
          <Arrow />
          <Node
            accent
            title="Replay Lab"
            sub="Re-runs past chats against new code before it ships."
          />
          <Arrow />
          <Node title="Cost ledger" sub="Spend per feature, each with its own off switch." />
        </div>
      </Lane>
    </figure>
  )
}
