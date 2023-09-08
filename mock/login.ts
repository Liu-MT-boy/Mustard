import Mock from 'mockjs'

Mock.mock('/api/login', {
  code: 200,
  msg: '登录成功',
  user: {
    name: 'admin',
    score: 2048,
    rank: 10
  },
  token: '@string(32)'
})

Mock.mock('/api/users', 'get', {
  'users|5-10': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|18-60': 1,
      email: /\w{5,10}@\w{3,5}\.com/
    }
  ]
})
