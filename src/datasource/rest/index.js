const { RESTDataSource } = require('apollo-datasource-rest')

class SpaceX extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.spacex.land/rest/"
  }

  async rockets(){
    return await this.get(`rockets?limit=100`)
  }
}


module.exports = { SpaceX }