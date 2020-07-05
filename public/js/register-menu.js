// Dish's size registering

    let selectedDishSize = [];
    const sizes = document.querySelectorAll('.grid-dishsize li');
    const inputSize = document.querySelector('[name=dishsize]');

        for(size of sizes) {
            size.onclick = event => {
                const sizeEvent = event.target;
                    sizeEvent.classList.toggle('selected');

                const sizeId = sizeEvent.dataset.id;
                    if(selectedDishSize.indexOf(sizeId) == -1) {
                        selectedDishSize.push(sizeId);
                        console.log(selectedDishSize)
                    } else {
                        selectedDishSize.splice(selectedDishSize.indexOf(sizeId), 1);
                        console.log(selectedDishSize)
                    };

                inputSize.value = selectedDishSize.sort();
            };
        };

// Listing dishes

    let listItems = [];
    const dishList = document.querySelector('#dish-list');
    let addedDishes = document.querySelectorAll('#dish-list li');

    if(dishList.lenght != 0) {
        document.querySelector('#list-title').innerHTML = 'Pratos adicionados:';
    }

    document.querySelector('#add-dish').onclick = event => {
        event.preventDefault()

        let itemInfo = [];
        const dishName = document.querySelector('[name=dish]');
            itemInfo.push(dishName.value);
        const dishDescription = document.querySelector('[name=dish-description]');
            itemInfo.push(dishDescription.value);
            itemInfo.push(inputSize.value);

        // TextNode

            let itemTextName = document.createTextNode(`${dishName.value} `);
            let itemTextDescription = document.createTextNode(` - ${dishDescription.value}`);
        
        // Elements

            let itemName = document.createElement('h2').appendChild(itemTextName);
            let itemDescription = document.createElement('p').appendChild(itemTextDescription);
            let removeItem = document.createElement('span');

            console.log(dishList)
            for(item in dishList) {
                document.querySelector('li span').onclick = event => {
                    const dishRemoval = event.target
                    dishList.remove(dishRemoval);
                }
            }

            let newItem = document.createElement('li');
                newItem.appendChild(removeItem);
                newItem.appendChild(itemName);
                newItem.appendChild(itemDescription);

        // Appending to list and pushing to array 

            dishList.appendChild(newItem);
            listItems.push(itemInfo);
            console.log(listItems)

    }
    