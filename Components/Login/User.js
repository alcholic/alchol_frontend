export class User {
    id;
    name;
    email;
    profilePath;
    constructor(id, name, email, profilePath) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.profilePath = profilePath;
    }
}