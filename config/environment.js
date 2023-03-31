// This configuration object contains development-specific options such as database paths, asset paths, and API URLs.

const developement = {
    name :'developement',
    db_path :'./config/mongoose',
    passport_path : './config/passport-local-strategy',
    customMware_path : './config/flashMessage',
    assets_path : './assets',
    secret_key :'#placementCell@careercamp$$Team&&&interface##Debajoti^^Shit%%',
    mongoose_path :'mongodb+srv://debajyotishit3:Deba16@cluster0.fxnuinl.mongodb.net/?retryWrites=true&w=majority',
    api_path :'https://remotive.com/api/remote-jobs?category=Software_Development'
}

// Export the configuration object.
module.exports = developement;