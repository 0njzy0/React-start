import { axios } from '@/utils'

function getSceneInfo (id) {
  return axios({
    url: '/api/getSceneInfo',
    params: {
      sceneId: id
    }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

function proxyWeather (param) {
  return axios({
    url: `/${param}`
  })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export { getSceneInfo, proxyWeather }
