function generateDom(wrapper, classname, callback) {
    let pets = []; // 8
    let fullPetsList = []; // 48
    const request = new XMLHttpRequest();
    request.open("GET", "../pets.json");

    request.onload = () => {
        pets = JSON.parse(request.response);

        fullPetsList = (() => {
            let tempArr = [];

            for (let i = 0; i < 6; i++) {
                const newPets = pets;

                for (let j = pets.length; j > 0; j--) {
                    let randInd = Math.floor(Math.random() * j);
                    const randElem = newPets.splice(randElem, 1)[0];
                    newPets.push(randElem);
                }

                tempArr = [...tempArr, ...newPets];
            }

            return tempArr;
        })();

        fullPetsList = sort865(fullPetsList);
        createPets(fullPetsList);


        for (let i = 0; i < fullPetsList.length / 6; i++) {
            const stepList = fullPetsList.slice(i * 6, i * 6 + 6);

            for (let j = 0; j < 6; j++) {
                stepList.forEach((item, ind) => {
                    if (item.name === stepList[j].name && ind !== j) {
                        document.querySelector("#pets").children[i * 6 + j].style.border = "5px solid red";
                    }
                });
            }
        }
    }

    const createPets = (petsList) => {
        wrapper.innerHTML += createElements(petsList);

        if (typeof callback === "function") {
            callback();
        }
    };

    createElements = (petsList) => {
        let str = "";
        for (let i = 0; i < petsList.length; i++) {
            str += `
            <div class="${classname}">
                <div class="pet" data-index=${petId(petsList[i])}>
                    <div class="pet__pic">
                        <img class="default-img" src="${petsList[i].img}" alt="" />
                    </div>
                    <div class="pet__body">
                        <div class="pet__name">${petsList[i].name}</div>
                        <button href="#" class="pet__btn btn">Learn more</button>
                    </div>
                </div>
            </div>
            `;
        }

        return str;
    };

    const petId = (pet) => {
        switch (pet.name) {
            case "Katrine":
                return 0;
            case "Jennifer":
                return 0;
            case "Woody":
                return 0;
            case "Sophia":
                return 0;
            case "Timmy":
                return 0;
            case "Charly":
                return 0;
            case "Scarlett":
                return 0;
            case "Freddie":
                return 0;
        }
    };

    request.send();

    const sort865 = (list) => {
        let unique8List = [];
        let length = list.length;
        for(let i = 0; i < length / 8; i++) {
            const uniqueStepList = [];
            for(j = 0; j < list.length; j++) {
                if(uniqueStepList.length >= 8) {
                    break;
                }
                const isUnique = !uniqueStepList.some((item) => {
                    return item.name === list[j].name;
                });

                if (isUnique) {
                    uniqueStepList.push(list[j]);
                    list.splice(j, 1);
                    j--;
                }
            }

            unique8List = [...unique8List, ...uniqueStepList];
        }

        list = unique8List;

        list = sort6recursively(list);

        return list;
    };

    const sort6recursively = (list) => {
        const length = list.length;
    
        for (let i = 0; i < length / 6; i++) {
          const stepList = list.slice(i * 6, i * 6 + 6);
    
          for (let j = 0; j < 6; j++) {
            const duplicatedItem = stepList.find((item, ind) => {
              return item.name === stepList[j].name && ind !== j;
            });
    
            if (duplicatedItem !== undefined) {
              const ind = i * 6 + j;
              const which8OfList = Math.trunc(ind / 8);
    
              list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);
    
              sort6recursively(list);
            }
          }
        }
    
        return list;
      };
    
}
