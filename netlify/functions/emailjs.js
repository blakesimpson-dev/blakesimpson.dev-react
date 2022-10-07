exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      serviceId: process.env.EMAILJS_SERVICE_ID,
      tempalteId: process.env.EMAILJS_TEMPLATE_ID,
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
    }),
  }
}
