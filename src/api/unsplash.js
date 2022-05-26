import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID amowUtyHWFIHxZ5J7yy9UYffFzRtqTEjVxO9w4jYBqY",
  },
});
