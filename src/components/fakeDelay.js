export default function fakeDelay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}