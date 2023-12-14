'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }).min(2, {
    message: 'Nome deve ter pelo menos 2 caracteres',
  }),
  email: z
    .string()
    .nonempty({ message: 'Email é obrigatório' })
    .min(5, { message: 'Email deve ter pelo menos 5 caracteres' })
    .max(255, { message: 'Email deve ter menos de 255 caracteres' })
    .email({ message: 'Email deve ser um endereço de email válido' }),
  message: z
    .string()
    .nonempty({ message: 'Mensagem obrigatória' })
    .min(5, { message: 'A mensagem deve ter pelo menos 5 caracteres' })
    .max(255, { message: 'A mensagem deve ter menos de 255 caracteres' }),
  phone: z
    .string()
    .nonempty({ message: 'Telefone é obrigatório' })
    .min(8, { message: 'Telefone deve ter pelo menos 8 caracteres' })
    .max(15, { message: 'Telefone deve ter menos de 15 caracteres' })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: 'Telefone deve ser um número de telefone válido',
    }),
})

export default function FormProfile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite Seu Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu Telefone</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sua Mensagem</FormLabel>
              <FormControl>
                <Input placeholder="Digite Uma Mensagem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
