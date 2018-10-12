export default class Token {

    static async getToken() {
        try {
            let token = await AsyncStorage.getItem('X-Auth-Token');
            return token
        } catch (error) {
            console.log("error while getting token");
            return 'error'
        }
    }
}