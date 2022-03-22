import urljoin from 'url-join'

const BASE = '/'
const LOGIN = urljoin(BASE, '/login')
const NOTFOUND = urljoin(BASE, '/404')
const REGISTRATION = urljoin(BASE, '/registrasi')
const STATUSCHECK = urljoin(BASE, '/registrasi/status')
const POSTREGISTRATION = urljoin(BASE, '/registrasi/berhasil')
const ADMINPAGE = urljoin(BASE, '/admin')

const routes =  {
  BASE,
  LOGIN,
  NOTFOUND,
  REGISTRATION,
  POSTREGISTRATION,
  ADMINPAGE,
  STATUSCHECK,
}

export default routes;