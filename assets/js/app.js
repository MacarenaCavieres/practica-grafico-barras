$(function () {
    const userResult = $("#userResult");
    // $.ajax({
    //     url: "https://jsonplaceholder.typicode.com/users",
    //     method: "GET",
    //     success(data) {
    //         console.log(data);
    //         data.forEach((user) => {
    //             userResult.append(`
    //             <ul>
    //                 <li>usuario: ${user.name}</li>
    //                 <li>Compañia: ${user.company.name}</li>
    //                 <li>email: ${user.email}</li>
    //                 <li>ciudad: ${user.address.city}</li>
    //                 <li>telefono: ${user.phone}</li>
    //             </ul>
    //             <br>
    //             `);
    //         });
    //     },
    //     error(err) {
    //         console.log(err);
    //     },
    // });
    // const valores = $("#valores");
    // $.ajax({
    //     url: "https://mindicador.cl/api/uf",
    //     method: "GET",
    //     success(data) {
    //         // console.log(data.serie);
    //         data.serie.map((valor) => {
    //             // console.log(valor);
    //             valores.append(`<p>Fecha: ${valor.fecha} - Valor: ${valor.valor} </p>`);
    //         });
    //     },
    //     error(err) {
    //         console.log(err);
    //     },
    // });

    const valores = $("#valores");
    const chartContainer = $("#chartContainer");
    $.ajax({
        url: "https://mindicador.cl/api/uf",
        method: "GET",
        success(data) {
            console.log(data.serie);
            const series = data.serie.map((item) => ({ y: item.valor, label: item.fecha }));

            console.log(series);
            const options = {
                animationEnabled: true,
                title: {
                    text: "Grafico",
                },
                data: [
                    {
                        type: "column",
                        dataPoints: series,
                    },
                ],
            };

            chartContainer.CanvasJSChart(options);
        },
        error(err) {
            console.log(err);
        },
    });
});
