/**
 * See documentation for api routes
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 *
 * @param req
 * @param res
 * @returns
 */

export async function POST(req: Request) {
  const data = await req.json();
  const name = data.name;
  const email = data.email;

  if (!name || !email) {
    return Response.json({ status: 404, error: "Invalid data received" });
  }

  return Response.json({
    status: 200,
    message: "Success, all required data received!!",
    data: {
      name: name,
      email: email,
    },
  });
}
