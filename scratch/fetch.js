// use built-in fetch
async function run() {
  try {
    const res = await globalThis.fetch('https://portfolio-maker-193.preview.emergentagent.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });
    const text = await res.text();
    console.log(text.substring(0, 1000));
  } catch(e) {
    console.error(e);
  }
}
run();
