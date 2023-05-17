import React, { useEffect } from 'react'

const mypromise = new Promise(
    (resolve, reject) => {  // alguma logica que está produzindo algo e que demora algum tempo
        console.log('Promise started')
        setTimeout(() => {
            console.log('Promise finished')
            const meuInt = Math.floor((Math.random() * 10)) + 1  
            console.log(meuInt)
            if (meuInt % 2 === 0) resolve("Deu certo")
            else reject("Deu errado")
        }, 3000)
    }
)

const meuGet = (url) => {
    console.log(url)
    return mypromise
}

const MyPromise = () => {
    useEffect(() => {
        meuGet('http://www.google.com')
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            <h1>MyPromise</h1>
        </div>
    )
}

export default MyPromise