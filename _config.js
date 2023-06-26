var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://pamelamukethi8:excell@2023@cluster0.o7vm83f.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://pamelamukethi8:excell@2023@cluster0.o7vm83f.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://pamelamukethi8:excell@2023@cluster0.o7vm83f.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
