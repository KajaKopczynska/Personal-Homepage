import { Container, Button, Text, Box, Switch, Icon } from "./styled";

export const ThemeSwitch = () => {

    return (
        <Container>
            <Button
                // onClick={() => dispatch(toggleTheme())}
            >
                <Text>
                    Dark mode on/off
                    {/* Dark mode {isDarkTheme ? "on" : "off"} */}
                </Text>
                <Box>
                    <Switch
                        // moveToRight={isDarkTheme}
                    >
                        <Icon />
                    </Switch>
                </Box>
            </Button>
        </Container>
    );
};