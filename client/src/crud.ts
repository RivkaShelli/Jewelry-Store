

const GetAllProduct = () => {
    return (fetch('/api').then(res => res.json()).then(jres => jres));

}

function Add(e:any ,buildBody:Function) {
    fetch('/api/products', {
        "method": "POST",
        "headers": { "Content-Type": "application/json"},
        "body": JSON.stringify(buildBody())
    }).then(res => res.json()).then(response => console.log(response));
}

/*const AddToSql = (e: any, buildBody: Function) => {
    e.preventDefault();
    fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildBody())
    }).then(response => response.json()).then(res => console.log(res));
}*/
const deleteFromSql = (e: any, makat: string) => {
    e.preventDefault();
    let api = '/api/products';
    let mak = api.concat('/' + makat);
    fetch(mak, { method: 'DELETE' }).then(res => res.json()).then(res => console.log(res));

}
const updateSql = (e: any, makat: string, buildBody: Function) => {
    e.preventDefault();
    let api = '/api/products';
    let mak = api.concat('/' + makat);
    fetch(mak, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildBody())
    })
}
export const actions = {
    GetAllProduct,
    deleteFromSql,
    updateSql,
    Add
}


