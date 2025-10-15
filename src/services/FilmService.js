import { api } from '@/services/api.js'

export default {
  search (title) {
    return api(`/movies/search?title=${encodeURIComponent(title)}`)
  }
}
