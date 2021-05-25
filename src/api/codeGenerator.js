export async function generateIntegerCode({
  num = 4,
  min = 0,
  max = 7,
  col = 1,
  base = 10,
  format = "plain",
  rnd = "new",
} = {}) {
  const URL = `https://www.random.org/integers/?num=${num}&min=${min}&max=${max}&col=${col}&base=${base}&format=${format}&rnd=${rnd}`;
  try {
    const res = await fetch(URL)
      .then((r) => r.text())
      .then((code) => {
        const parsedCode = code
                            .slice(0, code.length-1)
                            .split("\n")
                            .map(num => parseInt(num));
        return parsedCode;
      });
    return res;
  } catch (err) {
    console.error(err);
  }
}
