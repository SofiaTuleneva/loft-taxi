let storage = localStorage;

export const saveStorage = state => {
    const toStorage = {auth: {isLoggedIn: state.auth.isLoggedIn, token: state.auth.token}};
    const savedState = JSON.stringify(toStorage);
    storage.setItem('loftTaxiAuth', savedState);
};

export const getStateFromStorage = () => {
    const savedState = storage.getItem('loftTaxiAuth');
    if (savedState) {
        return JSON.parse(savedState);
    } else {
        return undefined;
    }
};