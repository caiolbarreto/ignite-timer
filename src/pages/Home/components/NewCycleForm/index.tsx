import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, MinutesInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="">I will work in</label>
      <TaskInput
        id="task"
        placeholder="Give a name to your project"
        list="sugestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="sugestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="">during</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step="5"
        min="5"
        max="60"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
