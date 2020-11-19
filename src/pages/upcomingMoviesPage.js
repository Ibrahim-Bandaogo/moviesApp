import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = props => {
  const toDo = () => true;

  return (
    <PageTemplate
      movies={StubAPI.getAll()}
      title={"Upcoming Movies"}
      buttonHandler={toDo}
    />
  );
};

export default UpcomingMoviesPage;