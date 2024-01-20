import React from "react";
import MoviesResultContainer from "../components/MoviesResultContainer";
import PageContainer from "../components/styled/PageContainer";
import TrendingNow from "../components/TrendingNow";
import Upcoming from "../components/Upcoming";

export default function MainPage() {
  return (
    <PageContainer>
      <MoviesResultContainer />
      <TrendingNow />
      <Upcoming />
    </PageContainer>
  );
}
