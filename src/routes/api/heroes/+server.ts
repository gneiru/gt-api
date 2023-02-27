import { heroes } from "$db/heroes";

export const GET = async () => {
  try {
    const data = await heroes.find({}).toArray();
    console.log(data)
    return new Response(JSON.stringify({data: data, message: 'Success'}), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({data: [], message: 'Something Went Wrong'}), { status: 404})
  }
}


// export const POST = async ({ request }) => {
//   const body = await request.json()
//   const authHeader = request.headers.get('Authorization')


//   if (authHeader !== 'Myauthheader') {
//     return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
//   }

//   console.log(body)

//   return new Response(JSON.stringify({message: "Success"}), { status: 201 })
// }