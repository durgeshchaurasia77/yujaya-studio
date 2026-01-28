import { Table, Card, Button } from 'reactstrap'

const TodayScheduleTable = () => {
  const data = [
    { time: '10:00 AM', class: 'React', mode: 'Online' },
    { time: '02:00 PM', class: 'Node', mode: 'Offline' }
  ]

  return (
    <Card>
      <Table responsive>
        <thead>
          <tr>
            <th>Time</th>
            <th>Class</th>
            <th>Mode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.time}</td>
              <td>{item.class}</td>
              <td>{item.mode}</td>
              <td>
                <Button color='primary' size='sm'>Join</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default TodayScheduleTable
