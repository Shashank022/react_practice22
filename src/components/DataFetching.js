import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/42")
      .then((res) => {
        console.log(res);
        setloading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setloading(false);
        setPost({});
        setError("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}
