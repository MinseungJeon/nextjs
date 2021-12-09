import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>HOME | JEON</title>
      </Head>
      (
      <>
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
      </>
      )
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
