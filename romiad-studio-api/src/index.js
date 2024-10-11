import app from "./app"
import logger from "@/utils/logger";
import httpCnf from "@/configs/http";

const PORT = process.env.PORT || httpCnf.DEFAULT_PORT;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
