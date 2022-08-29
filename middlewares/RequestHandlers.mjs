async function routeMatched (request, response, next) {
  try {
    console.log(request.path, request.body)
    request.isMatched = true
    process.nextTick(next)
  } catch (error) {
    console.log(error)
  }
}
export default {
  routeMatched
}
