class DataModel {
  constructor(model) {
    Object.assign(this, model)      
  }  

  getRelated(type, store) {
    if (!this[type]) return []
    return this[type].map(id => {
      return store.getById(id)
    })
  }

}

export default DataModel;
