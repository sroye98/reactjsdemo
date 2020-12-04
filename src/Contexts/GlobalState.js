import { createContext, useReducer } from 'react';

import { 
  ClientFAQs,
  ConsultantFAQS,
  BlogPosts,
  JobListings 
} from '../Constants';
import AppReducer from './AppReducer';

const initialState = {
  listings: JobListings,
  posts: BlogPosts,
  clientFaqs: ClientFAQs,
  consultantFaqs: ConsultantFAQS
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addBlogPost = (post) => {
    dispatch({
      type: 'ADD_BLOG_POST',
      payload: post
    });
  };

  const editBlogPost = (post) => {
    dispatch({
      type: 'EDIT_BLOG_POST',
      payload: post
    });
  };

  const removeBlogPost = (slug) => {
    dispatch({
      type: 'REMOVE_BLOG_POST',
      payload: slug
    });
  };

  const addClientFaq = (faq) => {
    dispatch({
      type: 'ADD_CLIENT_FAQ',
      payload: faq
    });
  };

  const editClientFaq = (faq) => {
    dispatch({
      type: 'EDIT_CLIENT_FAQ',
      payload: faq
    });
  };

  const removeClientFaq = (id) => {
    dispatch({
      type: 'REMOVE_CLIENT_FAQ',
      payload: id
    });
  };

  const addConsultantFaq = (faq) => {
    dispatch({
      type: 'ADD_CONSULTANT_FAQ',
      payload: faq
    });
  };

  const editConsultantFaq = (faq) => {
    dispatch({
      type: 'EDIT_CONSULTANT_FAQ',
      payload: faq
    });
  };

  const removeConsultanttFaq = (id) => {
    dispatch({
      type: 'REMOVE_CONSULTANT_FAQ',
      payload: id
    });
  };

  const addJobListing = (listing) => {
    dispatch({
      type: 'ADD_JOB_LISTING',
      payload: listing
    });
  };

  const editJobListing = (listing) => {
    dispatch({
      type: 'EDIT_JOB_LISTING',
      payload: listing
    });
  };

  const removeJobListing = (slug) => {
    dispatch({
      type: 'REMOVE_JOB_LISTING',
      payload: slug
    });
  };

  return (
    <GlobalContext.Provider value={{
      listings: state.listings,
      posts: state.posts,
      clientFaqs: state.clientFaqs,
      consultantFaqs: state.consultantFaqs,
      addBlogPost,
      editBlogPost,
      removeBlogPost,
      addClientFaq,
      editClientFaq,
      removeClientFaq,
      addConsultantFaq,
      editConsultantFaq,
      removeConsultanttFaq,
      addJobListing,
      editJobListing,
      removeJobListing
    }}>
      {children}
    </GlobalContext.Provider>
  )
}