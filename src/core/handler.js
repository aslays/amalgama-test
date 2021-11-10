class ErrorHandler extends Error {
  constructor(statusCode, message, error = {}) {
    super()
    this.statusCode = statusCode
    this.message = message
    this.error = error
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  })
}

const callService = (method, requestUrl, formParams = {}, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      let options = {
        method: method,
        headers: {
          ...headers,
          //...authenticated
        }
      }
      if (["PATCH", "POST", "PUT"].indexOf(method) > -1)
        options.body = JSON.stringify(formParams)
      let response = await fetch(requestUrl, options)
      let data
      try{
        data = await response.json()
      }catch(error){
        console.log("Error json():", error)
      }
      resolve({
        status: response.status,
        data,
        warnings: response.warnings || ''
      })
    } catch (error) {
      console.log(error)
      reject(error.message)
    }
  })
}

module.exports = {
  ErrorHandler,
  handleError,
  callService
}
