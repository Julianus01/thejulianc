import Link from 'next/link'

import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

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

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
              </div>

              <div className="space-y-6 sm:space-y-3">
                <div className="flex justify-center gap-4 sm:justify-end">
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

                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Julian C. All rights
                  reserved.
                </p>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
