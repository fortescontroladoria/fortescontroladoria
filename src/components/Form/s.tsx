'use client'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty('Nome é obrigatório')
    .min(3, 'Mínimo de 3 caracteres'),
})

export type RegisterType = z.infer<typeof registerSchema>

export default function Form() {
  const registerForm = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = registerForm

  const onRegister = (data: RegisterType) => {
    console.log(data.name)

    // fetch
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Formulário</CardTitle>
        <CardDescription>Formulário de usuários</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register" onSubmit={handleSubmit(onRegister)}>
          <div>
            <label htmlFor="name" className="mb-2 block">
              Nome
            </label>
            <Input type="text" {...register('name')} />
            {errors.name && (
              <span className="mt-2 block">{errors.name.message}</span>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="register" disabled={isSubmitting}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
