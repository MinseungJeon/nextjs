import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => setList(res.data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | JEON</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        Best Items
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        New Items
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}
