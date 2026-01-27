import { useState } from 'react'
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import ClassesHeader from './ClassesHeader'
import ClassCard from './ClassCard'
import { classesData } from './classesData'

const ITEMS_PER_PAGE = 6

const coursesPrograms = () => {
  const [activeTab, setActiveTab] = useState('workshops')
  const [mode, setMode] = useState('online')
  const [currentPage, setCurrentPage] = useState(1)

  // 🔹 FILTER DATA
  const filteredData = classesData.filter(
    item => item.category === activeTab &&
      item.mode === mode
  )

  // 🔹 PAGINATION LOGIC
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  return (
    <div>

      {/* PAGE TITLE */}
      <h3 className='mb-1'>Courses & Programs</h3>
      <p className='text-muted mb-0'>
        Education, talents, and career opportunities.
        <span className='text-primary font-weight-bolder'>
          {' '}All in one place.
        </span>
      </p>

      {/* HEADER (TABS + TOGGLE) */}
        <ClassesHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            mode={mode}
            setMode={setMode}
            className='justify-content-center'
        />
      {/* GRID */}
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

export default coursesPrograms
