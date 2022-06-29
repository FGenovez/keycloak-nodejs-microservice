const session  = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak;

var KeycloakConfig = {
    clientId: 'nodejs-microseervice',
    baererOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    credentials: {
        secret: 'r6O146LpHKpuzlsyVQi4isWCNxBtSm50'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warm('Trying to init keycloak again!');
        return _keycloak;
    }else{
        console.log("Initializing Correctly KeyCloack...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({store: memoryStore}, KeycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keyclak has not been initialized. Please called inir first');
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};