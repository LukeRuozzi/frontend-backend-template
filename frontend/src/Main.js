import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  CloseButton,
  AlertDescription,
  Heading,
  Container,
  Box,
  Button,
} from '@chakra-ui/react';
import { getPosts, createPost } from './Service';

export const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    const posts = await data.json();
    setPosts(posts);
  };

  const addPost = () => {
    const post = {
      title: 'FE test',
      content: 'TEST',
    };

    createPost(post).then(() => fetchPosts());
  };

  return (
    <Container maxW="lg" position="relative">
      <Heading marginBottom="30px">Posts</Heading>
      {posts.map((post, index) => (
        <Box key={index} marginBottom="20px">
          <Heading size="md">{post.title}</Heading>
          by {post.author}
        </Box>
      ))}
      <Button onClick={addPost}>Add post</Button>
    </Container>
  );
};
