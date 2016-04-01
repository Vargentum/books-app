class DataModel {
  constructor(model, stores) {
    Object.assign(this, model, {stores})
  }

  getRelated(type) {
    if (!this[type] || !this.stores[type]) return []
    return this[type].map(id => {
      return this.stores[type].getById(id)
    })
  }

}

export default DataModel;
