import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Text, Box, Switch, Icon } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Container>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>
                    Dark mode {isDarkTheme ? "on" : "off"}
                </Text>
                <Box>
                    <Switch moveToRight={isDarkTheme}>
                        <Icon />
                    </Switch>
                </Box>
            </Button>
        </Container>
    );
};