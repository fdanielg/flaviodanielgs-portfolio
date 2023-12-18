import Box from "components/Box";
import CardAbout from "App/Components/CardAbout";
import CardCertificates from "App/Components/CardCertificates";
import CardLastProjects from "App/Components/CardLastProjects";
import CardSkills from "App/Components/CardSkills";
import Container from "components/Container";
import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <Box className={styles.container}>
      <Container>
        <Box className={styles.cardsWrapper}>
          <CardAbout />
          <Box className={styles.rightCards}>
            <CardSkills />
            <CardLastProjects />
            <CardCertificates />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
