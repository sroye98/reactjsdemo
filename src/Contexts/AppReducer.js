function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case 'ADD_CLIENT_FAQ':
      return {
        ...state,
        clientFaqs: [...state.clientFaqs, action.payload]
      };
    case 'ADD_CONSULTANT_FAQ':
      return {
        ...state,
        consultantFaqs: [...state.consultantFaqs, action.payload]
      };
    case 'ADD_JOB_LISTING':
      return {
        ...state,
        listings: [...state.listings, action.payload]
      };
    case 'EDIT_BLOG_POST':
      const updatedPost = action.payload;
      const updatedPosts = state.posts.map(post => {
        if (post.slug === updatedPost.slug) {
          return updatedPost;
        }
        return post;
      });

      return {
        ...state,
        posts: updatedPosts
      };
    case 'EDIT_CLIENT_FAQ':
      const updatedClientFaq = action.payload;
      const updatedClientFaqs = state.clientFaqs.map(faq => {
        if (faq.id === updatedClientFaq.id) {
          return updatedClientFaq;
        }
        return faq;
      });
      
      return {
        ...state,
        clientFaqs: updatedClientFaqs
      };
    case 'EDIT_CONSULTANT_FAQ':
      const updatedConsultantFaq = action.payload;
      const updatedConsultantFaqs = state.consultantFaqs.map(faq => {
        if (faq.id === updatedConsultantFaq.id) {
          return updatedConsultantFaq;
        }
        return faq;
      });

      return {
        ...state,
        consultantFaqs: updatedConsultantFaqs
      };
    case 'EDIT_JOB_LISTING':
      const updatedListing = action.payload;
      const updatedListings = state.listings.map(listing => {
        if (listing.slug === updatedListing.slug) {
          return updatedListing;
        }
        return listing;
      });

      return {
        ...state,
        listings: updatedListings
      };
    case 'REMOVE_BLOG_POST':
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post.slug !== action.payload;
        })
      };
    case 'REMOVE_CLIENT_FAQ':
      return {
        ...state,
        clientFaqs: state.clientFaqs.filter(faq => {
          return faq.id !== action.payload;
        })
      };
    case 'REMOVE_CONSULTANT_FAQ':
      return {
        ...state,
        consultantFaqs: state.consultantFaqs.filter(faq => {
          return faq.id !== action.payload;
        })
      };
    case 'REMOVE_JOB_LISTING':
      return { 
        ...state,
        listings: state.listings.filter(listing => {
          return listing.slug !== action.payload;
        })
      };
    default:
      return state;
  }
}

export default AppReducer;