'use client'
import { AiFillStar /* , AiOutlineCalendar */ } from 'react-icons/ai'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { BsWhatsapp } from 'react-icons/bs'
import { Element } from 'react-scroll'
import FrequenlyQuestions from '@/components/FrequentlyQuestions'
import Trade from '@/assets/cardsImages/trade.png'
import Business from '@/assets/cardsImages/business.png'
import Industry from '@/assets/cardsImages/industry.png'
import Services from '@/assets/cardsImages/services.png'
import Image from 'next/image'
import 'swiper/css'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import commentaryStyles from '@/styles/commentary.module.css'
import { Slider } from '@/components/Swiper'

const Start = () => (
  <Container className="mb-8 mt-16 md:mt-24">
    <FadeIn className="max-w-3xl text-center font-display">
      <h1 className="text-5xl font-medium tracking-tight text-neutral-950/90 [text-wrap:balance] sm:text-7xl">
        Contabilidade Digital
      </h1>

      <p className="mt-3 text-3xl">Especializada na Construção Civil</p>

      <p className="mt-6 text-justify text-xl text-neutral-600">
        Ao escolher a Fortes Contabilidade, você tem o atendimento humano e
        personalizado que você merece. Garantimos que você será recepcionado por
        profissionais competentes, e dedicados.
      </p>

      <p className="mt-2 text-justify text-xl text-neutral-600">
        Nossa equipe está sempre pronta para ouvir as suas necessidades,
        responder suas perguntas e oferecer soluções personalizadas para o seu
        negócio.
      </p>

      <div className="flex flex-col justify-center gap-2 py-14 sm:flex-row">
        <Link href={'https://wa.me/5511918994489'}>
          <Button className="w-full px-10 py-8 text-xl text-white">
            Abra sua empresa
          </Button>
        </Link>

        <Link href={'https://wa.me/5511918994489'}>
          <Button className="w-full gap-2 px-10 py-8 text-xl text-white">
            <BsWhatsapp size={30} /> Chamar no Whatsapp
          </Button>
        </Link>
      </div>
    </FadeIn>
  </Container>
)

