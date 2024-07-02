class TelephoneInput {
    constructor(element, option = null) {
        this.element = element;
        this.option = {
            dataList: [],
            dataListShow: ['flag', 'name'],
            phoneCountry: option.phoneCountry !== null ? option.phoneCountry : 'RU'
        };
        if (option.dataList) {
            this.option.dataList = option.dataList;
        }

        this.createInput();
    }

    createInput() {
        // Create options container
        this.phoneContainer = document.createElement('div');
        this.phoneContainer.classList.add('phone_input');

        // Create input element
        this.inputElement = document.createElement("input");
        this.inputElement.setAttribute("type", "phone");
        this.inputElement.setAttribute("required", 'required');

        this.inputSetting(this.inputElement);

        // Get and set the name attribute
        const nameAttributeValue = this.element.getAttribute("name");
        this.inputElement.setAttribute("name", nameAttributeValue);

        // Create select box
        const [selectBox, optionList, valueSpan,
            valueContainer, optionsContainer, svg] = this.createSelectBox();

        // Append select box and input element to phone container
        this.phoneContainer.appendChild(selectBox);
        this.phoneContainer.appendChild(this.inputElement);

        // Replace original element with phone container
        this.element.replaceWith(this.phoneContainer);

        this.addListItems(optionList);
        this.searchInput(optionList);

        let display = false;
        optionList.querySelectorAll('li').forEach((li) => {
            li.addEventListener('click', ()=> {
                const codeContry = li.getAttribute('data-value');
                valueSpan.textContent = codeContry;
                this.inputSetting(this.inputElement, codeContry);
            })
        })

        window.addEventListener('click', (event) => {
            // Проверяем, произошел ли клик вне selectBox
            if (!selectBox.contains(event.target) && !optionsContainer.contains(event.target)) {
                if (display) {
                    optionsContainer.style.display = 'none';
                    svg.style.scale = null;
                    display = !display;
                }
            } else if(valueContainer.contains(event.target)) {
                display = !display;
                if (display) {
                    optionsContainer.style.display = 'block';
                    svg.style.scale = '-1';
                } else {
                    optionsContainer.style.display = 'none';
                    svg.style.scale = null;
                }
            }
        });
    }
    inputSetting(inputElement, code = null) {
        let phoneCodeObj = this.option.dataList.find(country => country.code === (code === null ? this.option.phoneCountry : code));

        const phoneCode = phoneCodeObj ? phoneCodeObj.phoneCode : '';
        inputElement.value =  `${phoneCode} (___) ___-____`;
        inputElement.addEventListener('input', function(event) {
            const inputValue = event.target.value;
            console.log()
            const numberPhoneCode = phoneCode.replace(/\D/g, '')
            const numericValue = inputValue.replace(/\D/g, ''); // Удаление всех символов, кроме цифр
            // Проверка на длину и формат ввода
            let formattedValue = phoneCode + ' (' + numericValue.slice(numberPhoneCode.length, 3+numberPhoneCode.length) + '_'.repeat(Math.max(0, 4 - numericValue.length)) + ') '
                + numericValue.slice(4, 7) + '_'.repeat((numericValue.length > 2+numberPhoneCode.length ? Math.max(0, 6+numberPhoneCode.length - numericValue.length) : 3)) + '-'
                + numericValue.slice(7) + '_'.repeat(numericValue.length > 6+numberPhoneCode.length ? Math.max(0, 10+numberPhoneCode.length - numericValue.length): 4);

            let addCursorPosition = 2+numberPhoneCode.length;
            if (numericValue.length <= 3+numberPhoneCode.length) {
            } else if (numericValue.length <= 6+numberPhoneCode.length) {
                addCursorPosition += 1+numberPhoneCode.length
            }
            else if (numericValue.length < 10+numberPhoneCode.length) {
                addCursorPosition += 2+numberPhoneCode.length
            } else {
                // Если введено больше 10 цифр, обрезаем до 10 символов
                formattedValue = phoneCode + ' (' + numericValue.slice(numberPhoneCode.length, 3+numberPhoneCode.length) + ') ' + numericValue.slice(3+numberPhoneCode.length, 6+numberPhoneCode.length) + '-' + numericValue.slice(6+numberPhoneCode.length, 10+numberPhoneCode.length);
            }
            event.target.value = formattedValue;

            if (numericValue.length < 10+numberPhoneCode.length) {
                if (inputElement.createTextRange) {
                    var part = inputElement.createTextRange();
                    part.move("character", 0);
                    part.select();
                } else if (inputElement.setSelectionRange) {
                    inputElement.setSelectionRange(numericValue.length + addCursorPosition, numericValue.length + addCursorPosition);
                }
                inputElement.focus();
            }
        });
    }
    createSelectBox() {
        // Create main container
        const selectBox = document.createElement('div');
        selectBox.classList.add('select_box');

        // Create value container
        var valueContainer = document.createElement('div');
        valueContainer.classList.add('select_box-value');

        // Create value span
        var valueSpan = document.createElement('span');
        valueSpan.classList.add('select_box-value-span');
        valueSpan.textContent = this.option.phoneCountry;

        // Create arrow container
        var arrowContainer = document.createElement('div');
        arrowContainer.classList.add('select_box-value-arrow');

        // Create SVG element
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "1em");
        svg.setAttribute("height", "1em");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");

        // Create path element
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill-rule", "evenodd");
        path.setAttribute("clip-rule", "evenodd");
        path.setAttribute("d", "M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z");
        path.setAttribute("fill", "#808A9A");

        // Append path to SVG
        svg.appendChild(path);

        // Append SVG to arrowContainer
        arrowContainer.appendChild(svg);

        // Append value span and arrow to value container
        valueContainer.append(valueSpan);
        valueContainer.append(arrowContainer);

        // Create options container
        var optionsContainer = document.createElement('div');
        optionsContainer.classList.add('select_box-options');

        // Create search input
        var searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'text');
        searchInput.classList.add('search-box', 'search-box-search-list');
        searchInput.setAttribute('placeholder', 'Search');

        // Create options list
        var optionsList = document.createElement('ul');
        optionsList.classList.add('select_box-options-values');


        // Append search input and options list to options container
        optionsContainer.appendChild(searchInput);
        optionsContainer.appendChild(optionsList);

        // Append value container and options container to main container
        selectBox.appendChild(valueContainer);
        selectBox.appendChild(optionsContainer);

        return [selectBox, optionsList, valueSpan, valueContainer, optionsContainer, svg];
    }
    searchInput(optionsList) {
        const searchInput = this.phoneContainer.querySelector('.search-box-search-list');
        const listItems = optionsList.getElementsByTagName('li');

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            for (let i = 0; i < listItems.length; i++) {
                const text = listItems[i].textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    listItems[i].style.display = '';
                } else {
                    listItems[i].style.display = 'none';
                }
                const value = listItems[i].getAttribute('data-value').toLowerCase();
                if (value.includes(searchTerm)) {
                    listItems[i].style.display = '';
                }
            }
        });
    }
    addListItems(optionsList) {
        var countries = this.option.dataList;
        for (var countryCode in countries) {
            if (countries.hasOwnProperty(countryCode)) {
                var country = countries[countryCode];
                var listItem = document.createElement('li');
                listItem.setAttribute('data-value', country.code);
                listItem.textContent = country.name;
                optionsList.append(listItem);

                var img = document.createElement('img');
                img.setAttribute('src', country.flag);
                img.setAttribute('width', '25px');
                img.setAttribute('height', '25px');
                listItem.prepend(img);
            }
        }
    }
}

