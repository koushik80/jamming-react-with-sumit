class Context {
    constructor(value = null) {
        this.value = value;
    }
    // provider
    
    Provider = ({ children, value }) => {
        this.value = value;

    }

}