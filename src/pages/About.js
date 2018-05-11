import React, { Component } from 'react'
import { Header, Table } from 'semantic-ui-react'
import PageContent from './common/PageContent';

const PERSONAL_RECORDS = [
  {
    event: '800m',
    mark: '1:57.91',
    date: 'Febrary 8, 2014'
  },
  {
    event: '1000m',
    mark: '2:34.15',
    date: 'January 28, 2017'
  },
  {
    event: 'Mile',
    mark: '4:21.69',
    date: 'Febrary 6, 2016'
  },
  {
    event: '3000m',
    mark: '8:47.05',
    date: 'January 22, 2016'
  },
  {
    event: '5000m',
    mark: '15:11.89',
    date: 'January 28, 2016'
  },
  {
    event: '10000m',
    mark: '32:19.64',
    date: 'May 12, 2017'
  },
  {
    event: 'Marathon',
    mark: '2:44:20',
    date: 'April 16, 2018'
  }
]

class About extends Component {
  render() {
    return (
        <PageContent title='About' text>
            <p>
              Hello, my name is Craig Hammond, and this is my website. I don't
              have a lot here right now, but feel free to check out my LinkedIn
              or GitHub.
            </p>
            <p>
              I've been programming since high school, when I took a Java course
              because I wanted to become programmer so I could make games. I
              took AP Computer Science A the next year, got a 5 on the AP exam,
              and have been pretty hooked ever since. I got my BS in Computer
              Science from Northeastern University, and am currently working
              full-time as a Full-Stack Software Developer at Liberty Mutual
              Insurance.
            </p>
            <Header as='h3'>Interests</Header>
            <Header as='h4'>Running</Header>
            <p>
              I have been running to some extent since about 2005. I used to be
              awful, but I always loved the concrete progress associated with
              improving racing times.
            </p>
            <p>
              I was fortunate enough to walk-on to Northeastern's cross country
              and track teams, and have run the 2018 Boston Marathon.
            </p>
            <Table basic='very'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Event</Table.HeaderCell>
                  <Table.HeaderCell>PR</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  PERSONAL_RECORDS.map(record => (
                    <Table.Row>
                        <Table.Cell>{record.event}</Table.Cell>
                        <Table.Cell>{record.mark}</Table.Cell>
                        <Table.Cell>{record.date}</Table.Cell>
                    </Table.Row>
                  ))
                }
              </Table.Body>
            </Table>
            <Header as='h4'>Video Games</Header>
            <p>
              I grew up playing a lot of games, and they have shaped the person 
              I am today. Besides playing games, I also collect some, new and
              old, as a hobby.
            </p>
            <p>
              Retro games are specifically interesting to me. A lot of games
              that ran directly on the metal back in the day are usually played
              through emulators today. Emulators are a great tool, but in terms
              of preservation I am most interested in emulators with a big
              emphasis on accuracy. There are great people out there doing the
              work to preserve the true playability of these old games, and I
              follow it closely.
            </p>
        </PageContent>
    );
  }
}

export default About;