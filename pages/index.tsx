import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import "antd/dist/antd.css";
import { Layout } from "@/components/Layout/Layout";
import { Header } from "@/components/Layout/Header";
import { Content } from "@/components/Layout/Content";
import { Footer } from "@/components/Layout/Footer";
import { Playlist } from "@/components/Playlist/Playlist";
import { Form } from "@/components/Form/Form";
import { usePlaylistIdContext } from "@/hooks/usePlaylistId";

const Home = () => {
  const { playlistId } = usePlaylistIdContext();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>Youtube playlist</Header>
        <Content>
          <Form />
          {playlistId && <Playlist playlistId={playlistId} />}
        </Content>
        <Footer>
          <></>
        </Footer>
      </Layout>
    </div>
  );
};

export default Home;
