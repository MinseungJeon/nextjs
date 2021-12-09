import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import Item from "../../src/component/Item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;