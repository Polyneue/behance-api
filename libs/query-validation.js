/**
 * Returns an object for the compare keys to validate against.
 */
const pageOnly = {
  page: ''
};

const sortTimePage = {
  page: '',
  sort: '',
  time: ''
};

const sortPageOrderPer = {
  page: '',
  per_page: '',
  sort: '',
  sort_order: ''
};

const usersTeams = {
  city: '',
  country: '',
  field: '',
  page: '',
  q: '',
  sort: '',
  state: '',
  tags: ''
};

module.exports = {
  projects: {
    city: '',
    country: '',
    color_hex: '',
    color_range: '',
    field: '',
    license: '',
    page: '',
    q: '',
    sort: '',
    state: '',
    tags: '',
    time: ''
  },
  projectComments: pageOnly,
  creativesToFollow: pageOnly,
  users: usersTeams,
  userProjects: sortTimePage,
  userWips: sortTimePage,
  userAppeciations: pageOnly,
  userCollections: sortTimePage,
  userFollowers: sortPageOrderPer,
  userFollowing: sortPageOrderPer,
  collections: {
    page: '',
    q: '',
    sort: '',
    time: ''
  },
  collectionProjects: {
    page: '',
    per_page: '',
    sort: '',
    time: ''
  },
  teams: usersTeams,
  teamProjects: sortTimePage
};
