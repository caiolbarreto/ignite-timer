import { HistoricContainer, HistoricList, Status } from './styles'

export const Historic = () => {
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
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>TaskTest</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoricList>
    </HistoricContainer>
  )
}
