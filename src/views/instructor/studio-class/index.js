import { useState } from 'react'
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import ClassesHeader from './ClassesHeader'
import ClassCard from './ClassCard'
import { classesData } from './classesData'

const ITEMS_PER_PAGE = 6

const CoursesPrograms = () => {
  const [mode, setMode] = useState('online')
  const [currentPage, setCurrentPage] = useState(1)

  // 🔹 FILTER ONLY BY MODE (online / offline)
  const filteredData = classesData.filter(
    item => item.mode === mode
  )

  // 🔹 PAGINATION
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  return (
    <div>

      {/* PAGE TITLE */}
      <h3 className='mb-1'>My Courses</h3>
      <p className='text-muted mb-0'>
        Education, talents, and career opportunities.
        <span className='text-primary font-weight-bolder'>
          {' '}All in one place.
        </span>
      </p>

      {/* HEADER: ONLINE / OFFLINE ONLY */}
      <ClassesHeader
        mode={mode}
        setMode={setMode}
      />

      {/* COURSE LIST */}
      <Row>
        {paginatedData.map(item => (
          <Col lg='4' md='6' sm='12' key={item.id} className='mb-2'>
            <ClassCard item={item} />
          </Col>
        ))}
      </Row>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination className='justify-content-center mt-2'>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem active={i + 1 === currentPage} key={i}>
              <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </Pagination>
      )}
    </div>
  )
}

export default CoursesPrograms
