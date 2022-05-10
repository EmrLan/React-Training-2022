import axios from "axios";
export function searchbook(keyword, currentPage, count) {
    //console.log("currentPage: " + currentPage + " startIndex: " + String((currentPage-1)*count) + " count: " + count)
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${keyword}&startIndex=${(currentPage-1)*count}&maxResults=${count}`
    )
    .then((res) => {return res});
}
