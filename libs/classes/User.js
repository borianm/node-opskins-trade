class User {
  constructor(request) {
    this.request = request;
  }

  async createVCaseUser(params) {
    const user = await this.request.post('IUser/CreateVCaseUser/v1/', params);
    return user;
  }
  async getInventory(params) {
    const inventory = await this.request.get('IUser/GetInventory/v1', params);
    return inventory;
  }
  async getProfile(params) {
    const profile = await this.request.get('IUser/GetProfile/v1', params);
    return profile;
  }
  async updateProfile(params) {
    const profile = await this.request.post('IUser/UpdateProfile/v1', params);
    return profile;
  }
}

module.exports = User;
