'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const questions = [
  [
    {
      question: 'Como é feito atendimento da Fortes Contabilidade?',
      content:
        'Na Fortes Contabilidade você é atendido por pessoas de verdade utilizando seu WhatsApp, e-mail ou por chamada de vídeo. Fique tranquilo, não usamos tickets chatos e intermináveis.',
    },
    {
      question: 'Vocês são uma contabilidade online?',
      content:
        'Somos uma contabilidade digital que faz o serviço de verdade para você. Você não vai precisar categorizar suas receitas e despesas, nem gerar seus próprios impostos. Apenas disponibilize as informações, foque no seu negócio e deixe a burocracia conosco!',
    },
    {
      question: 'Quais negócios atendem?',
      content:
        'Nossos clientes são infoprodutores, afiliados, dropshippers, YouTubers, lojas de e-commerces, marketplaces, plataformas de afiliados, empresas de TI, desenvolvedores de sistemas, gestores de tráfego, representantes comerciais, promotores de vendas e franquias.',
    },
    {
      question: 'A sede virtual é gratuita?',
      content:
        'Sim, você conta com sede virtual gratuita para abertura ou alteração de endereço da sua empresa. Tudo legalizado e prático para você.',
    },
  ],
  [
    {
      question: 'Fazem gestão financeira?',
      content:
        'Se você desejar pode contratar nosso serviço de gestão financeira para empresas digitais que contempla acesso ao sistema ContaAzul e gestor financeiro para cuidar das suas demandas. Saiba mais [AQUI]',
    },
    {
      question: 'O cliente tem área exclusiva?',
      content:
        'Todos os nossos clientes contam com uma área de suporte repleta de tutoriais e orientações para as situações aplicáveis aos seus negócios.',
    },
    {
      question: 'Não terei problemas com o fisco?',
      content:
        'Se você seguir nossas recomendações deixamos a sua empresa em ordem com o fisco sem você precisar fazer nada mais. Ganhe tempo e tranquilidade!',
    },
    {
      question: 'Atendem Lucro Presumido?',
      content:
        'Sim, temos planos para empresas no regime tributário do Lucro Presumido.',
    },
  ],
]

function RenderedContent() {
  return (
    <div className="grid w-full text-xl lg:grid-cols-2 lg:gap-10">
      {questions.map((div, index) => (
        <Accordion key={index} type="multiple">
          {div.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-start hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ))}
    </div>
  )
}

export default function FrequenlyQuestions() {
  return (
    <div>
      <h2 className="mb-14 text-center font-display text-3xl font-bold">
        Perguntas Frequentes
      </h2>
      <div>
        <RenderedContent />
      </div>
    </div>
  )
}
