export default {
  AUTH: {
    login: {
      method: <Method>'POST',
      path: '/login'
    },
    logout: {
      method: <Method>'GET',
      path: '/logout'
    },
    refresh: {
      method: <Method>'GET',
      path: '/refresh'
    }
  },
  PROFILE: {
    get: {
      method: <Method>'GET',
      path: '/profile'
    },
    update: {
      method: <Method>'PATCH',
      path: '/profile'
    }
  },
  SKILLS: {
    fetchAll: {
      method: <Method>'GET',
      path: '/skills'
    },
    create: {
      method: <Method>'POST',
      path: '/skills'
    },
    update: {
      method: <Method>'PATCH',
      path: (_id: Id): string => '/skills/' + _id
    },
    delete: {
      method: <Method>'DELETE',
      path: (_id: Id): string => '/skills/' + _id
    }
  },
  WORKS: {
    fetchAll: {
      method: <Method>'GET',
      path: '/works'
    },
    create: {
      method: <Method>'POST',
      path: '/works'
    },
    update: {
      method: <Method>'PATCH',
      path: (_id: Id) => '/works/' + _id
    },
    delete: {
      method: <Method>'DELETE',
      path: (_id: Id) => '/works/' + _id
    }
  },
  CONTACTS: {
    fetchAll: {
      method: <Method>'GET',
      path: '/contacts'
    },
    create: {
      method: <Method>'POST',
      path: '/contacts'
    },
    update: {
      method: <Method>'PATCH',
      path: (_id: Id) => '/contacts/' + _id
    },
    delete: {
      method: <Method>'DELETE',
      path: (_id: Id) => '/contacts/' + _id
    }
  }
}