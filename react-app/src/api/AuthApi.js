import axios from 'axios'

export const loginWithEmail = credentials => {
    axios.post("/api/auth", { credentials })
      .then(res => (res.data.user) )
}
