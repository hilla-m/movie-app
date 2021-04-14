class Actor {
    constructor(firstName, lastName, birthday, image, imdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink; 
        this.age = this.calcAge(this.birthday);
    }


    calcAge(birthday) {
        const currentYear = new Date().getFullYear();
        const yearOfbirth = new Date(birthday).getFullYear();
        return currentYear - yearOfbirth;
    }



}

export default Actor;