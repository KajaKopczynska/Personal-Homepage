import { useDispatch, useSelector } from "react-redux";
import { Header, Section, StyledGithubIcon, SubHeader, SubTitle } from "./styled";
import { selectRepositoriesStatus, selectRepositories, fetchRepositories } from "../personalHomepageSlice";
import { useEffect } from "react";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories())
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <SubTitle>My recent projects</SubTitle>
            </Header>

        </Section>
    )
};