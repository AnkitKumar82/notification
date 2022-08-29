async function responseSend (request, response, next) {
  let responseBody
  try {
    if (!request.isMatched) {
      const { method, originalUrl } = request
      const message = `Cannot ${method} ${originalUrl}`
      responseBody = {
        message
      }
      response.status(404)
      return response.send(responseBody).end()
    }
    responseBody = response.body
    return response.send(responseBody).end()
  } catch (error) {
    return response.status(500).end()
  }
}
export default {
  responseSend
}
