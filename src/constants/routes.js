import urljoin from 'url-join'

const BASE = '/'
const LOGIN = urljoin(BASE, '/login')
const NOTFOUND = urljoin(BASE, '/404')
const REGISTRATION = urljoin(BASE, '/registrasi')
const POSTREGISTRATION = urljoin(BASE, '/registrasi/berhasil')

const routes =  {
  BASE,
  LOGIN,
  NOTFOUND,
  REGISTRATION,
  POSTREGISTRATION,
}

export default routes;