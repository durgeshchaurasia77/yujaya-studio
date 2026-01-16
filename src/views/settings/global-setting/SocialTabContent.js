import { useState, Fragment } from 'react'
import { isObjEmpty } from '@utils'
import Avatar from '@components/avatar'
// import { Link, User } from 'react-feather'
// import { Form, Label, Input, Button, Row, Col, FormGroup } from 'reactstrap'
import {
  Card,
  CardBody,
  Row,
  Col,
  CustomInput,
  Button
} from 'reactstrap'

import {
  Link,
  User,
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  Slack,
  Link2,
  Trash2
} from 'react-feather'
import Select from 'react-select'
import './style.css'
import google from '../../../assets/images/google.png'
import slack from '../../../assets/images/slack.png'
import github from '../../../assets/images/github.png'
import mailchimp from '../../../assets/images/mailchimp.png'
import asana from '../../../assets/images/asana.png'
import whatsapp from '../../../assets/images/whatsapp.webp'

import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter-light.png'
import instagram from '../../../assets/images/instagram.png'
import dribbble from '../../../assets/images/dribbble.png'
import behance from '../../../assets/images/behance.png'

const SocialTabContent = ({ data }) => {
  // const [twitter, setTwitter] = useState(data.socialLinks.twitter ? data.socialLinks.twitter : '')
  // const [facebook, setFacebook] = useState(data.socialLinks.facebook ? data.socialLinks.facebook : '')
  // const [google, setGoogle] = useState(data.socialLinks.google ? data.socialLinks.google : '')
  // const [linkedIn, setLinkedIn] = useState(data.socialLinks.linkedIn ? data.socialLinks.linkedIn : '')
  // const [instagram, setInstagram] = useState(data.socialLinks.instagram ? data.socialLinks.instagram : '')
  const [quora, setQuora] = useState(data.socialLinks.quora ? data.socialLinks.quora : '')

  const BrandIcon = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        className="brand-icon"
      />
    )
  }
  const connectedAccounts = [
    { name: 'Google', desc: 'Calendar and contacts', icon: google, active: true },
    { name: 'Slack', desc: 'Communication', icon: slack, active: false },
    { name: 'Github', desc: 'Manage your Git repositories', icon: github, active: true },
    { name: 'Mailchimp', desc: 'Email marketing service', icon: mailchimp, active: true },
    { name: 'Asana', desc: 'Communication', icon: asana, active: false },
    { name: 'Whatsapp', desc: 'Communication', icon: whatsapp, active: false }
  ]

  const socialAccounts1 = [
  { name: 'Facebook', status: 'Not Connected', icon: facebook, action: 'link' },
  { name: 'Twitter', status: '@Pixinvent', icon: twitter, action: 'delete' },
  { name: 'Instagram', status: '@Pixinvent', icon: instagram, action: 'delete' },
  { name: 'Dribbble', status: 'Not Connected', icon: dribbble, action: 'link' },
  { name: 'Behance', status: 'Not Connected', icon: behance, action: 'link' }
]

const socialAccounts = [
  { name: 'Facebook', status: 'Not Connected', icon: Facebook, action: 'link' },
  { name: 'Twitter', status: '@Pixinvent', icon: Twitter, action: 'delete' },
  { name: 'Instagram', status: '@Pixinvent', icon: Instagram, action: 'delete' },
  { name: 'GitHub', status: 'Not Connected', icon: GitHub, action: 'link' },
  { name: 'Slack', status: 'Not Connected', icon: Slack, action: 'link' },
  { name: 'Whatsapp', status: 'Not Connected', icon: whatsapp, action: 'link' }
]
  const renderTwitterConnection = () => {
    if (!isObjEmpty(data.connections.twitter)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.twitter.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.twitter.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderFacebookConnection = () => {
    if (!isObjEmpty(data.connections.facebook)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.facebook.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.facebook.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderGoogleConnection = () => {
    if (!isObjEmpty(data.connections.google)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.google.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.google.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderGithubConnection = () => {
    if (!isObjEmpty(data.connections.github)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.github.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.github.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

return (
    <Row>
      {/* CONNECTED ACCOUNTS */}
      <Col md="6">
        <Card>
          <CardBody>
            <h4>Connected Accounts</h4>
            <p className="text-muted mb-2">
              Display content from your connected accounts on your site
            </p>
                {connectedAccounts.map((item, i) => (
                  <div key={i} className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <BrandIcon src={item.icon} alt={item.name} />
                      <div className="ml-1">
                        <h6 className="mb-0">{item.name}</h6>
                        <small className="text-muted">{item.desc}</small>
                      </div>
                    </div>

                    <CustomInput
                      type="switch"
                      id={`connected-${i}`}
                      defaultChecked={item.active}
                    />
                  </div>
                ))}
          </CardBody>
        </Card>
      </Col>

      {/* SOCIAL ACCOUNTS */}
      <Col md="6">
        <Card>
          {/* <CardBody>
            <h4>Social Accounts</h4>
            <>
              <p className="text-muted mb-2">
                Display content from social accounts on your <br />site.
              </p>
            </>
              {socialAccounts.map((item, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <BrandIcon src={item.icon} alt={item.name} />
                    <div className="ml-1">
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">{item.status}</small>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    color={item.action === 'delete' ? 'light-danger' : 'light-secondary'}
                  >
                    {item.action === 'delete' ? 'Delete' : 'Link'}
                  </Button>
                </div>
              ))}
          </CardBody> */}
          <CardBody>
            <h4>Social Accounts</h4>
            <p className="text-muted mb-2">
              Display content from social accounts on your <br /> site.
            </p>
            {socialAccounts.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="social-account-style"
                >
                  <div className="d-flex align-items-center">
                    <div className="social-icon">
                      {/* <Icon size={18} />
                      <BrandIcon src={item.icon} alt={item.name} /> */}
                        {item.name === 'Whatsapp' ? (
                          <BrandIcon src={item.icon} alt={item.name} />
                        ) : (
                          <Icon size={18} />
                        )}
                    </div>
                    <div className="ml-1">
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">{item.status}</small>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    color={item.action === 'delete' ? 'light-danger' : 'light-secondary'}
                  >
                    {item.action === 'delete' ? (
                      <button className="icon-btn danger">
                        <Trash2 size={16} />
                      </button>
                    ) : (
                      <button className="icon-btn secondary">
                        <Link2 size={16} />
                      </button>
                    )}
                  </Button>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SocialTabContent
