import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoricContainer, HistoricList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { useContext } from 'react'

export const Historic = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoricContainer>
      <h1>My historic</h1>

      <HistoricList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluded</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoricList>
    </HistoricContainer>
  )
}
