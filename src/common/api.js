export const getRequest = async(requestURL) => {
    try { 
        const response = await fetch(requestURL)
        return await response.json()
  }
  catch {
    console.log("There was an issue fetching the response")
    return false
  }
}