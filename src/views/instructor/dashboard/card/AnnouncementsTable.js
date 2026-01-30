import { Table, Card } from 'reactstrap'

const AnnouncementsTable = () => {
  const data = [
    { title: 'Holiday Notice', date: '10 Sep', status: 'New' },
    { title: 'Exam Schedule', date: '09 Sep', status: 'Read' },
    { title: 'Exam Schedule1', date: '09 Sep', status: 'Read' },
    { title: 'Exam Schedule2', date: '09 Sep', status: 'Read' }
  ]

  return (
    <Card>
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default AnnouncementsTable
