
class Auth{
    constructor(){
        this.isAuthenticated = false
    }
    login = (e) => {
        this.isAuthenticated = true
        e();
    }
    logout = (e) => {
        this.isAuthenticated = false
        // this.props.chng()
        e();
    }
    check = () => {
        return this.isAuthenticated
    }
    
}

export default new Auth();