const Cards = () => {
  const cardsContent = [
    {
      title: 'CONTABILIDADE PARA SERVIÇOS',
      svg: Services,
      list: [
        'Advocacia',
        'Arquitetura',
        'Clínica Médica',
        'Consultório Odontológico',
        'Clínica Psicológica',
        'Agência de Publicidade',
        'Condomínios',
        'Engenharia',
      ],
    },
    {
      title: 'CONTABILIDADE PARA INDÚSTRIA',
      svg: Industry,
      list: [
        'Alimentos',
        'Construção',
        'Química',
        'Embalagens',
        'Equipamentos em geral',
        'Têxtil',
        'Máquinas',
        'Móveis',
        'Auto Peças',
      ],
    },
    {
      title: 'CONTABILIDADE PARA COMÉRCIO',
      svg: Trade,
      list: [
        'Ferragens',
        'Quadros',
        'Supermercado',
        'Restaurantes',
        'Roupas e Acessórios',
        'Farmácia',
        'Veículos',
        'Materiais de Construção',
        'Brinquedos',
        'Eletrônicos',
        'Cosmeticos',
      ],
    },
    {
      title: 'CONTABILIDADE PARA NEGÓCIOS ONLINE',
      svg: Business,
      list: [
        'E-commerces',
        'Youtuber',
        'Influencer',
        'Afiliados',
        'Co-produtor',
        'Produtor de Conteúdo',
        'Dropshipping',
      ],
    },
  ]

  return (
    <Container className="max-w-[90rem]">
      <Element name="cards">
        <FadeInStagger className="my-8">
          <FadeIn>
            <h2 className="mb-10 text-center text-3xl font-bold text-neutral-900">
              Atendimentos personalizados e Segmentados para:
            </h2>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cardsContent.map(({ title, svg, list }, index) => (
              <FadeIn key={index}>
                <Card className="flex h-full flex-col items-center gap-2 p-8 sm:p-6">
                  <div className="flex rounded-full text-neutral-900">
                    <Image src={svg} height={80} alt="" />
                  </div>
                  <div>
                    <p className="text-center text-xl font-bold">{title}</p>
                    <ul className="mt-3 text-lg text-neutral-600">
                      {list.map((e) => (
                        <li key={e} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Element>
    </Container>
  )
}

const WhyUs = () => (
  <div className="hidden w-full py-8">
    <FadeIn className="flex flex-col items-center justify-center">
      <h2 className="mb-14 text-center text-3xl font-bold">
        Por que escolher a Fortes Contabilidade?
      </h2>
      <div className="flex gap-5">
        <div className="flex-1 text-right text-xl">
          <p className="text-2xl">Aqui você tem!</p>
          <p>Apoio gerencial na tomada de decisão. &#9989;</p>
          <p>Agilidade e transparência no processo &#9989;</p>
          <p>de abertura da sua empresa! &#9989;</p>
          <p>
            Sem contrato de fidelidade, nossa missão é a sua satisfação! &#9989;
          </p>
          <p>Suporte humanizado e especializado &#9989;</p>
          <p>com tudo o que você precisa! &#9989;</p>
          <p>Planejamento tributário para correto &#9989;</p>
          <p>enquadramento fiscal &#9989;</p>
          <p>Planejamento tributário para correto &#9989;</p>
          <p>enquadramento fiscal &#9989;</p>
        </div>
        <div className="flex-1 text-left text-lg">
          <p className="text-2xl">Aqui você descarta!</p>
          <p>&#10060; Pagamento de taxas e honorários abusivos!</p>
          <p className="flex">
            <span>&#10060;</span> Dores de cabeça com mal planejamento
            tributário para a sua empresa
          </p>
          <p>
            &#10060; Chats com robôs irritantes sem soluções ou solicitações por
            e-mail
          </p>
        </div>
      </div>
      <button className="my-8 flex items-center gap-2 rounded-md bg-secondary px-8 py-4 text-white shadow">
        Solicitar Proposta
      </button>
    </FadeIn>
  </div>
)

const Warranty = () => (
  <div>
    <Container className="my-12">
      <Element name="warranty">
        <div className="space-y-10">
          <div className="space-y-5 text-center text-lg">
            <h2 className="mb-6 text-center font-display text-3xl font-bold">
              Garantia Fortes
            </h2>

            <p className="text-2xl font-semibold">
              A Garantia Fortes: Satisfação Garantida ou seu dinheiro de volta!
            </p>

            <div className="space-y-2 text-justify text-xl">
              <p>
                Na Fortes Controladoria, temos plena confiança na qualidade dos
                nossos serviços e no atendimento às suas expectativas. Por isso,
                oferecemos a Garantia Fortes: Se, por qualquer motivo, você não
                ficar satisfeito com os nossos serviços nos primeiros 30 dias,
                nós devolveremos sua mensalidade.
              </p>
              <p>
                Contamos com uma ampla rede de contadores especializados em
                diversas áreas, como contabilidade, impostos e consultoria
                financeira. Nossa equipe experiente está preparada para atender
                todas as demandas do seu negócio e garantir o seu sucesso.
              </p>
              <p>
                Entendemos que a satisfação do cliente é fundamental, e por isso
                colocamos o compromisso com a sua satisfação no centro do nosso
                trabalho. Com a Garantia Fortes, você pode experimentar nossos
                serviços com tranquilidade, sabendo que estamos comprometidos em
                entregar resultados de qualidade.
              </p>
              <p>
                Não deixe de contar com a Fortes Controladoria e desfrutar da
                tranquilidade e segurança que a nossa garantia oferece. Entre em
                contato conosco e descubra como podemos ajudar no crescimento e
                sucesso do seu negócio!
              </p>
            </div>
            <Button className="px-10 py-8 text-xl text-white">
              Conheça nossos planos
            </Button>
          </div>
        </div>
      </Element>
    </Container>
  </div>
)

const Questions = () => (
  <Container className="my-10 w-full">
    <Element name="frequenly">
      <FrequenlyQuestions />
    </Element>
  </Container>
)

const Commentary = () => {
  const items = [
    {
      name: 'Carolina Melo',
      description:
        'André é um profissional dedicado, cordial, sanou todas as minhas dúvidas e resolveu o problema de imediato com a minha empresa. Preço justo e muito ágil. Indico a todos o serviço do André.',
    },
    {
      name: 'Renan Souza',
      description:
        'Ainda não fechei nenhum serviço, mas a atenção que deram para tirar minhas dúvidas foi surreal.',
    },
    {
      name: 'Elizandra Mello',
      description:
        'Empresa de contabilidade de confiança e transparente. O André e sua equipe são bem prestativos e empenhados em resolver qualquer imprevisto que a empresa tenha nessa área.',
    },
    {
      name: 'Jhonatan Barros',
      description:
        'Escritório muito bem conceituado, sempre muito atencioso e com agilidade nas demandas. Recomendo!',
    },
    {
      name: 'JULIANA FERRARI GONÇALVES',
      description:
        'Empresa de confiança, esclareceu todas as minhas dúvidas referente aos problemas que eu estava passando na minha empresa. O André resolveu tudo, e o melhor, por um preço justo. Estava pagando muito mais caro em outro escritório.',
    },
    {
      name: 'Leeandrews Araújo',
      description:
        'Assessoria excelente. Sempre cuidando dos meus assuntos com o maior cuidado e atenção.',
    },
    {
      name: 'Murilo',
      description:
        'Atendimento de excelência, contador parceiro e com proximidade do cliente. Indico com certeza!',
    },
    {
      name: 'fernando botine valensuela',
      description:
        'Empresa de grandes responsabilidades, essa você pode confiar, essa eu recomendo.',
    },
    {
      name: 'Fábio Diniz',
      description:
        'Excelente empresa de contabilidade! Profissionais qualificados e atendimento personalizado.',
    },
    {
      name: 'Thiago Batista Rodrigues',
      description: 'Excelente, sem palavras. Muito bom, indico sem medo.',
    },
    {
      name: 'Lincon Albertini',
      description:
        'Profissionais muito capacitados e excelente atendimento. Escritório moderno, sempre atualizado e muito ágil. Possui diferenciais tanto em qualidade quanto em preços. 100% de satisfação.',
    },
    {
      name: 'Sirlene Socorro',
      description:
        'Excelente e competente! Faço minha contabilidade com esse escritório.',
    },
    {
      name: 'Jessé Luis',
      description:
        'Pessoal super atencioso, recomendo. Serviço rápido e de qualidade.',
    },
  ]

  const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    })
  }

  const FiveStars = () => (
    <div className="flex justify-center text-4xl">
      <AiFillStar className="text-[#ffc240]" />
      <AiFillStar className="text-[#ffc240]" />
      <AiFillStar className="text-[#ffc240]" />
      <AiFillStar className="text-[#ffc240]" />
      <AiFillStar className="text-[#ffc240]" />
    </div>
  )

  return (
    <Container className="my-10 w-full">
      <Element name="commentary">
        <div className="mx-auto my-5 w-4/6 space-y-4">
          <div className="text-center">
            <h2 className="m-auto font-display text-3xl font-bold">
              Depoimentos
            </h2>
            <p className="text-2xl font-semibold">
              Faça como os mais de 1.000 clientes que já escolheram a Fortes
              Controladoria como braço estratégico em seu negócio!
            </p>
          </div>
          {/*  <FcGoogle
            size={70}
            className="m-auto rounded-full bg-white p-2 shadow-md"
          />
          <FiveStars /> */}
        </div>

        <Slider
          navigation={{}}
          autoHeight={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            horizontalClass: commentaryStyles.pagination,
            bulletClass: commentaryStyles.bullet,
            bulletActiveClass: commentaryStyles.bulletActive,
            clickable: true,
          }}
        >
          {items.map(({ description, name }, index) => (
            <div
              key={index}
              className="mx-auto flex w-full flex-col items-center p-4 py-10 text-center"
            >
              <FcGoogle size={55} />
              <FiveStars />
              <div className="mt-2 w-1/2">
                <p className="mb-2 text-lg">{description}</p>
                <small className="text-base text-muted-foreground">
                  {toTitleCase(name)}
                </small>
              </div>
            </div>
          ))}
        </Slider>
      </Element>
    </Container>
  )
}

/* const PublishCards = () => (
  <Container>
    <Element name="blog">
      <FadeInStagger className="my-8">
        <FadeIn>
          <h2 className="mb-6 text-center text-3xl font-bold text-neutral-900">
            Últimas postagens
          </h2>
          <h3 className="mb-14 text-center text-xl text-neutral-900">
            Fique por dentro com nosso blog
          </h3>
        </FadeIn>

        <div className=" grid gap-5 md:grid-cols-2 lg:flex">
          {[
            {
              title:
                'Como ser um afiliado: o que é, tipos de afiliados e muito mais!',
              description:
                'Em dúvida sobre como ser um afiliado? Veja aqui estratégias úteis para promover produtos e serviços online, ganhar comissões e…',
              dateicon: '02/08/2023',
            },
            {
              title:
                'Venda sem nota fiscal: Entenda por que você não deve fazer isso!',
              description:
                'Após solicitar uma proposta, faremos uma reunião online para entender suas necessidades e expectativas!',
              dateicon: '02/08/2023',
            },
            {
              title: 'Abertura de empresa para Gestor de Tráfego',
              description:
                'A nota fiscal é um documento essencial em qualquer transação comercial, seja ela de produtos ou serviços.  A emissão deste…',
              dateicon: '02/08/2023',
            },
          ].map(({ title, description, dateicon }, index) => (
            <FadeIn
              key={index}
              className="relative flex w-full flex-col items-center gap-6 rounded-xl bg-primary p-6 shadow-md ring-1 ring-neutral-950/5"
            >
              <p className="text-center text-2xl font-bold text-white">
                {title}
              </p>
              <div className="flex w-full items-center justify-start gap-1 text-sm text-white">
                <AiOutlineCalendar className="h-6 w-auto" /> {dateicon}
              </div>
              <small className="text-lg font-light text-white">
                {description}
              </small>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Element>
  </Container>
) */

/* const Form = () => (
  <div className="mt-12 w-full py-8">
    <Container>
      <FadeIn>
        <div className="flex flex-col-reverse gap-10 lg:flex-row">
          <div className="flex-1">
            <FormProfile />
          </div>
          <div className="flex-1 text-xl">
            <strong>Agora é com você!</strong>
            <p>
              Entre em contato conosco agora mesmo e solicite uma proposta com
              um dos nossos especialistas!
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  </div>
) */

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Start */}
      <Start />
      {/* Cards */}
      <Cards />
      {/* Why Us */}
      <WhyUs />
      {/* Warranty  */}
      <Warranty />
      {/* Commentary */}
      <div className="w-full bg-white py-10">
        <Commentary />
      </div>
      {/* Frequenly Questions */}
      <Questions />
      {/* Publish Cards */}
      {/* <PublishCards /> */}

      {/* Form */}
      {/* <Form /> */}
    </div>
  )
}
