export const Features = [
  { icon: 'fas fa-laptop fa-2x', title: 'Corporate Branding', subtitle: 'Strong, distinct brand identities' },
  { icon: 'fas fa-layer-group fa-2x', title: 'UI/UX Design', subtitle: 'Powerful, intuitive & user-friendly designs for web and mobile interfaces' },
  { icon: 'fas fa-code fa-2x', title: 'Application Development', subtitle: 'Using the latest technology, Creative Team members can produce high-quality, responsive app experiences for your enterprise' },
  { icon: 'fas fa-database fa-2x', title: 'Cloud Computing', subtitle: 'Well versed in IAAS utilizing all major cloud services providers like Amazon AWS, MS Azure and Google Cloud' },
  { icon: 'fas fa-search fa-2x', title: 'Advanced Analytics & Data Science', subtitle: 'Our team of creatives can help you deploy solutions in the areas of AI, Machine Learning and Predictive Analysis' },
  { icon: 'fas fa-mobile-alt fa-2x', title: 'Mobile App Dev', subtitle: 'With powerful tools Creative Team members create engaging mobile apps to grow your business\' reach' }
];

export const ClientFAQs = [
  { id: '1', question: '<p>First Question</p>', answer: '<p>First Answer</p>' },
  { id: '2', question: '<p>Second Question</p>', answer: '<p>Second Answer</p>' },
  { id: '3', question: '<p>Third Question</p>', answer: '<p>Third Answer</p>' },
  { id: '4', question: '<p>Fourth Question</p>', answer: '<p>Fourth Answer</p>' },
  { id: '5', question: '<p>Fifth Question</p>', answer: '<p>Fifth Answer</p>' },
  { id: '6', question: '<p>Sixth Question</p>', answer: '<p>Sixth Answer</p>' },
  { id: '7', question: '<p>Seventh Question</p>', answer: '<p>Seventh Answer</p>' }
];

export const ConsultantFAQS = [
  { id: '1', question: '<p>First Question</p>', answer: '<p>First Answer</p>' },
  { id: '2', question: '<p>Second Question</p>', answer: '<p>Second Answer</p>' },
  { id: '3', question: '<p>Third Question</p>', answer: '<p>Third Answer</p>' },
  { id: '4', question: '<p>Fourth Question</p>', answer: '<p>Fourth Answer</p>' },
  { id: '5', question: '<p>Fifth Question</p>', answer: '<p>Fifth Answer</p>' },
  { id: '6', question: '<p>Sixth Question</p>', answer: '<p>Sixth Answer</p>' },
  { id: '7', question: '<p>Seventh Question</p>', answer: '<p>Seventh Answer</p>' }
];

export const BlogPosts = [
  { 
    title: 'Post #6', 
    slug: 'post-6', 
    snippet: '<p>Post 6</p>',
    content: '<p>Post 6</p>', 
    mediaUrl: '', 
    mediaType: 'video', 
    publishedDate: '11/14/2020', 
    author: 'Saachi Roye' 
  },
  { 
    title: 'Post #5', 
    slug: 'post-5', 
    snippet: '<p>Post 5</p>', 
    content: '<p>Post 5</p>', 
    mediaUrl: '', 
    mediaType: 'video', 
    publishedDate: '11/13/2020', 
    author: 'Saachi Roye' 
  },
  { 
    title: 'Post #4', 
    slug: 'post-4', 
    snippet: '<p>Post 4</p>', 
    content: '<p>Post 4</p>', 
    mediaUrl: '', 
    mediaType: 'video', 
    publishedDate: '11/12/2020', 
    author: 'Saachi Roye' 
  },
  { 
    title: 'Post #3', 
    slug: 'post-3', 
    snippet: '<p>Post 3</p>',
    content: '<p>Post 3</p>', 
    mediaUrl: '', 
    mediaType: 'video', 
    publishedDate: '11/11/2020', 
    author: 'Saachi Roye' 
  },
  { 
    title: 'Post #2', 
    slug: 'post-2', 
    snippet: '<p>Post 2</p>', 
    content: '<p>Post 2</p>', 
    mediaUrl: '', 
    mediaType: 'video', 
    publishedDate: '11/10/2020', 
    author: 'Saachi Roye' 
  },
  { 
    title: 'Post #1', 
    slug: 'post-1', 
    snippet: '<p>Post 1</p>', 
    content: '<p>Post 1</p>', 
    mediaUrl: '', 
    mediaType: 'video', 
    publishedDate: '11/09/2020', 
    author: 'Saachi Roye' 
  }
];

export const JobListings = [
  { 
    id: '1', 
    title: 'Job #1', 
    slug: 'job-1', 
    description: '<p>Job 1</p>', 
    location: 'Houston, TX', 
    type: 'Contact', 
    client: 'Facebook', 
    position: 'Front End Web Developer', 
    duration: '6+ months', 
    created: '11/14/2020', 
    status: 'open', 
    skills: [
      'ReactJS'
    ], 
    responsibilities: [
      'Responsibility 1'
    ] 
  },
  { 
    id: '2', 
    title: 'Job #2', 
    slug: 'job-2', 
    description: '<p>Job 2</p>', 
    location: 'Cupertino, CA', 
    type: 'Contact', 
    client: 'Apple', 
    position: 'Front End Web Developer', 
    duration: '12+ months', 
    created: '11/13/2020', 
    status: 'open', 
    skills: [
      'HTML',
      'CSS',
      'JS'
    ], 
    responsibilities: [
      'Responsibility 1'
    ] 
  },
  { 
    id: '3', 
    title: 'Job #3', 
    slug: 'job-3', 
    description: '<p>Job 3</p>', 
    location: 'Seattle, WA', 
    type: 'Contact', 
    client: 'Microsoft', 
    position: '.NET Core Developer', 
    duration: '24 months', 
    created: '11/12/2020', 
    status: 'open', 
    skills: [
      'C#',
      'MS SQL'
    ], 
    responsibilities: [
      'Responsibility 1'
    ] 
  }
];

export const fakeAuth = {
  isAuthenticated: false,
  signin(identifier, password, cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  signup(username, email, password, cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

export const fakeApi = {
  getListing(id) {
    setTimeout(() => {
      return JobListings[id];
    }, 100);
  },
  getListings() {
    setTimeout(() => {
      return JobListings;
    }, 100);
  },
  addListing(listing, cb) {
    setTimeout(() => {
      JobListings.push(listing);
      cb();
    }, 100);
  },
  editListing(id, listing, cb) {
    setTimeout(() => {
      // edit item
      cb();
    }, 100);
  },
  deleteListing(id, cb) {
    setTimeout(() => {
      // delete item
      cb();
    }, 100);
  }
}