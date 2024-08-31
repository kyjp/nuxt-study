export default defineNuxtPlugin(() => {
    const api = $fetch.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
        onRequest: () => {
            // loading.start()
        },
        onResponse: () => {
            // loading.finish()
        },
        onRequestError: () => {
            // loading.error()
            // dialog.error({
            //     title: 'エラー',
            //     content: 'エラーが発生しました'
            // })
        }
    })

    return {
        provide: {
            api,
        }
    }
})