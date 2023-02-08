import React, { useEffect, useState } from 'react'
import CreateNode from './CreateNode';
import MyButton from './UI/button/MyButton';
import UpdateNode from './UpdateNode';

function NodesList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [update, setUpdate] = useState(false);

    async function CreateNodeFetch(data) {
        fetch(process.env.REACT_APP_CURRENCY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 0, content: data })
        }).then(setUpdate(true))
    }

    async function DeleteNodeFetch(id) {
        fetch(process.env.REACT_APP_CURRENCY_URL + "/" + id, {
            method: 'DELETE',
        }).then(setUpdate(true))
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_CURRENCY_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result);
                    setUpdate(false);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    setUpdate(false);
                }
            )
    }, [update])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="container">
                <UpdateNode update={() => setUpdate(true)} />
                <div className='nodesList'>
                    {items.map(item => (
                        <div className="node">
                            <div key={item.id}>
                                <p>{item.content}</p>
                                <MyButton className="circle-button circle-button-delete" onClick={() => DeleteNodeFetch(item.id)}>X</MyButton>
                            </div>
                        </div>
                    ))}
                </div>
                <CreateNode create={CreateNodeFetch} />
            </div>
        );
    }
}

export default NodesList;
