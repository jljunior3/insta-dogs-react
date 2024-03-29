import React from "react";
import Head from "../Helper/Head";
import { useFetch } from "../../Hooks/useFetch";
import { Loading } from "../Helper/Loading";
import { Error } from "../Helper/Error";
// import { UserStatsGraphs } from "./UserStatsGraphs.jsx";
import { STATS_GET } from "./../../api";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        {/* <div> */}
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
        {/* </div> */}
      </React.Suspense>
    );
  else return null;
};
