export default class User {

    constructor(id, name, img, email) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getImg() {
        return this.img;
    }

    getEmail() {
        return this.email;
    }


}