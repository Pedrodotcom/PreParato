let selectedServices = [];
const services = document.querySelectorAll('.grid-services li');
const inputServices = document.querySelector('.services');

    for(service of services) {
        service.onclick = event => {
            const serviceE = event.target;
                serviceE.classList.toggle('selected');


            const serviceId = serviceE.dataset.id;
                if(selectedServices.indexOf(serviceId) == -1) {
                    selectedServices.push(serviceId);
                    console.log(selectedServices)
                } else {
                    selectedServices.splice(selectedServices.indexOf(serviceId), 1);
                    console.log(selectedServices)

                };

            inputServices.value = selectedServices.sort();
        };
    };