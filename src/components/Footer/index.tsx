import Link from 'next/link'
import { LogoFull } from '@/components/Logo'
import { Container } from '@/components/Container'
import { FadeIn } from '../FadeIn'

const navigation = [
  /* {
    title: 'Work',
    links: [
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  }, */
  {
    title: 'Redes Sociais',
    links: [
      {
        title: 'Whatsapp',
        href: 'https://wa.me/5511918994489',
      },
      {
        title: 'Instagram',
        href: 'https://instagram.com/fortescontabilidade1?igshid=MzRlODBiNWFlZA==',
        icon: 'InstagramIcon',
      },
      /* {
        title: 'Twitter',
        href: 'https://twitter.com',
        icon: 'TwitterIcon',
      },
      {
        title: 'GitHub',
        href: 'https://github.com',
        icon: 'GitHubIcon',
      },
      {
        title: 'Dribbble',
        href: 'https://dribbble.com',
        icon: 'DribbbleIcon',
      }, */
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="flex lg:justify-center">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link) => (
                <li key={`link${link.title}`} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <Container
      as="footer"
      className="mt-12 w-full pt-20"
      /* className="mt-12 w-full border-t border-neutral-950/10 pt-20" */
    >
      <FadeIn>
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-0">
          <div className="flex-1 lg:min-w-max">
            <LogoFull />
          </div>
          <div className="flex flex-1 flex-col lg:items-center">
            <div>
              <p className="mb-2 font-bold">Endereço</p>
              <p>R. Imperial, 59 - Sala 03 - Centro</p>
              <p>São José do Rio Preto, 15015-610, BR</p>
            </div>
            <div className="text-zinc-700 underline decoration-zinc-700">
              <a href="mailto:comercial@fortescontroladoria.com.br">
                comercial@fortescontroladoria.com.br
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Navigation />
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 py-8">
          {/* <div>
            <div className="w-full justify-between pt-4 text-zinc-500">
              <div>
                <p>R. Imperial, 59 - Sala 03 - Centro</p>
                <p>São José do Rio Preto, 15015-610, BR</p>
              </div>
              <div className="text-zinc-700 underline decoration-zinc-700">
                <a href="mailto:comercial@fortescontroladoria.com.br">
                  comercial@fortescontroladoria.com.br
                </a>
              </div>
            </div>
          </div> */}

          <p className="text-sm text-neutral-700">
            © Fortes Contabilidade {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
