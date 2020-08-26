class ClientCache {

    private store: Storage;
    
    constructor(storage: Storage) {
        this.store = storage;
    }

    public cache(key: string, obj: string) {

        this.store.setItem(key, obj);

    }

    public hit(key: string) {
        let obj = this.store.getItem(key);

        return obj;
    }

    


}
export default ClientCache;