// let config = {
//     method: "get",
//     url: "https://api.ipbase.com/v2/info?apikey=JyBnvcgMNfv0eCw7ze2pmsY5Ns8p2R5Ed2ihzsa4",
//     headers: {},
// };

// Функция для получения данных о стране по ее коду
// async function getCountryData(countryCode) {
//     const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
//     const data = await response.json();
//     return data;
// }

// Функция для получения списка всех стран
async function getAllCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
}

// Функция для обработки всех стран от A до Z
async function processAllCountries() {
    const allCountries = await getAllCountries();
    const countriesObject = allCountries.reduce((acc, country) => {
        acc[country.cca2] = {
            name: country.name ? country.name.common : null,
            code: country.cca2,
            flag: country.flags ? country.flags.png : null,
            phoneCode: country.idd.root // Добавьте нужные свойства
            // Другие свойства, которые вы хотите добавить
        };
        return acc;
    }, {});
    return Object.values(countriesObject); // Преобразуем объект в массив и возвращаем
}

// Функция для выполнения запроса fetchData
async function fetchData() {
    try {
        const response = await fetch('https://api.ipbase.com/v2/info?apikey=JyBnvcgMNfv0eCw7ze2pmsY5Ns8p2R5Ed2ihzsa4');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const country = data.data.location.country.alpha2;
        return country;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null; // Возвращаем null в случае ошибки
    }
}

// Обработка результата запроса fetchData
fetchData().then(function(country) {
    // Запрос выполнен успешно
    processAllCountries().then(countriesArray => {
        if (country !== null) {
            document.querySelectorAll('#phone').forEach(element => {
                new TelephoneInput(element, {
                    dataList: countriesArray,
                    phoneCountry: country
                });
            });
        } else {
            document.querySelectorAll('#phone').forEach(element => {
                new TelephoneInput(element, {
                    dataList: countriesArray, // countriesArray должен быть определенным здесь
                    phoneCountry: 'RU'
                });
            });
        }
    }).catch(error => console.error("Произошла ошибка при обработке стран:", error));
}).catch(error => {
    // Ошибка при выполнении запроса fetchData
    console.error('There was a problem with the fetch operation:', error);
    document.querySelectorAll('#phone').forEach(element => {
        new TelephoneInput(element, {
            dataList: [], // Пустой массив, если countriesArray не удалось получить
            phoneCountry: 'RU'
        });
    });
});
