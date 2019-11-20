const sleep = (ms = 5000) => new Promise(resolve => setTimeout(resolve, ms);)

exports.handler = async (event, context) => {
  await sleep()
  return { statusCode: 200, body: 'hello' }
};
