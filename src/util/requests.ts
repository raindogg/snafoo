export const getSnacks = async (url: string, successFn: Function, errorFn: Function) => {
    const requestBody = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827'
      }
    };
    try {
      await fetch(url, requestBody)
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

export const voteForSnack = async (id: string, successFn: Function, errorFn: Function) => {
  const requestBody = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827'
    }
  };
  try {
    await fetch(`http://localhost:5000/snacks/vote/${id}`, requestBody)
      .then((res) => {
        if (!res.ok) {
              throw new Error('error voting for snacks');
          }
          return res.json()

      })
      .then((snack) => {
          const currVotes = localStorage.getItem('votes');
          const currSelections = localStorage.getItem('selections');
          const newVotes = currVotes ? parseInt(currVotes) + 1 : 1;
          let newSelections = [snack];
          if (currSelections) {
            newSelections = [...JSON.parse(currSelections), snack];
          }
          localStorage.setItem('votes', newVotes.toString());
          localStorage.setItem('selections', JSON.stringify(newSelections));

          return successFn(snack);
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