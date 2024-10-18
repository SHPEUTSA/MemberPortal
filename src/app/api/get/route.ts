/**
 * Creating dummy data that would be returned from a database
 * An array of user data
 *
 * Format of data still needs to be determined
 * I created a template for this example:
 *
 * Example = {
 *  "name": "string",
 *  "email": "string"
 *  "points": "number"
 * }
 *
 * See documentation for api routes
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */
const data = [
  {
    name: "John",
    email: "johnwuzhere@aol.com",
    points: 1,
  },
  {
    name: "Jimmy",
    email: "neutron@gmail.com",
    points: 0,
  },
  {
    name: "Sheldon",
    email: "startrek@yahoo.com",
    points: 1,
  },
  {
    name: "Admin",
    email: "youshouldnotseethis@admin.com",
    points: 99999,
  },
];

export function GET() {
  return Response.json({ status: 200, users: data });
}

// TODO: Create example for a GET http request with a database connection
