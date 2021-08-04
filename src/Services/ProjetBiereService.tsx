//Service pour récupérer les bières




const GetBiere = async (biereId: number) => {
    return await fetch(`https://localhost:44339/api/v1/biere/${biereId}`)
        .then(response => {
            if (response.status !== 200) {
                console.log('Problème GetBiere(biereId) :: ' + response.status);
                return;
            }
            else {
                console.log('GetBiere(biereId) :: ', response);
                return response.json();
            }
        })
        .catch(error => console.log(error))
}


const GetBieres = async () => {
    return await fetch('https://localhost:44339/api/v1/biere')
        .then(response => {
            if (response.status !== 200) {
                console.log('Problème GetBieres() :: ' + response.status);
                return;
            }
            else {
                const returnValue = response.json();
                console.log('GetBieres() :: ', returnValue);
                return returnValue;
            }
        })
        .catch(error => console.log(error))
}


const PostBiere = async (biere: any) => {
    return await fetch('https://localhost:44339/api/v1/biere', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(biere)
    })
        .then(response => {
            if (response.status !== 201) {
                console.log('Problème PostBiere(biereId) :: ' + response.status);
                return;
            }
            else {
                console.log('PostBiere(biere) :: ', response);
                return response.json();
            }
        })
        .catch((err) => console.log(err))
}


const DeleteBiere = async (biereId: any) => {
    const url = 'https://localhost:44339/api/v1/biere/' + biereId;
    const options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return await fetch(url, options)
        .then(response => {
            if (response.status !== 200) {
                console.log('Problème DeleteBiere(biereId) :: ' + response.status);
                return;
            }
            else {
                console.log('DeleteBiere(biere) :: ', response);
                return response.json();
            }
        })
        .catch((err) => console.log(err))
}


const GetStyles = async () => {
    return await fetch('https://localhost:44339/api/v1/style')
        .then(response => {
            if (response.status !== 200) {
                console.log('Problème GetStyles() :: ' + response.status);
                return;
            }
            else {
                const returnValue = response.json();
                console.log('GetStyles() :: ', returnValue);
                return returnValue;
            }
        })
        .catch((err) => console.log(err))
}


export { GetBiere, GetBieres, PostBiere, DeleteBiere, GetStyles }