import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";

function App() {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Something went wrong</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
