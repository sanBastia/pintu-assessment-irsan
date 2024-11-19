export async function GET(){

    const res = await fetch('https://api.pintu.co.id/v2/wallet/supportedCurrencies').then((r)=> r.json())

    return new Response(JSON.stringify(res),{
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    });
  }