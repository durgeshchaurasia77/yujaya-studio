import { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import './upcoming-event.scss'

const EVENT_DATE = new Date('2026-01-01T00:00:00')

const UpcomingEventSection = () => {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = EVENT_DATE - now

      if (diff <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="upcoming-event">

      {/* LEFT CONTENT */}
      <div className="event-info">
        <span className="tag">Next Upcoming Event</span>
        <h2>Happy New Year Concert</h2>
        <p className="subtitle">International Music Stars</p>
        <p className="date">Saturday, January 1</p>
      </div>

      {/* COUNTDOWN */}
      <div className="countdown">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} className="count-box">
            <h3>{timeLeft[unit] || '00'}</h3>
            <span>{unit}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta">
        <Button color="primary">Details</Button>
      </div>

    </section>
  )
}

export default UpcomingEventSection
