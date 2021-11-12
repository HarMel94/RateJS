const API = "https://www.cbr-xml-daily.ru/daily_json.js";

const form = document.querySelector("form"),
      addTypeInput = document.querySelector(".Money_Type"),
      addNumberInput = document.querySelector(".Money_Number"),
      resultTypeInput = document.querySelector(".To_Money_Type"),
      resultNumberInput = document.querySelector(".To_Money_Number");


async function converter(){
    const result = await (await fetch(API)).json()    
   
    console.log(result.Valute)

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const allAdds = addNumberInput.value 
            * result.Valute[addTypeInput.value.toUpperCase()].Value

        const allResults = allAdds 
            / result.Valute[resultTypeInput.value.toUpperCase()].Value

        resultNumberInput.value = allResults.toFixed(2)
    });    
}

converter()






