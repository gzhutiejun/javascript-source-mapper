import { SourceMapConsumer } from "source-map";
import { readFileSync } from "fs";

const sourceMapPath = "C:/atleos/acc/accelerator-ndc/dist/js/init.js.map";

const rawSourceMap = readFileSync(sourceMapPath, "utf8");

SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
  const originalPosition = consumer.originalPositionFor({
    line: 20937,
    column: 294482,
  });
  console.log("original position = ", originalPosition);
});
