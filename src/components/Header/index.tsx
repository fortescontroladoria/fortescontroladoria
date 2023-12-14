'use client'
import { Logo } from '@/components/Logo'
import { Sheet } from '@/components/ui/sheet'
import { Link } from 'react-scroll'

const menuItems = [
  {
    title: 'Atendimentos',
    to: 'cards',
  },
  {
    title: 'Garantia',
    to: 'warranty',
  },
  {
    title: 'Avaliações',
    to: 'commentary',
  },
  {
    title: 'Dúvidas',
    to: 'frequenly',
  },
  {
    title: 'Blog',
    to: 'blog',
  },
]

const MenuDesktop = () => (
  <>
    <ul className="flex gap-10">
      {menuItems.map((item) => (
        <Link
          to={item.to}
          key={item.title}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="cursor-pointer"
        >
          <li className="hover:text-primary: border-b border-transparent bg-transparent text-xl font-semibold">
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  </>
)

const MenuMobile = () => (
  <Sheet>
    {/* <SheetTrigger className="focus-visible:outline-none">
      <SlMenu size={24} />
    </SheetTrigger>
    <SheetContent className="py-10">
      <Accordion type="multiple">
        {menuItems.map((item) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger className="text-start text-lg hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <ul className="flex flex-col">
                {item.contents.map((content) => (
                  <a
                    href=""
                    key={content}
                    className="rounded p-2 transition hover:bg-gray-200"
                  >
                    <li>{content}</li>
                  </a>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SheetContent> */}
  </Sheet>
)

export function Header() {
  return (
    <header className="relative">
      <div className="m-auto flex max-w-7xl items-center justify-between gap-10 px-8 py-5 lg:px-10">
        <Logo />

        <div className="hidden xl:block">
          <MenuDesktop />
        </div>

        <div className="block xl:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
