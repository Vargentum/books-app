import {Dispatcher} from 'flux'
const dispatcher = new Dispatcher()

//for debugging
dispatcher.register(console.log.bind(console))

export default dispatcher