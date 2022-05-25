import React, { useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import BlogPostCard from '../../components/blog/BlogPostCard';

import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { fetchLatestPosts } from '../../redux/blog/slice';

import { Link } from 'react-router-dom';


import styles from './BlogSection.module.scss'
import { FaBrain } from 'react-icons/fa';
import Header from '../../components/header/Header';

const BlogSection = () => {

  const nrOfBlogPostCards = 4;

  const { posts } = useAppSelector(state => state.posts);

  const { isDark } = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLatestPosts(nrOfBlogPostCards));
  }, []);


  return (
    <section >
      <div id="blog" className={isDark ? styles.theme__dark : styles.theme__light}>
        <Container fluid className={styles.wrapper}>
          <Row>
            <Col lg={6} md={5}>
              <div className={styles.header} >
                <Header content={"LATEST THOUGHTS"} icon={<FaBrain />} sectionLink="#blog" />
              </div>
              <h1 className={styles.heading}>Read Some of my latest blog posts.</h1>

              <h5 className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed integer pulvinar quam scelerisque. Arcu hendrerit ut aliquet lorem vitae sit. Ut ornare sed iaculis blandit nulla. Habitant maecenas maecenas arcu auctor fermentum egestas urna.</h5>
              <h5 className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor lectus diam consequat, id amet enim. Auctor nulla tortor quisque risus. Et et, commodo at nec tellus eget fermentum vel. Enim vel morbi sed facilisi morbi urna, quam aliquam sed.</h5>
            </Col>
            <Col lg={2} md={1} />
            <Col lg={4} md={6}>
              {posts.map(({ title, summary, createdAt, slug }, idx) => (
                <div key={idx} className={styles.blog_post_card}>
                  <Link to={"blog/" + slug} >
                    <BlogPostCard title={title} summary={summary} date={createdAt?.toLocaleString()} time="5 min" />
                  </Link>
                </div>
              ))}

              {/* <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" />
          <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" />
          <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" />
          <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </section>

  )
}

export default BlogSection