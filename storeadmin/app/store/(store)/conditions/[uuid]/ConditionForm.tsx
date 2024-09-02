import { Condition, useCreateConditionMutation, useUpdateConditionMutation } from '@/api/index'

import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  tradeInRate: z.number().positive(),
  resaleRate: z.number().positive(),
})

type Props = {
  condition?: Condition
}
export const ConditionForm = ({ condition }: Props) => {
  const router = useRouter()
  const [createCondition] = useCreateConditionMutation({
    onCompleted: (data) => {
      if (!data.createCondition.error) {
        router.push(`/conditions`)
      }
    },
  })
  const [updateCondition, { loading }] = useUpdateConditionMutation()

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<Condition>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: condition?.name || '',
      tradeInRate: condition?.tradeInRate,
      resaleRate: condition?.resaleRate,
    },
  })
  console.log('🚀 ~ ConditionForm ~ errors:', errors)
  console.log('🚀 ~ ConditionForm ~ isValid:', isValid)

  const onSubmit = async (values: Condition) => {
    if (!condition) {
      createCondition({ variables: { attributes: values } })
    } else {
      updateCondition({ variables: { uuid: condition.uuid, attributes: values } })
    }
  }

  return (
    <FormFieldGroup className='py-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor='name' className='flex items-center gap-2'>
            名称
          </Label>
          <Input id='name' {...register('name')} />
        </FormField>

        <FormField>
          <Label htmlFor='tradeInRate' className='flex items-center gap-2'>
            買取価格割率
          </Label>
          <Input
            id='tradeInRate'
            type='number'
            {...register('tradeInRate', { valueAsNumber: true })}
          />
        </FormField>

        <FormField>
          <Label htmlFor='resaleRate' className='flex items-center gap-2'>
            再販価格割率
          </Label>
          <Input
            id='resaleRate'
            type='number'
            {...register('resaleRate', { valueAsNumber: true })}
          />
        </FormField>

        <div className='flex items-center gap-2 mt-10'>
          <Button
            type='submit'
            className='px-10'
            size='sm'
            disabled={!isDirty || !isValid}
            loading={loading}
          >
            保存
          </Button>
        </div>
      </form>
    </FormFieldGroup>
  )
}
