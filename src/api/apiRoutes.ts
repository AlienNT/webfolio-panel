type ApiPath = (_id: Id) => string

interface ApiRoute {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  path: string | ApiPath

}

export default {
  PROFILE: {
    get: <ApiRoute>{
      method: 'GET',
      path: '/profile'
    },
    update: <ApiRoute>{
      method: 'PATCH',
      path: '/profile'
    }
  },
  SKILLS: {
    fetchAll: <ApiRoute>{
      method: 'GET',
      path: '/skills'
    },
    create: <ApiRoute>{
      method: 'POST',
      path: '/skills'
    },
    update: <ApiRoute>{
      method: 'PATCH',
      path: (_id: Id) => '/skills/' + _id
    },
    delete: <ApiRoute>{
      method: 'DELETE',
      path: (_id: Id) => '/skills/' + _id
    }
  },
  WORKS: {
    fetchAll: <ApiRoute>{
      method: 'GET',
      path: '/works'
    },
    create: <ApiRoute>{
      method: 'POST',
      path: '/works'
    },
    update: <ApiRoute>{
      method: 'PATCH',
      path: (_id: Id) => '/works/' + _id
    },
    delete: <ApiRoute>{
      method: 'DELETE',
      path: (_id: Id) => '/works/' + _id
    }
  },
  CONTACTS: {
    fetchAll: <ApiRoute>{
      method: 'GET',
      path: '/contacts'
    },
    create: <ApiRoute>{
      method: 'POST',
      path: '/contacts'
    },
    update: <ApiRoute>{
      method: 'PATCH',
      path: (_id: Id) => '/contacts/' + _id
    },
    delete: <ApiRoute>{
      method: 'DELETE',
      path: (_id: Id) => '/contacts/' + _id
    }
  }
}