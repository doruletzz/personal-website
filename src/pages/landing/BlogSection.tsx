import React, { useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import BlogPostCard from '../../components/BlogPostCard';

import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { fetchLatestPosts } from '../../redux/blog/slice';


const BlogSection = () => {

  const nrOfBlogPostCards = 4;

  const data = useAppSelector(state => state.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(fetchLatestPosts(nrOfBlogPostCards));
  }, []);


  return (
    <Container fluid>
      <Row>
        <Col lg={8} md={6}>
          <h4>LATEST THOUGHTS</h4>
          <h1>Read Some of my latest blog posts.</h1>

          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed integer pulvinar quam scelerisque. Arcu hendrerit ut aliquet lorem vitae sit. Ut ornare sed iaculis blandit nulla. Habitant maecenas maecenas arcu auctor fermentum egestas urna.</h5>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor lectus diam consequat, id amet enim. Auctor nulla tortor quisque risus. Et et, commodo at nec tellus eget fermentum vel. Enim vel morbi sed facilisi morbi urna, quam aliquam sed.</h5>
        </Col>
        <Col lg={4} md={6}>
          {data.posts.map(({ title, summary, createdAt, slug }, idx) => (
              <BlogPostCard key={idx} title={title} summary={summary} date={createdAt?.toLocaleString()} time="5 min" />
          ))}

          {/* <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" />
          <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" />
          <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" />
          <BlogPostCard title="Some blog title" summary="summary" date="01/01/2021" time="10 min" /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default BlogSection