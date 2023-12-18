import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Box from "components/Box";
import styles from "./styles.module.scss";
import Text from "components/Text";
import useIsMobile from "helpers/useIsMobile";

interface Props {
  text: string;
  image: string;
  date: string;
  width?: any;
  height?: any;
}

export default function ProjectItem({
  text,
  image,
  date,
  width,
  height,
}: Props) {
  const isMobile = useIsMobile({ mobileSize: 550 });
  return (
    <Box className={styles.container}>
      <div className={styles.left}>
        <img width={width} height={height} src={image} />
      </div>
      <Box className={styles.right}>
        <Box
          display="flex"
          direction="column"
          alignItems={isMobile ? "start" : "center"}
        >
          <Text size={isMobile ? 14 : 18}>{text}</Text>
          <Text size={isMobile ? 14 : 18}>{date}</Text>
        </Box>
        {/* <ArrowForwardIosRoundedIcon color="primary" /> */}
      </Box>
    </Box>
  );
}
