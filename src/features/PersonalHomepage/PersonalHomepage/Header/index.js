import { Image, Wrapper } from "./styled";
import myPhoto from "./images/pobrane.png";

export const Header = () => (
    <Wrapper>
        <Image src={myPhoto} alt="Kaja Kopczyńska" />
    </Wrapper>
);