import { useState } from 'react'

import BlogPosts from './components/BlogPosts';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlogPosts/>
    </>
  )
}

export default App
