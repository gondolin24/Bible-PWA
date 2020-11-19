import Bottle from 'bottlejs'
import {BibleService} from "../services/bible/BibleService";

// dependency Injection Injection layer

const DI_CONTAINER = new Bottle()
DI_CONTAINER.service('BibleService', BibleService)

export default DI_CONTAINER
