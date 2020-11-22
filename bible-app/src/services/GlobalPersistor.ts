import _ from 'lodash'
import {Plugins} from "@capacitor/core";
import {GlobalPersistedObject} from "../data-models/GlobalPersistedObject";

const {Storage} = Plugins

export class GlobalPersistor {

    globalObject: GlobalPersistedObject

    constructor() {
        this.globalObject = new GlobalPersistedObject([])
    }

    async saveSavedVerses(verses: any[]) {
        this.globalObject.savedVerses = verses
        await this.saveData()
    }

    async saveData() {
        const data = this.globalObject.toJson()
        await Storage.set({
            key: 'metaData',
            value: JSON.stringify(data)
        })
    }

    async getData(inital: boolean) {
        const result = await Storage.get({key: 'metaData'})
        const val: string = _.get(result, 'value') || '{}'
        const parsed = JSON.parse(val)

        if ((_.get(parsed, 'metaData')) && (inital)) {
            const json = _.get(parsed, 'metaData')
            this.globalObject = GlobalPersistedObject.fromJson(json)
        }
    }


}


