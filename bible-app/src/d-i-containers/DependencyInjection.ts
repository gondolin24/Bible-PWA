import Bottle from 'bottlejs'
import {BibleService} from "../services/bible/BibleService";
import {GlobalPersistor} from "../services/GlobalPersistor";

// dependency Injection Injection layer

const DI_CONTAINER = new Bottle()
DI_CONTAINER.service('BibleService', BibleService)
DI_CONTAINER.service('GlobalPersister', GlobalPersistor)

export default DI_CONTAINER
