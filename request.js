function encrypt(data) {
    return 'encryted data'
}

module.exports = function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`sending ${encryptedData} to ${url}`)
}


// module.exports = {
//     send
// } 