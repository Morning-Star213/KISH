'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useCurrentUserQuery, useSigninMutation } from '@/api/index'
import CURRENT_USER from '@/api/queries/user/currentUser'
import { useEffect } from 'react'
import { z } from 'zod'
import { Label } from '@/components/ui/Label'
import { FormField } from '@/components/ui/FormField'

type FormProps = {
  email: string
  password: string
}
const schema = z.object({
  email: z.string().min(1, '必須項目です'),
  password: z.string().trim().min(1, '必須項目です'),
})

export default function Login() {
  const router = useRouter()
  const { data: { currentUser } = {} } = useCurrentUserQuery()

  const [signin, { data, loading }] = useSigninMutation({
    update: (cache, { data }) => {
      if (!data?.signin.error) {
        cache.writeQuery({
          query: CURRENT_USER,
          data: { currentUser: data?.signin.user },
        })
      }
    },
    onCompleted: (data) => {
      if (!data?.signin.error) {
        router.push('/')
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: FormProps) => {
    signin({
      variables: { email: values.email, password: values.password },
    })
  }

  useEffect(() => {
    if (currentUser) {
      router.push('/')
    }
  }, [currentUser, router])

  return (
    <div className='flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          店舗用ログイン
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <Label htmlFor='email' required>
              メールアドレス
            </Label>
            <Input id='email' type='email' {...register('email')} error={errors.email?.message} />
          </FormField>

          <FormField>
            <Label htmlFor='password' required>
              パスワード
            </Label>
            <Input
              id='password'
              type='password'
              {...register('password')}
              error={errors.password?.message}
            />
          </FormField>

          {data?.signin.error && <p className='text-error text-sm'>{data.signin.error}</p>}

          <div className='mt-10'>
            <Button type='submit' intent='default' size='lg' className='w-full' loading={loading}>
              ログイン
            </Button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          <a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
            パスワード忘れた方はこちら
          </a>
        </p>
      </div>
    </div>
  )
}
