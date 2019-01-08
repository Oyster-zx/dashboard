export default class TodoItem {


    constructor(key, text, isChecked) {
        this._key = key;
        this._text = text;
        this._isChecked = isChecked;
    }


    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get isChecked() {
        return this._isChecked;
    }

    set isChecked(value) {
        this._isChecked = value;
    }
}