import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import epilotLogo from '@/images/logos/epilot_logo.jpeg'
import smilecloudLogo from '@/images/logos/smilecloud_logo.jpg'
import azetsLogo from '@/images/logos/azets_logo.jpeg'
import opswatLogo from '@/images/logos/opswat_logo.jpeg'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  const resume = [
    {
      company: 'Epilot',
      title: 'Senior Frontend Developer',
      logo: epilotLogo,
      start: 'Mar 2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Smilecloud',
      title: 'Senior Frontend Developer',
      logo: smilecloudLogo,
      start: 'Apr 2019',
      end: 'Mar 2021',
    },
    {
      company: 'Azets',
      title: 'Frontend Developer',
      logo: azetsLogo,
      start: 'Jan 2019',
      end: 'Apr 2019',
    },
    {
      company: 'Opswat',
      title: 'Frontend Developer',
      logo: opswatLogo,
      start: 'Jul 2018',
      end: 'Jan 2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-2 flex h-8 w-8 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-full w-full rounded-full"
                unoptimized
              />
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>

              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>

              <dt className="sr-only">Role</dt>

              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>

              <dt className="sr-only">Date</dt>

              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Home | Julian C</title>

        <meta
          name="description"
          content="Julian C, React Developer with an eye for Design."
        />
      </Head>

      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            React Developer with an eye for Design.
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Julian C here 👋 A dedicated and experienced React Developer looking
            to add luxury to any project I touch, deeply passionate about the
            craft of creating seamless user experiences.
            <br />
            In my free time I do fun projects, ride a motorcycle and enjoy sim
            racing in GT7.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/IulianCrisan"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />

            <SocialLink
              href="https://github.com/Julianus01"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />

            <SocialLink
              href="https://www.linkedin.com/in/iulian-crisan-6a9210162/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />

            <SocialLink
              href="mailto:iuliancrisan01@gmail.com, iuliancrisan01@gmail.com?subject=Hey there Julian&body=Nice to meet you 👋"
              aria-label="Get in touch on email"
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
