import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setloading(false);
        setPosts(res.data);
        setError("");
      })
      .catch((error) => {
        setloading(false);
        setPosts({});
        setError("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      {/* {posts.length > 0  ? */}
      <div>
        {posts.map((row, key) => (
          <tr key={key}>
            <td>{row.id}</td>
            <td>{row.post}</td>
            <td>{row.body}</td>
          </tr>
        ))}
        {loading ? "Loading" : posts.title}
        {error ? error : null}
      </div>
    </div>
  );
}
