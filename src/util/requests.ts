export const getSnacks = async (successFn, errorFn) => {
    const requestBody = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827'
      }
    };
    try {
      await fetch('http://localhost:5000/snacks', requestBody)
        .then((res) => {
          if (!res.ok) {
                throw new Error('error getting snacks');
            }
            return res.json()

        })
        .then((snacks) => {
            return successFn(snacks);
        })
        .catch((err) => { 
            console.log(err);
            throw new Error(err);
        });
      }
      catch(err) {
        console.log(err);
        return errorFn();
      }
}