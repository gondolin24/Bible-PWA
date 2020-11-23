export class GlobalPersistedObject {
    private _savedVerses: any[] = []


    get savedVerses(): any[] {
        return this._savedVerses;
    }

    set savedVerses(value: any[]) {
        this._savedVerses = value;
    }


    constructor(savedVerses: any[]) {
        this._savedVerses = savedVerses
    }


    static fromJson(schema: any): GlobalPersistedObject {

        if ((schema === undefined)) {
            return new GlobalPersistedObject([])
        }
        const savedVerses = schema.savedVerses || [];
        return new GlobalPersistedObject(savedVerses)
    }

    static initial(): GlobalPersistedObject {
        return new GlobalPersistedObject([])
    }

    toJson(): any {
        return {
            metaData: {
                savedVerses: this._savedVerses
            }
        }

    }

}
