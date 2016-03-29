import {Dispatcher} from 'flux'
const dispatcher = new Dispatcher()

dispatcher.register(console.log.bind(console))

export default dispatcher