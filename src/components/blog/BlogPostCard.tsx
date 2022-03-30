import React from 'react';
import { Card } from 'react-bootstrap';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './BlogPostCard.module.scss';


//TODO: add param type
const BlogPostCard = ({ title, summary, date, time } : any) => {

  const { isDark } = useAppSelector(state => state.theme);

  return (
    <div className={isDark ? styles.theme__dark : styles.theme__light}>
      <Card className={styles.blog_post_card}>

        <Card.Body>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Subtitle className={styles.subtitle}>{date} - {time}</Card.Subtitle>
          <Card.Text className={styles.content}>{summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BlogPostCard