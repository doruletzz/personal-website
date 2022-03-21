import React from 'react'
import { Card } from 'react-bootstrap'

const BlogPostCard = ({title, summary, date, time}) => {
  return (
    <Card>
        <Card.Header>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{date} - {time}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{summary}</Card.Text>
        </Card.Body>

    </Card>
  )
}

export default BlogPostCard