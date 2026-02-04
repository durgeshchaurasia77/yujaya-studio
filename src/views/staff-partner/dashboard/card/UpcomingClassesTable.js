import { Table, Card } from 'reactstrap'

const UpcomingClassesTable = () => {
  const data = [
    { name: 'All Rounder', instructor: 'Amit', date: '12 Sep', time: '10:00 AM' },
    { name: 'Node JS', instructor: 'Rohit', date: '13 Sep', time: '12:00 PM' },
    { name: 'Laravel', instructor: 'Durga', date: '13 Sep', time: '12:00 PM' },
    { name: 'Flutter', instructor: 'Priyanshi', date: '13 Sep', time: '12:00 PM' }
  ]

  return (
    <Card>
      <Table responsive>
        <thead>
          <tr>
            <th>Class</th>
            <th>Instructor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.instructor}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default UpcomingClassesTable
