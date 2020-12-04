export async function GetList() {
    try {
        const response = await fetch(
            "http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/list",
            { method: "GET" }
        );
        let json = response.json();
        return json;
    } catch(error) {
        console.error(error);
    }
}

export async function SendList(list: object) {
    try {
        const response = await fetch(
            "http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/list",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...list
                })
            }
        );
    } catch(error) {
        console.error(error);
    }
}

export async function DeleteList(id: number, list: object) {
    try {
        const response = await fetch(
            `http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/list${id}`,
            { method: "DELETE" }
        );
    } catch(error) {
        console.error(error);
    }
}


export async function PatchList(id: number, list: object) {
    try {
        const response = await fetch(
            `http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/list${id}`,
            {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...list
                })
            }
        );
    } catch(error) {
        console.error(error);
    }
}

export async function SendTask(list_id: number, todo: object) {
    try {
        const response = await fetch(
            `http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/list/${list_id}/todo`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...todo
                })
            }
        );
    } catch(error) {
        console.error(error);
    }
}

export async function DeleteTask( id: number, todo: object) {
    try {
        const response = await fetch(
            `http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/todo/${id}`,
            {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                }
            }
        );
    } catch(error) {
        console.error(error);
    }
}

export async function PatchTask(list_id: number, id: number, todo: object) {
    try {
        const response = await fetch(
            `http://mobile-dev.oblakogroup.ru/candidate/NikolaiChirkov/${list_id}/todo/${id}`,
            {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...todo
                })
            }
        );
    } catch(error) {
        console.error(error);
    }
}