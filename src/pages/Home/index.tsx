import { NewCycleForm } from './components/NewCycleForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { Countdown } from './components/Countdown'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { createContext, useState } from 'react'
import * as zod from 'zod'

import {
  StartCountdownButton,
  StopCountdownButton,
  HomeContainer,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform the task name'),
  minutesAmount: zod
    .number()
    .min(5, 'The min value is 5 minutes')
    .max(60, 'The max value is 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  secondsPassed: number
  setAmountSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CycleContextType)

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState(0)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { reset, handleSubmit, watch } = newCycleForm

  const setAmountSecondsPassed = (seconds: number) => {
    setSecondsPassed(seconds)
  }

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setSecondsPassed(0)
    reset()
  }

  const markCurrentCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const handleInterruptCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const task = watch('task')
  const isTaskFleldEmpty = task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            secondsPassed,
            setAmountSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interrupt
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={!isTaskFleldEmpty}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
